import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        height: "100%",
        flexDirection: "column",
        flex: 1,

        backgroundColor: "#f5f5f5",

        paddingHorizontal: 5,
   },

   headerView: {

    backgroundColor: "#1789fc",
    paddingBottom: 15,

},

   header: {

     flexDirection: "row",
     alignItems: "center",
     justifyContent: "center",

     paddingTop: 50,
     marginEnd: 10,
 
    },

   headerTxt: {

     flex: 1,
     fontSize: 35,
     marginStart: 20,
     color: "white",
 
    },

   searchBar: {

    flexDirection: "row",
    alignItems: "center",

    padding: 10,
    marginHorizontal: 8,
    marginTop: 25,

    borderRadius: 7,

    backgroundColor: "#f5f5f5",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


   },

   searchInput: {

        flex: 1,
        fontSize: 15,
       
   },

   searchBtn: {

    flexDirection: "flex-end",

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

   listView: {

    flex: 1,

   },

   bottomBar: {

     flexDirection: "row",
     justifyContent: "space-between",

     backgroundColor: "#1789fc",

     paddingVertical: 10,
     paddingHorizontal: 22,
     marginHorizontal: 70,
     marginBottom: 25,
     borderRadius: 50,

     //borderWidth: 0.1,

   },

   btnView: {

   
    backgroundColor: "transparent",

    alignSelf: "flex-end",
    marginTop: "auto",

   },

   btn: {

     alignItems: "center",
     justifyContent: "center",

   },

   btnTxt: {

     marginTop: 1,
     fontSize: 12,
     color: "#f5f5f5",

   },

})