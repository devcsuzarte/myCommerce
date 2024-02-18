import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },

    header: {

        alignItems: "center",
        
        marginBottom: 50,
        padding: 30,
        borderRadius: 100,

    },

    headerTxt: {

        fontSize: 18,
        fontWeight: "bold",

    },

    inputContent: {

        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,
       


    },

    title: {

        margin: 10,

        fontSize: 15,
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
        
    },

    btnLogin: {

        backgroundColor: "#6CA0FF",
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
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },

    btnSingUp: {

        backgroundColor: "#214CA9",
        alignItems: "center",

        padding: 20,
        marginHorizontal: 20,
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
        fontSize: 16,
    }
    
    
})