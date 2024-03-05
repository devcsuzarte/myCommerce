import { ScrollView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { s } from "./addScreen.style";
import { useState } from "react";
import { setItem } from "../../firebase";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getDbID } from "../../firebase";

export function AddScreen({ navigation }){

const [itemTitle, setItemTitle] = useState('none');
const [itemAmount, setItemAmount] = useState('none');
const [itemPrice, setItemPrice] = useState('none');
const [itemDescription, setItemDescription] = useState('none');

const onPress = () => {

    getDbID().then(x => {

        console.log(itemTitle, itemAmount, itemPrice, itemDescription, x);
        setItem(itemTitle, itemAmount, itemPrice, itemDescription, x);
        navigation.replace('Home');

    });

}



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
                <View style={s.header}>
                        <Text style={s.headerTxt}>
                            Adicionar item
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