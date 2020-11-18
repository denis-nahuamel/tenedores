import React from "react";
import {StyleSheet, ScrollView,Image,View,Text} from "react-native";
import {Divider} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
 
    return (
        <ScrollView>
           <Image 
            source={require("../../../assets/img/original.png")}
            resizeMode="contain"
            style={styles.logo}
           />
           <View style={styles.viewContainer}>
           
            <Text>Login Form</Text>
           <CreateAccount/>
           </View>
           <Divider style={styles.divider}></Divider>
           <Text>Social login</Text>
        </ScrollView>
    );
}

function CreateAccount(props){
     const navigation=useNavigation();
    return(
        <Text style={styles.textRegister}>
            Aun no tienes una cuenta?{" "}
                <Text style={styles.btnRegister}
                      onPress={() => navigation.navigate("register")}
                >
                    Registrate
                </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});