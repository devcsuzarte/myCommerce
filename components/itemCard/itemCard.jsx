import { Text, View } from "react-native";
import { s } from "./itemCard.style";
import { Feather } from '@expo/vector-icons';


export function ItemCard(props){

    return(
        
        <View style={s.root}>
            <View style={s.iconAndName}>
                <Feather name="box" size={50} color="black" />
                <Text style={s.itemTitle}>
                    {props.title}
                </Text>       
            </View>

            
                <Text style={s.amountView}>
                    x{props.amount}
                </Text>
            
            
            



        </View>
       
    )
}