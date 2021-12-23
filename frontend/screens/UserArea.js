import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Header from '../components/UserArea/Header'
import Yourorders from '../components/UserArea/Yourorders'

export default function UserArea({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Header navigation={navigation} />
            <Yourorders />
        </SafeAreaView>
    )
}