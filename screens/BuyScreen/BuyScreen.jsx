import { FlatList, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { s } from "./BuyScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { auth, setSell, updateStock } from "../../firebase";
import { db } from "../../firebase";
import { getDocs, collection, sum } from "firebase/firestore"; 
import { BuyItem } from "../../components/buyItem/buyItem";
import { SellItem, sellItem } from "../../components/sellItem/sellItem"

export function BuyScreen({ navigation, route }){

    const check = <FontAwesome5 name="check-circle" size={25} color="black" />
    const notCheck = " "
    const [buyList, setBuyList] = useState([]);
    const [cart, setCart] = useState([]);
    const [selected, setSelected] = useState(notCheck);
    const [showSummary, setShowSummary] = useState(false);
    const [userID, SetUserID]= useState(route.params.dbID)
    let dbItemsID = userID + "#items"
    let dbSellsID = userID + "#sells"

    async function getItems(){

        const querySnapshot = await getDocs(collection(db, dbItemsID));
        const items = [];
      
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().amount);
      
        if(Number(doc.data().amount) > 0){

            items.push({...doc.data(), id: doc.id});

        }
        

      
          
      });

      setBuyList(items);
      console.log(buyList);

    }

    useEffect(() => {

            getItems();   

    }, [])
    

// <FontAwesome name="check-circle" size={30} color="black" />

    function setSelect(i){
        
        

        if(buyList[i].selected){

            buyList[i].selected = false
            buyList[i].selectIcon = notCheck
            setSelected(notCheck);

        } else if (!buyList[i].selected){
            
            buyList[i].selected = true
            buyList[i].selectIcon = check
            setSelected(check);
        }

        setBuyList(buyList);
        
        //console.log(buyList);
        
    }

    function getCartList(){

        let getSelected = buyList.filter(item => item.selected);

        
        setCart(getSelected);
        
    }

    const onPress = () => {

        getCartList();
        setShowSummary(true);
    }

    function updateAmount(index, text){

        if(Number(text) > 0){

            cart[index].total = text.toString();
            //console.log(cart);

        }

        setCart(cart);
    }

    function registerSell(){

        let sentToDb = [];
        let totalPrice = 0;
        let validSale = true;

         cart.forEach((item) => {

            if(Number(item.amount) < Number(item.total)){

                console.log("GLU GLU YEYE");
                validSale = false;

            } else {

                let getToDb = {

                    itemId: item.id,
                    title: item.title,
                    price: item.price,
                    amount: item.total,
    
                }
                
                updateStock(item.id, dbItemsID, item.amount - item.total);
                console.log(item.id);
                console.log(Number(item.amount - item.total));
                totalPrice = Number(totalPrice) + (Number(item.price) * item.total);
                sentToDb.push(getToDb);  
                getItems(); 
                setShowSummary(false);

            }

      

        })
        
        if(validSale){

            console.log(sentToDb);
            console.log(totalPrice);
    
            setSell(sentToDb, totalPrice, dbSellsID);
        }


    }

    return(
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
            <>
                <View
                    style={s.header}
                >
                    <Text
                        style={s.headerTxt}                    
                    >
                        Registrar Venda
                    </Text>
                    <TouchableOpacity
                        onPress={onPress}                    
                    >
                    <MaterialCommunityIcons name="cart-arrow-right" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={s.root}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showSummary}
                    >   
                        <View
                            style={s.modalView}
                        >
                            <View style={s.modal}>
                                <View
                                    style={s.modalHeader}
                                >
                                    <TouchableOpacity
                                    style={s.modalCloseBtn}
                                    onPress={() => {
                                        setShowSummary(false)
                                        getCartList()
                                        
                                    }}
                                    >
                                    <FontAwesome name="close" size={28} color="black" />
                                    </TouchableOpacity>  
                                    <Text
                                        style={s.modalHeaderTxt}
                                    >
                                        Quantidade:
                                    </Text>
                                </View>

                            <View style={s.container}>

                                    <FlatList
                                        data={cart}
                                        keyExtractor={item => item.id}
                                        renderItem={({item, index}) =>
                                        
                                        <View
                                            style={s.modalList}
                                        >
                                       

                                        <SellItem
                                            title={item.title}
                                            price={item.price}
                                            amount={item.total}
                                    
                                        />

                                        <TextInput
                                            style={s.modalAmountInput}
                                            keyboardType="number-pad"
                                            placeholder="1"
                                            placeholderTextColor="black"
                                            onChangeText={(text) => updateAmount(index, text)}
                                        />
                                         </View>
                                    
                                    }
                                    />
                            </View>

                            <TouchableOpacity
                                style={s.sendBtn}
                                onPress={() => {
                                    getCartList()
                                    registerSell()
                                }}
                            >
                            <Text style={s.sendBtnTxt}>
                                Finalizar venda
                            </Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
    
                    <View style={s.titleView}>
                    <SimpleLineIcons name="arrow-right" size={24} color="#6CA0FF" />
                    <Text style={s.title}>Clique para selecionar</Text>
                    </View>
                        
                        <View style={s.container}>
                        <FlatList
                            data={buyList}
                            refreshing={selected}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) => 

                                <TouchableOpacity
                                    style={s.selectList}
                                    onPress={ () => {
                                        setSelect(index);                                   
                                    }}                           
                                >
                                <BuyItem
                                    title={item.title}
                                    amount={item.amount}
                                    price={item.price}
                                    
                                />
                                <Text>{item.selectIcon}</Text>
                                </TouchableOpacity>
                            }        
                        />
                    </View>
                </View>
            </>
        </TouchableWithoutFeedback>
    )
}