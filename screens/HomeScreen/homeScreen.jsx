import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FontAwesome, SimpleLineIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { s } from "./homeScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ItemCard } from "../../components/itemCard/itemCard";
import { useEffect, useId, useState } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"; 



export function HomeScreen({ navigation, route }){

    const [itemsList, setItemsList] = useState([]);
    const [userID, SetUserID]= useState(route.params.dbID)
    let dbItemsID = userID + "#items"
    
    const handleSingOut = () => {

        auth
            .signOut()
            .then(() => {
                navigation.replace('Login')
            })
            .catch(error => alert(error.message))
    }


   async function searchData(titleSearch){

        if(titleSearch == []){

            getItems();

        } else {

            const filterItemList = [];

            for(let i = 0; i < itemsList.length; i++){
            
            if((itemsList[i].title).includes(titleSearch)){
                filterItemList.push(itemsList[i]);
            }
        }

        setItemsList(filterItemList);

        }
       
    }    

    async function getItems(){

        console.log(` GET FROM GETITEMS ${dbItemsID}`)
        const querySnapshot = await getDocs(collection(db, dbItemsID));
        const items = [];
      
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().amount);
      
        
        items.push({...doc.data(), id: doc.id});

      
          
      });

      setItemsList(items);

    }

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            getItems();
          });

          return unsubscribe;
        

    }, [navigation])

    const onClickCard = (
        id,
        title,
        amount,
        price,
        description

    ) => {
        navigation.navigate('Item', {
            id: id,
            title: title,
            amount: amount,
            price: price,
            description: description,
            dbID: userID
        });
    }

    return(
        
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
            <>
                <View style={s.headerView}>
                <View style={s.header}>
                        <Text style={s.headerTxt}>
                            myCommerce
                        </Text>
                        <TouchableOpacity
                            onPress={handleSingOut}
                        >
                            <AntDesign name="logout" size={25} color="white"/>
                        </TouchableOpacity>
                    </View>

                    <View style={s.searchBar}>
                        <TextInput
                            placeholder="Pesquise um item"
                            style={s.searchInput}
                            onChangeText={(text) => searchData(text)}
                        />
                        <TouchableOpacity
                            style={s.searchBtn}
                            
                        >
                            <FontAwesome name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={s.root}>
                    

                    <View style={s.titleView}>
                    <SimpleLineIcons name="arrow-right" size={24} color="#6CA0FF" />
                    {itemsList.length > 0 ? <Text style={s.title}>MEUS ITENS:</Text> : <Text style={s.title}>Nenhum item encontrado</Text>} 
                    </View>

                    <View style={s.listView}>

                    <FlatList
                    data={itemsList}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => 

                    <TouchableOpacity
                        onPress={() => onClickCard(
                            item.id,
                            item.title, 
                            item.amount,
                            item.price,
                            item.description )}
                    >
                        <ItemCard
                        amount={item.amount} 
                        title={item.title}
                        id={item.id}/>
                    </TouchableOpacity>
                
                    
                    }
                />
                    </View>
                    
     
                    <View style={s.btnView}>
                        
                    </View>

                
                </View>

                <View style={s.bottomBar}>


    
                        <TouchableOpacity
                            style={s.btn}
                            onPress={() => navigation.navigate('Buy', {
                                dbID: userID,
                                itemList: itemsList
                            })}
                        >
                        <MaterialIcons name="arrow-circle-up" size={30} color="black" />
                        <Text style={s.btnTxt}>
                            Venda
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={s.btn}
                            onPress={() => navigation.navigate('Add', {
                                dbID: userID,
                            })}
                        >
                        <MaterialIcons name="add-circle-outline" size={30} color="black" />      
                        <Text style={s.btnTxt}>
                            Adicionar
                        </Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity
                            style={s.btn}
                            onPress={() => navigation.navigate('Records', {
                                dbID: userID,
                            })}
                        >
                        <MaterialIcons name="history" size={30} color="black" />
                        <Text style={s.btnTxt}>
                            Histórico
                        </Text>
                        </TouchableOpacity>
                        
            </View>
            </>
        </TouchableWithoutFeedback>
    )
}