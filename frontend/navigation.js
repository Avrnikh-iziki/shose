import React from "react";
import { Home, Cart, User, UserArea } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Reux/store";
const store = configureStore()
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    }
}

const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}
                >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Cart' component={Cart} />
                    <Stack.Screen name='User' component={User} />
                    <Stack.Screen name='UserArea' component={UserArea} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>

    )
}

