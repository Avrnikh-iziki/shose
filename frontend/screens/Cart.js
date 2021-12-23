import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../components/Cart/Header'
import { COLORS } from '../constants'
import Item from '../components/Cart/Item'
export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Header navigation={navigation} />
            <Item navigation={navigation} />
        </SafeAreaView>
    )
}
