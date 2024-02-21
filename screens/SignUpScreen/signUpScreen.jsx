import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from "react-native";
import { s } from "./signUpScreen.style"
import { useState } from "react";

export function SignUpScreen(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [commerceName, setCommerceName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassoword, setConfirmPassoword] = useState("");

    return(
    <>
        <View style={s.header}>
            <Text style={s.headerTxt}>Cadastre-se</Text>
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
                    value = {email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={s.inputContent}>
                <Text style={s.inputTitle}>
                    Insira o nome do comércio
                </Text>
                <TextInput
                    style={s.input}
                    placeholder="Commerce Shop"
                    value = {email}
                    onChangeText={text => setEmail(text)}
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
                    value = {password}
                    onChangeText={text => setPassword(text)}
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
        >
            <Text style={s.btnTxt}>
                Finalizar Cadastro
            </Text>
        </TouchableOpacity>         
    </View>
    </>
    )
}