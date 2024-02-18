import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export function SellItem(props){
    return(
        
        <View>
            <Text>{props.title}</Text>
            <Text>R${props.price}</Text>
        </View>
       
    )
}

//<Text>{props.selected}</Text>