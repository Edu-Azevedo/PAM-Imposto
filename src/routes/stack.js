import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import Details from '../Screens/Details';

export default function Routes(){
    
    const stack = createStackNavigator();

    return(
        
            <stack.Navigator>

                <stack.Screen name ='Home' component = {Home} options ={
                   {
                            headerShown:false
                    }
                } />
                <stack.Screen name ='Calcular Imposto' component = {Details}/>
                <stack.Screen name ='Historico' component = {Home}/>

            </stack.Navigator>
    );
}