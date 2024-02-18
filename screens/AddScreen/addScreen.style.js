import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        flex: 1,
        marginTop: 15,

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

    inputContent: {

        
        marginBottom: 20,
        marginHorizontal: 10,
        


    },

    title: {

        margin: 10,

        fontSize: 17,
        fontWeight: "bold",

    },

    input: {

        backgroundColor: "white",
        padding: 20,
        borderRadius: 7,
        marginVertical: 15,

        fontSize: 15,

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
        marginTop: 55,
        
    },

    btnSubmit: {

        backgroundColor: "#6CA0FF",
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

    btnTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 18,
    }
    
    
})