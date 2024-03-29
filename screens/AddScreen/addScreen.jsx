import { ScrollView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { s } from "./addScreen.style";
import { useState } from "react";
import { setItem } from "../../firebase";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export function AddScreen({ navigation, route }){

const [itemTitle, setItemTitle] = useState('none');
const [itemAmount, setItemAmount] = useState('none');
const [itemPrice, setItemPrice] = useState('none');
const [itemDescription, setItemDescription] = useState('none');
const [userID, SetUserID]= useState(route.params.dbID)
    let dbItemsID = userID + "#items"

const onPress = () => {

    console.log(itemTitle, itemAmount, itemPrice, itemDescription);
    setItem(itemTitle, itemAmount, itemPrice, itemDescription, dbItemsID);
    navigation.replace('Home', {
        dbID: userID
    });



}

const cleanFieldsPressed = () => {

    setItemTitle("")
}



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
            <View
                    style={s.header}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}                    
                    >
                    <AntDesign name="left" size={28} style={s.headerBtn} />
                    </TouchableOpacity>  
                    <Text
                        style={s.headerTxt}                    
                    >
                        Adicionar Item
                    </Text>
                    <Text
                        onPress={cleanFieldsPressed}
                    >
                    <FontAwesome name="trash-o" size={28} color="#1789fc" />
                    </Text>
                </View>
                <View style={s.root}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                    <View style={s.inputContent}>
                        <Text style={s.title}>
                            Nome do Item:
                        </Text>
                        <TextInput
                            style={s.input}
                            placeholder="Ex: Samsung Galaxy Airbuds"
                            spellCheck={false}
                            autoCapitalize="characters"
                            onChangeText={(title) => setItemTitle(title)}
                        />

                        <Text style={s.title}>
                            Quantidade:
                        </Text>
                        <TextInput
                            style={s.input}
                            placeholder="Ex: 10"
                            keyboardType="number-pad"
                            onChangeText={(amount) => setItemAmount(amount)}
                        />

                        <Text style={s.title}>
                            Preço:
                        </Text>
                        <TextInput
                            style={s.input}
                            keyboardType="decimal-pad"
                            placeholder="Ex: 1200"
                            onChangeText={(price) => setItemPrice(price)}
                        />

                        <Text style={s.title}>
                            Descrição:
                        </Text>
                        <TextInput
                            style={s.input}
                            placeholder="Ex: Fone de ouvido"
                            onChangeText={(description) => setItemDescription(description)}
                        />

                        <View style={s.btnView}>
                            <TouchableOpacity
                                style={s.btnSubmit}
                                onPress={onPress}
                            >
                                <Text style={s.btnTxt}>
                                    Registrar item
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </>
        </TouchableWithoutFeedback>
    )
}