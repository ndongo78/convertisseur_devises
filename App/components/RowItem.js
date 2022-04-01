import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row : {
    paddingHorizontal : 20,
    paddingVertical : 16,
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems : "center",
    // backgroundColor : "colors.white",
 },
 title : {
    color : colors.text,
    fontSize : 16
 },
 separator : {
  backgroundColor : colors.border,
  height : StyleSheet.hairlineWidth,
  marginLeft : 20
}
})
export const RowItem = ({title ,onPress , rightIcon }) => {
    return(
      <TouchableOpacity onPress={onPress} style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {rightIcon}
      </TouchableOpacity>
    )
}

export const RowSeparator = () => <View style={styles.separator} />