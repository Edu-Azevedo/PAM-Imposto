import React from   'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style'


export default function Header(){

    return(
            <View style = {styles.viewHeader}>

                <TouchableOpacity>  
                </TouchableOpacity>
                
                <Text style={styles.textHeader}>Seja Bem vindo(a)</Text>
                <Text style={styles.textHeader}>Ao</Text>
                <Text style={styles.textHeader}>NICE IMPOSTO</Text>

            
            </View>
    );

}