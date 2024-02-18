import { Text, View } from "react-native";
import { s } from "./buyItem.style";
import { useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export function BuyItem(props){
    return(
        
        <View style={s.root}>
            <Text style={s.text}>{props.title}</Text>
            <Text style={s.text}>Preço: R${props.price}</Text>
            <Text style={s.text}>Estoque: x{props.amount}</Text>
        </View>
       
    )
}

//<Text>{props.selected}</Text>