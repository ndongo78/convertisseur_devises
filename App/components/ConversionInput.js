
import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container : {
       backgroundColor: colors.white,
       marginVertical : 10,
       marginHorizontal: 20,
       flexDirection:"row",
       borderRadius : 5
    },
    containerDisabled : {
        backgroundColor : colors.offWhite
      },
    button : {
      padding : 15,
      borderRightColor : colors.border,
      borderRightWidth : 1,
      backgroundColor : colors.white,
      borderTopLeftRadius : 5,
      borderBottomLeftRadius : 5
    },
    buttonText : {
       fontSize : 18,
       color : colors.blue,
       fontWeight : 'bold'
    },
    input : {
        flex : 1,
        padding : 10,
        color : colors.textLight,

    }
})

const ConversionInput = ({onButtonPress, text, ...props}) => {
      
    const containerStyles =[styles.container]
    if(props.editable === false) {
       containerStyles.push(styles.containerDisabled);
    }

    return(
      <View style={containerStyles}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
        <TextInput 
          style={styles.input}
          {...props}
        />
      </View>
    )
};

export default ConversionInput;