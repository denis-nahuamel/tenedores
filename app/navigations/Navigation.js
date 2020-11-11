import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import FavoritesStack from "./FavoritesStack";
import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import { Icon } from "react-native-elements";
const Tab= createBottomTabNavigator();
export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="restaurants" 
            tabBarOptions={{inactiveTintColor : "#646464", activeTintColor: "#00a680"}}
            screenOptions={({ route })=>({
                tabBarIcon:({color})=>screenOptions(route,color)
            })} >
                <Tab.Screen name="restaurants" component={RestaurantsStack}
                 options={{ title:"Restaurantes" }}/>
                <Tab.Screen name="account" component={AccountStack}
                 options={{ title:"Cuenta" }}/>
                <Tab.Screen name="favorites" component={FavoritesStack}
                 options={{ title:"Favoritos" }}/>
                <Tab.Screen name="topRestaurants" component={TopRestaurantsStack}
                 options={{ title:"Top Restaurantes" }}/>
                <Tab.Screen name="search" component={SearchStack}
                 options={{ title:"Buscar" }}/>
            </Tab.Navigator>
        </NavigationContainer>

        
    )
    function screenOptions(route, color){
            let iconName;
            switch (route.name) {
                case "restaurants":
                    iconName="compass-outline"
                    break;
            
                default:
                    break;
            }
            return(
                <Icon type="material-community" 
                iconName={iconName} size={22} color={color}></Icon>
            )
        }
};