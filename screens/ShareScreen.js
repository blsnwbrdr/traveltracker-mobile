import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// COMPONENTS
import UsernameInput from './../components/UsernameInput';
import UsernameAndShare from './../components/UsernameAndShare';
import Search from './../components/Search';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default ShareScreen = () => {
  const [username, _setUsername] = useState('');
  const usernameRef = useRef(username);
  const setUsername = (newUsername) => {
    usernameRef.current = newUsername;
    _setUsername(newUsername);
  };
  const [usernameInputDisplay, _setUsernameInputDisplay] = useState(false);
  const usernameInputDisplayRef = useRef(usernameInputDisplay);
  const setUsernameInputDisplay = (newUsernameInputDisplay) => {
    usernameInputDisplayRef.current = newUsernameInputDisplay;
    _setUsernameInputDisplay(newUsernameInputDisplay);
  };
  const [usernameInputText, setUsernameInputText] = useState('');
  const [usernameResponse, setUsernameResponse] = useState('');
  const [shareResponse, setShareResponse] = useState('');
  const [searchInputText, setSearchInputText] = useState('');
  const [searchResultsHeader, setSearchResultsHeader] = useState(false);
  const [searchResultsUsername, setSearchResultsUsername] = useState('');
  const [searchResultList, setSearchResultList] = useState([]);
  const [searchResultListCount, setSearchResultListCount] = useState('');

  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('Username', (err, result) => {
      if (result !== null) {
        setUsername(result);
      } else {
        setUsernameInputDisplay(true);
      }
    });
  });

  // USERNAME INPUT CHANGE FUNCTION
  const usernameInputChange = (input) => {
    setUsernameInputText(input);
  };

  // SUBMIT USERNAME
  const onPressSubmitUsername = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        if (usernameInputText !== '') {
          const username = JSON.stringify({
            username: usernameInputText,
          });
          fetch(
            'https://brandonscode.herokuapp.com/traveltracker/add/username',
            {
              // fetch('http://localhost:5000/traveltracker/add/username', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: username,
            }
          )
            .then((res) => res.text())
            .then((bodyText) => {
              setUsernameResponse(bodyText);
              setTimeout(() => {
                setUsernameResponse('');
              }, 2000);
              if (bodyText === 'Username added') {
                AsyncStorage.setItem('Username', usernameInputText, () => {});
                setUsername(usernameInputText);
                setUsernameInputDisplay(false);
              }
            });
        }
      } else {
        setUsernameResponse('No internet connection');
        setTimeout(() => {
          setUsernameResponse('');
        }, 2000);
      }
    });
  };

  // SHARE LIST
  const onPressShare = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        const username = JSON.stringify({ username: usernameRef.current });
        AsyncStorage.getItem('Visited', (err, result) => {
          if (result !== null) {
            const visitedData = `[${username},${result}]`;
            fetch('https://brandonscode.herokuapp.com/traveltracker/update', {
              // fetch('http://localhost:5000/traveltracker/update', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: visitedData,
            })
              .then((res) => res.text())
              .then((bodyText) => {
                setShareResponse(bodyText);
                setTimeout(() => {
                  setShareResponse('');
                }, 2000);
              });
          } else {
            setShareResponse('You have nothing checked');
            setTimeout(() => {
              setShareResponse('');
            }, 2000);
          }
        });
      } else {
        setShareResponse('No internet connection');
        setTimeout(() => {
          setShareResponse('');
        }, 2000);
      }
    });
  };

  // RESET USERNAME
  const onPressResetUsername = () => {
    Alert.alert(
      'Reset Username',
      'Are you sure? This will render your current username unsable, as the server data will be unaffected.',
      [
        { text: 'Cancel' },
        {
          text: 'Yes',
          onPress: () => {
            AsyncStorage.removeItem('Username');
            setUsernameInputDisplay(true);
          },
        },
      ]
    );
  };

  // SEARCH INPUT CHANGE FUNCTION
  const searchInputChange = (input) => {
    setSearchInputText(input);
  };

  // SUBMIT SEARCH
  const onPressSubmitSearch = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        if (searchInputText !== '') {
          setSearchResultsHeader(false);
          setSearchResultsUsername('');
          setSearchResultList('');
          setSearchResultListCount('');
          fetch(
            `https://brandonscode.herokuapp.com/traveltracker/search/username/${searchInputText}`
          )
            // fetch(`http://localhost:5000/traveltracker/search/username/${searchInputText}`)
            .then((res) => res.json())
            .then((result) => {
              if (
                result.length > 0 &&
                result[0].checked !== undefined &&
                result[0].checked !== null
              ) {
                setSearchResultsHeader(true);
                setSearchResultsUsername(result[0].username);
                setSearchResultList(result[0].checked.sort());
                setSearchResultListCount(result[0].checked.length);
              } else if (
                result.length > 0 &&
                (result[0].checked === undefined || result[0].checked === null)
              ) {
                setSearchResultsHeader(true);
                setSearchResultsUsername(result[0].username);
                setSearchResultList('');
                setSearchResultListCount(0);
              } else {
                setSearchResultsHeader(false);
                setSearchResultList(['Username does not exist']);
                setTimeout(() => {
                  setSearchResultList('');
                }, 2000);
              }
            });
        }
      } else {
        setSearchResultsHeader(false);
        setSearchResultList(['No internet connection']);
        setTimeout(() => {
          setSearchResultList('');
        }, 2000);
      }
    });
  };

  return (
    <SafeAreaView style={ShareStyles.safeViewContainer}>
      <StatusBar barStyle='light-content' />
      <View style={ShareStyles.container}>
        {usernameInputDisplayRef.current ? (
          <UsernameInput
            usernameInputChange={usernameInputChange}
            onPressSubmitUsername={onPressSubmitUsername}
            usernameResponse={usernameResponse}
          />
        ) : (
          <UsernameAndShare
            onPressResetUsername={onPressResetUsername}
            username={usernameRef.current}
            onPressShare={onPressShare}
            shareResponse={shareResponse}
          />
        )}
        <Search
          searchInputChange={searchInputChange}
          onPressSubmitSearch={onPressSubmitSearch}
          searchResultsHeader={searchResultsHeader}
          searchResultsUsername={searchResultsUsername}
          searchResultList={searchResultList}
          searchResultListCount={searchResultListCount}
        />
      </View>
    </SafeAreaView>
  );
};
