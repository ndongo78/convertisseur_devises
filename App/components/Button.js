import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import colors from '../constants/colors';

const styles = StyleSheet.create({
    button : {
      flexDirection : "row",
      alignItems : 'center',
      justifyContent : 'center',
      marginVertical : 20
    },
    buttonText : {
     fontSize : 16,
     color : colors.white

    },
    buttonIcon : {
      marginRight : 10,
      width : 20,
      height : 20
    }
});

const Button = ({ onPress, text}) => {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image 
            source={require('../assets/images/reverse.png')}
            style={styles.buttonIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
      
    );
};

export default Button;