import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform} from "react-native";
import { s } from "./loginScreen.style";
import { auth, handleSingUp, handleSingIn} from "../../firebase";
import { Entypo } from '@expo/vector-icons';


export function LoginScreen({ navigation }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

      const unsubscribe =  auth.onAuthStateChanged(user => {
            if (user) {

                navigation.navigate('Home', {

                    dbID: user.uid,
            
                })
                
            }
        })

        return unsubscribe;
    }, []);


    const goToHome = (userEmail) => {

        

    }

    const singUp = () => {

        handleSingUp(email, password);

        
    }

    const singIn = () => {

        handleSingIn(email, password);
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
            style={s.root}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={s.header}>
                <Entypo name="shop" size={86} color="black" />
                <Text style={s.headerTxt}>myCommerce</Text>
                </View>            
                <View style={s.inputContent}>
                    <Text style={s.title}>
                        E-MAIL:
                    </Text>
                    <TextInput
                        style={s.input}
                        placeholder="Email"
                        value = {email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    </View>

                    <View style={s.inputContent}>
                    
                    <Text style={s.title}>
                        SENHA:
                    </Text>
                    <TextInput
                        style={s.input}
                        placeholder="Senha"
                        value = {password}
                        onChangeText={text => setPassword(text)}
                        autoCapitalize="none"
                        secureTextEntry
                        textContentType="password"
                    />

                    </View>                
                <View style={s.btnView}>
                    <TouchableOpacity
                        style={s.btnLogin}
                        onPress={singIn}
                    >
                        <Text style={s.btnTxt}>
                            ENTRAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={s.btnSingUp}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={s.btnTxt}>
                            CADASTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}