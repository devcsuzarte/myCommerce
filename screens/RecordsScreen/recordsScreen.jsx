import { FlatList, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { s } from "./recordsScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ItemCard } from "../../components/itemCard/itemCard";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"; 



export function RecordsScreen({ navigation, route }){

    const [records, setRecords] = useState([]);
    const [summary, setSummary] = useState([]);
    const [userID, SetUserID]= useState(route.params.dbID)
    let dbSellsID = userID + "#sells"


    async function getRecords(){

        const querySnapshot = await getDocs(collection(db, dbSellsID));
        const recordsList = [];
      
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().summary);
      
        
        recordsList.push({...doc.data(), id: doc.id});

      
          
      });

      setRecords(recordsList);
      setSummary(recordsList.summary);
      console.log(summary)

    }

    useEffect(() => {

        getRecords();
        

    }, [])



    return(
        
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
                        Histórico de Vendas
                    </Text>
                    <Text>
                    <FontAwesome name="trash-o" size={28} color="#1789fc" />
                    </Text>
                </View>

                <View style={s.root}>
                        <FlatList
                            data={records}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) =>
                                <View style={s.salesList}>

                                    <Text style={s.saleDate}>{item.buyTime}</Text>

                                    <FlatList
                                        data={item.summary}
                                        keyExtractor={(item) => item.itemId}
                                        renderItem={({item}) => 
                                        <View style={s.itemInfo}>
                                            <Text style={s.itemTitle}>
                                            {item.title}
                                            </Text>
                                            <Text>
                                            x{item.amount}
                                            </Text>
                                        </View>
                                        

                                    }
                                    />
                                    
                                    <Text>Valor total: R${item.totalPrice}</Text>

                                 
                                    
                                    
                                </View>
                        
                        }
                        />
                </View>                
                </>
    )
}