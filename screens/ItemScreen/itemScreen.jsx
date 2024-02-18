import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { s } from "./itemScreen.style";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Dialog from "react-native-dialog";

async function updateItem(itemId, itemTitle, itemAmount, itemPrice, itemDescription){

    const itemsRef = doc(db, "items", itemId);

    await updateDoc(itemsRef, {
        title: itemTitle,
        amount: itemAmount,
        price: itemPrice,
        description: itemDescription,
    });

}

async function deleteItem(itemId){

    await deleteDoc(doc(db, "items", itemId));
    
}

export function ItemScreen({ navigation, route }){

    const [itemTitle, setItemTitle] = useState(route.params.title);
    const [itemAmount, setItemAmount] = useState((route.params.amount).toString());
    const [itemPrice, setItemPrice] = useState((route.params.price).toString());
    const [itemDescription, setItemDescription] = useState(route.params.description);
    const [visibleDeleteDiolog, setVisibleDeleteDialog] = useState(false);

    return (
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
            <>
            <View style={s.header}>
                        <Text
                        style={s.headerTxt}>
                            Clique no campo para editar
                        </Text>
                    </View>
                <View style={s.root}>
                    <View>
                        <Dialog.Container visible={visibleDeleteDiolog}>
                        <Dialog.Title>Deletar item</Dialog.Title>
                        <Dialog.Description>
                            Tem certeza que deseja deletar este item? Não será possível reverter o processo.
                        </Dialog.Description>
                        <Dialog.Button label="Cancelar" onPress={() => setVisibleDeleteDialog(false)}/>
                        <Dialog.Button label="Deletar" onPress={() => {
                            deleteItem(route.params.id)        
                            navigation.pop();
                        }}/>
                        </Dialog.Container>
                    </View>  

                    <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                        <View style={s.inputContent}>
                            <Text style={s.title}>
                                Nome do Item:
                            </Text>
                            <TextInput
                            style={s.input}
                            value={itemTitle}
                            onChangeText={(title) => setItemTitle(title)}
                            />
                        </View>
                        <View style={s.inputContent}>
                            <Text style={s.title}>
                                Quantidade:
                            </Text>
                            <TextInput
                            style={s.input}
                            value={itemAmount}
                            keyboardType="number-pad"
                            onChangeText={(amount) => setItemAmount(amount)}
                            />
                        </View>

                        <View style={s.inputContent}>
                            <Text style={s.title}>
                                Preço:
                            </Text>
                            <TextInput
                            style={s.input}
                            value={itemPrice}
                            keyboardType="decimal-pad"
                            onChangeText={(price) => setItemPrice(price)}
                            />
                        </View>

                        <View style={s.inputContent}>
                            <Text style={s.title}>
                                Descrição:
                            </Text>
                            <TextInput
                            style={s.input}
                            value={itemDescription}
                            onChangeText={(description) => setItemDescription(description)}
                            />
                        </View>
                    

                <View style={s.btnView}>
                    <View style={s.btnRow}>
                    <TouchableOpacity 
                    style={s.btnSubmit}
                    onPress={() => 
                        {updateItem(route.params.id, 
                            itemTitle, 
                            itemAmount, 
                            itemPrice, 
                            itemDescription);
                            
                            navigation.pop();
                        }
                        }
                    >
                        <Text style={s.btnTxt}>
                            Salvar Alterações
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.btnDelete}>
                        <Text 
                        style={s.btnTxt}
                        onPress={() => setVisibleDeleteDialog(true)}
                        >
                            Deletar
                        </Text>
                    </TouchableOpacity>            
                    </View>

                    <TouchableOpacity 
                    style={s.btnCancel}
                    onPress={() => navigation.goBack()}
                    >
                        <Text style={s.btnTxt}>
                            Descartar Alterações
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
                </View>
            </>
        </TouchableWithoutFeedback>
    )
}