import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    root: {

        flex: 1,
    },

    header: {
    
        flexDirection: "row",
        //alignItems: "center",
        
        justifyContent: "space-between",
        backgroundColor: "#1789fc",
        
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 5,
        marginBottom: 18,
    
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
    inputContent: {

        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,

        },
    
    inputTitle: {
    
        margin: 5,
        fontSize: 16,
        fontWeight: "bold",
    
        },
    
    input: {
    
        backgroundColor: "white",
        padding: 20,
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

        btnView: {
        
            width: "100%",
            marginBottom: 15,
            
        },
    
        btnLogin: {
    
            backgroundColor: "#1789fc",
            alignItems: "center",
            padding: 20,
            marginHorizontal: 20,
            marginBottom: 20,
            borderRadius: 7,

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2,
    
            
           
                
        },
    
        btnTxt: {
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
        }
})