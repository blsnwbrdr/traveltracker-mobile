import React, { Component } from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import UsernameAndShareStyles from './../styles/UsernameAndShareStyles';

export default class UsernameAndShare extends Component {

  render() {
    return (
      <View>
        <Text style={UsernameAndShareStyles.usernameText}>{this.props.username}</Text>
        <View style={UsernameAndShareStyles.shareButtonContainer}>
          <TouchableOpacity onPress={ () => this.props.onPressShare() }>
            <View style={UsernameAndShareStyles.shareButton}>
              <Text style={UsernameAndShareStyles.shareText}>Share List</Text>
              <FontAwesome name="share-square-o" size={16} style={UsernameAndShareStyles.shareIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={UsernameAndShareStyles.responseContainer}>
          <Text style={UsernameAndShareStyles.responseText}>{this.props.shareResponse}</Text>
        </View>
      </View>
    )
  }
}
