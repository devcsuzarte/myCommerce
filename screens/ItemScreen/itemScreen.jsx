import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { s } from "./itemScreen.style";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Dialog from "react-native-dialog";



export function ItemScreen({ navigation, route }){

    const [itemTitle, setItemTitle] = useState(route.params.title);
    const [itemAmount, setItemAmount] = useState((route.params.amount).toString());
    const [itemPrice, setItemPrice] = useState((route.params.price).toString());
    const [itemDescription, setItemDescription] = useState(route.params.description);
    const [visibleDeleteDiolog, setVisibleDeleteDialog] = useState(false);
    const [userItemsID, setUserItemsID]= useState(route.params.dbID)

    async function updateItem(itemId, itemTitle, itemAmount, itemPrice, itemDescription){

        const dbID = userItemsID + "#items"

        const itemsRef = doc(db, dbID, itemId);
    
        await updateDoc(itemsRef, {
            title: itemTitle,
            amount: itemAmount,
            price: itemPrice,
            description: itemDescription,
        });
    
    }
    
    async function deleteItem(itemId){

        const dbID = userItemsID + "#items"
        await deleteDoc(doc(db, dbID, itemId));
        
    }

    return (
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
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
                        Editar Item
                    </Text>
                    <Text>
                    <FontAwesome name="trash-o" size={28} color="#1789fc" />
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