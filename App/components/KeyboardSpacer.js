import React, { useState, useEffect } from "react";
import { Keyboard, View , StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container : {
        left : 0,
        right : 0,
        bottom : 0
    }
});



const KeyboardSpacer = ({onToggle}) => {

    const [keyboardSpace, setKeyboardSpace]= useState(0)

    useEffect(()=> {
       const showListener = Keyboard.addListener('keyboardDidShow', (event)=>{
            const screenHeight = Dimensions.get('window').height;
            const endY = event.endCoordinates.screenY
            setKeyboardSpace(screenHeight - endY)
            onToggle(true)
       });

       const hideListener = Keyboard.addListener('keyboardDidHide', ()=>{
        setKeyboardSpace(0)
         onToggle(false)
       });

         return () => {
             showListener.remove();
             hideListener.remove();
         }

    }, [])

    return  <View style={[styles.container, {height: keyboardSpace}]} />
};

export default KeyboardSpacer;