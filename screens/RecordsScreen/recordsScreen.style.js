import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        flex: 1,
        backgroundColor: "#f5f5f5",
       

   },

   header: {
    
    flexDirection: "row",
    //alignItems: "center",
    
    justifyContent: "space-between",
    backgroundColor: "#1789fc",
    
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 5,

    },

    headerBtn: {

      color: "white",
      flex: 1,
    },

   headerTxt: {

     //flex: 10,
     fontSize: 22,
     color: "white",
    },

    salesList: {

      flex: 1,
      borderTopWidth: 0.5,
      borderColor: "#696969",
      padding: 10,
      
    },

    saleDate: {

      color: "#696969",
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 10,

    },

    salesItem: {

      //marginVertical: 10,


    },

    itemInfo: {

      flexDirection: "row",
      alignContent: "space-between",
      alignItems: "center",
      justifyContent: "center",

      marginBottom: 5,

      borderBottomWidth: 3,
      borderColor: "#364156"

    },

    itemTitle: {

      flex: 1,

    },

})