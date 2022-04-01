/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { ScrollView, View, Linking, Alert, StatusBar } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openlink = (url) => {
  return (
    Linking.openURL(url).catch(()=>
      Alert.alert('Désolé un problème est survenu', 'Veuillez recommencer'))
  )
}

export default () => {
    return (
      <View style={{marginTop : 20, flex : 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <ScrollView>
          <RowItem 
            title="Themes"
            onPress={() => alert('todo!')}
            rightIcon={
              <Entypo name="chevron-right" size={20} color={colors.blue} /> 
           }
        />
        
          <RowSeparator />
        
          <RowItem 
            title="React Native Basics"
            onPress={() => openlink('https://reactnative.dev/docs/getting-started')}
            rightIcon={
              <Entypo name="export" size={20} color={colors.blue} /> 
           }
        />
        
          <RowSeparator />

          <RowItem 
            title="Learn React Native by example"
            onPress={() => alert('todo!')}
            rightIcon={
              <Entypo name="export" size={20} color={colors.blue} /> 
           }
        />

          
        </ScrollView>
      </View>
    )
}