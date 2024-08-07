import React from 'react';
import { TextInput, FlatList, View, Text } from 'react-native';

// STYLES
import { colorMediumGrey } from './../styles/Constants';
import SearchStyles from './../styles/SearchStyles';

export default Search = (props) => {
  return (
    <View style={SearchStyles.container}>
      <Text style={SearchStyles.header}>Search Users</Text>
      <TextInput
        style={SearchStyles.input}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Search'
        placeholderTextColor={colorMediumGrey}
        clearButtonMode='always'
        maxLength={12}
        returnKeyType='go'
        onChangeText={(searchInputText) =>
          props.searchInputChange(searchInputText)
        }
        onSubmitEditing={() => props.onPressSubmitSearch()}
      />
      {props.searchResultsHeader ? (
        <View style={SearchStyles.listHeaderContainer}>
          <Text style={SearchStyles.listHeader}>
            {props.searchResultsUsername} has visited
          </Text>
          <Text style={SearchStyles.listHeader}>
            {props.searchResultListCount} countries/territories.
          </Text>
        </View>
      ) : (
        <Text></Text>
      )}
      <FlatList
        data={props.searchResultList}
        extraData={this.state}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({ item }) => <Text style={SearchStyles.list}>{item}</Text>}
      />
    </View>
  );
};
