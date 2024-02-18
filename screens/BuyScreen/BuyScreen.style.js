import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        flex: 1,
        backgroundColor: "#f5f5f5",

        marginHorizontal: 5,
   },

   modalView: {

    justifyContent: "center",
    alignItems: "center",
    height: "100%",

   },

   modal: {
    backgroundColor: "#f0ffff",
    height: "70%",
    width: "92%",
    padding: 10,

    borderRadius: 10,

    shadowColor: "#000",
     shadowOffset: {
     width: 0,
     height: 1,
     },
     shadowOpacity: 0.22,
     shadowRadius: 2.22,

     elevation: 3,  
  
   },

   modalHeader: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingBottom: 8,

    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,

   },

   modalList: {

    flexDirection: "row",
    justifyContent: "space-between",

    padding: 5,

    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,


   },

   modalAmountInput: {

    fontSize: 18,
    paddingStart: 50,
    color: "black",

   },


   sendBtn: {

    backgroundColor: "#1B2F33",
    alignItems: "center",

    borderRadius: 7,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
   },

   sendBtnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,

    padding: 5,
},

   header: {
    
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",

    backgroundColor: "#1789fc",
    
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 10,

    },

   headerTxt: {

     flex: 1,
     fontSize: 25,
     color: "white",
    },

   

    titleView: {

     flexDirection: "row",
     marginVertical: 10,
 
 
    },
 
    title: {
 
     marginStart: 8,
 
     fontSize: 18,
     fontWeight: "bold",
     
 
    },

   container: {

    flex: 1,

   },

   selectList: {

     //backgroundColor: "white",

     width: "100%",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     
     //padding: 10,
     marginBottom: 15,
     paddingTop: 10,
     paddingHorizontal: 5,

     borderColor: "black",
     borderTopWidth: 0.3,
     borderRadius: 7,

   },

})