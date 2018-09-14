import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView } from 'react-native';

// COMPONENTS
import UsernameInput from './../components/UsernameInput';
import UsernameAndShare from './../components/UsernameAndShare';
import Search from './../components/Search';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.usernameInputChange = this.usernameInputChange.bind(this);
    this.onPressSubmitUsername = this.onPressSubmitUsername.bind(this);
    this.onPressShare = this.onPressShare.bind(this);
    this.searchInputChange = this.searchInputChange.bind(this);
    this.onPressSubmitSearch = this.onPressSubmitSearch.bind(this);
    this.state = {
      usernameInputDisplay: false,
      usernameInputText: '',
      usernameResponse: '',
      username: '',
      shareResponse: '',
      searchInputText: '',
      searchResultsHeader: false,
      searchResultsUsername: '',
      searchResultList: [],
      searchResultListCount: '',
    }
  }

  componentDidMount = () => {
    // AsyncStorage.clear()
    AsyncStorage.getItem('Username', (err, result) => {
      if (result != null) {
        this.setState({
          username: result,
        });
      } else {
        this.setState({
          usernameInputDisplay: true,
        });
      }
    });
    fetch('https://brandonscode.herokuapp.com')
  }

  // USERNAME INPUT CHANGE FUNCTION
  usernameInputChange(input) {
    this.setState({
      usernameInputText: input
    });
  }

  // SUBMIT USERNAME
  onPressSubmitUsername() {
    const { params } = this.props.navigation.state;
    if (params.connection === true) {
      if (this.state.usernameInputText !== '') {
        const username = JSON.stringify({username:this.state.usernameInputText})
        fetch('https://brandonscode.herokuapp.com/traveltracker/add/username', {
        // fetch('http://localhost:5000/traveltracker/add/username', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: username,
        })
          .then(res => res.text())
          .then(
            (bodyText) => {
              this.setState({
                usernameResponse: bodyText
              });
              setTimeout( () => {
                this.setState({
                  usernameResponse: ''
                })
              }, 2000);
              if (bodyText === 'Username added') {
                AsyncStorage.setItem('Username', this.state.usernameInputText, () => {
                });
                this.setState({
                  usernameInputDisplay: false,
                  username: this.state.usernameInputText,
                });
              }
            })
      }
    } else {
      this.setState({
        usernameResponse: 'No internet connection',
      });
      setTimeout( () => {
        this.setState({
          usernameResponse: '',
        })
      }, 2000);
    }
  }

  // SHARE LIST
  onPressShare() {
    const { params } = this.props.navigation.state;
    if (params.connection === true) {
      const username = JSON.stringify({username:this.state.username})
      AsyncStorage.getItem('Visited', (err, result) => {
        if (result !== null) {
          const visitedData = `[${username},${result}]`;
          fetch('https://brandonscode.herokuapp.com/traveltracker/update', {
          // fetch('http://localhost:5000/traveltracker/update', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: visitedData,
          })
            .then(res => res.text())
            .then(
              (bodyText) => {
                this.setState({
                  shareResponse: bodyText
                });
                setTimeout( () => {
                  this.setState({
                    shareResponse: ''
                  })
                }, 2000);
            })
        } else {
          this.setState({
            shareResponse: 'You have nothing checked'
          });
          setTimeout( () => {
            this.setState({
              shareResponse: ''
            })
          }, 2000);
        }
      });
    } else {
      this.setState({
        shareResponse: 'No internet connection',
      });
      setTimeout( () => {
        this.setState({
          shareResponse: '',
        })
      }, 2000);
    }
  }

  // SEARCH INPUT CHANGE FUNCTION
  searchInputChange(input) {
    this.setState({
      searchInputText: input
    });
  }

  // SUBMIT SEARCH
  onPressSubmitSearch() {
    const { params } = this.props.navigation.state;
    if (params.connection === true) {
      if (this.state.searchInputText !== '') {
        this.setState({
          searchResultsHeader: false,
          searchResultsUsername: '',
          searchResultList: '',
          searchResultListCount: '',
        });
        fetch(`https://brandonscode.herokuapp.com/traveltracker/search/username/${this.state.searchInputText}`)
        // fetch(`http://localhost:5000/traveltracker/search/username/${this.state.searchInputText}`)
          .then(res => res.json())
          .then(
            (result) => {
              if (result.length > 0 && result[0].checked !== undefined) {
                this.setState({
                  searchResultsHeader: true,
                  searchResultsUsername: result[0].username,
                  searchResultList: result[0].checked.sort(),
                  searchResultListCount: result[0].checked.length,
                });
              } else if (result.length > 0 && result[0].checked === undefined) {
                this.setState({
                  searchResultList: ['User has not shared their list'],
                });
                setTimeout( () => {
                  this.setState({
                    searchResultList: '',
                  })
                }, 2000);
              } else {
                this.setState({
                  searchResultsHeader: false,
                  searchResultList: ['Username does not exist'],
                });
                setTimeout( () => {
                  this.setState({
                    searchResultList: '',
                  })
                }, 2000);
              }
            }
          )
      }
    } else {
      this.setState({
        searchResultsHeader: false,
        searchResultList: ['No internet connection'],
      });
      setTimeout( () => {
        this.setState({
          searchResultList: '',
        })
      }, 2000);
    }
  }

  render() {
    const usernameInputDisplay = this.state.usernameInputDisplay;
    return(
      <SafeAreaView style={ShareStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={ShareStyles.scrollContainer}>
          {
            usernameInputDisplay ? (
              <UsernameInput
                usernameInputChange={this.usernameInputChange}
                onPressSubmitUsername={this.onPressSubmitUsername}
                usernameResponse={this.state.usernameResponse}
               />
            ) : (
              <UsernameAndShare
                username={this.state.username}
                onPressShare={this.onPressShare}
                shareResponse={this.state.shareResponse}
              />
            )
          }
          <Search
            searchInputChange={this.searchInputChange}
            onPressSubmitSearch={this.onPressSubmitSearch}
            searchResultsHeader={this.state.searchResultsHeader}
            searchResultsUsername={this.state.searchResultsUsername}
            searchResultList={this.state.searchResultList}
            searchResultListCount={this.state.searchResultListCount}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
