import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { s } from "./signUpScreen.style"
import { useState } from "react";
import { setUser } from "../../firebase";
import { auth, handleSingUp, handleSingIn} from "../../firebase";
import { Alert } from 'react-native';

export function SignUpScreen({ navigation }){

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [commerceName, setCommerceName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassoword, setConfirmPassoword] = useState(null);

    const signInError = (error) => {

        Alert.alert('Erro ao fazer login', error, [
            {
              text: 'Ok',
              onPress: () => console.log('Ok'),
            },
          ]);

      }

    const onPress = () => {

        if((name == null || email == null) || commerceName == null){
            signInError("Todos os campos devem ser preenchidos");
        } else {

            if(password == confirmPassoword){

                handleSingUp(email, password, commerceName, name);
    
            } else {
    
                console.log("WRONG");
                signInError("Senhas não conferem")
                
    
            }
        }


        

        
    }
    

    return(
    <>
        <View style={s.header}>
        <TouchableOpacity
                        onPress={() => navigation.goBack()}                    
                    >
                    <AntDesign name="left" size={28} style={s.headerBtn} />
                    </TouchableOpacity>  
                    <Text
                        style={s.headerTxt}                    
                    >
                        Cadastre-se
                    </Text>
                    <Text
                    >
                    <FontAwesome name="trash-o" size={28} color="#1789fc" />
                    </Text>
        </View>
    <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
        style={s.root}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
     
        <ScrollView>
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Insira seu nome
                </Text>
                <TextInput
                    style={s.input}
                    placeholder="Crackner Lassard"
                    value = {name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Insira o nome do comércio
                </Text>
                <TextInput
                    style={s.input}
                    placeholder="Commerce Shop"
                    value = {commerceName}
                    onChangeText={text => setCommerceName(text)}
                />
            </View>
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Insira seu e-mail
                </Text>
                <TextInput
                    style={s.input}
                    placeholder="commerce12354@gmail.com"
                    value = {email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
            </View>
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Insira uma senha
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
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Confirme a senha
                </Text>
                <TextInput
                    style={s.input}
                    placeholder="Confirmar senha"
                    value = {confirmPassoword}
                    onChangeText={text => setConfirmPassoword(text)}
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                />
            </View>
        </ScrollView>   
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    <View style={s.btnView}>
        <TouchableOpacity
            style={s.btnLogin}
            onPress={() => onPress()}
        >
            <Text style={s.btnTxt}>
                Finalizar Cadastro
            </Text>
        </TouchableOpacity>         
    </View>
    </>
    )
}