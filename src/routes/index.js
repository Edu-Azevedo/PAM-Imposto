import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import Stack from './stack'
import About from '../Screens/About'
import Details from "../Screens/Details";

export default function Router(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>

            <Drawer.Screen name = 'Home' component ={Stack}/>
            <Drawer.Screen name = 'Calcular Imposto' component ={About}/>
            <Drawer.Screen name = 'Historico' component ={Details}/>

        </Drawer.Navigator>
    )
}