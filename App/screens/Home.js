import React, {useState, useContext} from "react";
import { View, StatusBar, StyleSheet, Image, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native"
import { format } from "date-fns";
import  axios from "axios";
import { Entypo } from '@expo/vector-icons';
import colors from "../constants/colors";
import ConversionInput from "../components/ConversionInput";
import Button from "../components/Button";
import KeyboardSpacer from "../components/KeyboardSpacer";
import { ConversionContext } from '../util/ConversionContext';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.blue,
        // justifyContent: "center"  
        
    },
    content :{
      paddingTop : screen.height * 0.2
    },
    
    logoContainer : {
      alignItems : "center",
      justifyContent : "center"
    },
    logoBackground : {
        height : screen.width * 0.45,
        width :  screen.width * 0.45,
    },
    logo : {
      position : "absolute",
      height : screen.width * 0.25,
      width :  screen.width * 0.25,
    },
    textHeader : {
      color : colors.white,
      fontWeight : "bold",
      fontSize: 30,
      textAlign : "center",
      marginBottom : 20
    },
    text :{
      color : colors.white,
      fontSize : 14,
      textAlign : "center"
    },
    header : {
      marginTop : 30,
      alignItems : "flex-end",
      marginHorizontal : 20
    }
})

export default ({ navigation }) => {

  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates
  } = useContext(ConversionContext);
    
    const [value, setValue] = useState('100');
    const conversionRate = rates[quoteCurrency]
    

    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <ScrollView scrollEnabled={scrollEnabled}>

          <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.push('Options')}>
              <Entypo name="cog" size={32} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/background.png')}
                style={styles.logoBackground}
                resizeMode="contain"
              />
              <Image 
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
         
            <Text style={styles.textHeader}>Currency Converter</Text>

            <ConversionInput 
              text={baseCurrency} 
              value={value}
              onButtonPress={()=> navigation.push('CurrencyList', {title: 'Base Currency',
                                          isBaseCurrency : true
                                                      })}
              keyboardType="numeric"
              onChangeText={(text)=> setValue(text)}
            />
            <ConversionInput 
              text={quoteCurrency}
              value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
              editable={false}
              onButtonPress={()=> navigation.push('CurrencyList', {title: 'Quote Currency', 
                             isBaseCurrency : false
                                           })}
            />
     
            <Text style={styles.text}>
              {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                   date && format(new Date(date) ,'MMMM do, yyyy')
                }`}
            </Text>
   
            <Button text="Reverse Currency" onPress={() => swapCurrencies()} />
            <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible)} />
          </View>
        </ScrollView>
      </View>
    )
}