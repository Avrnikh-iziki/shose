import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Login from '../components/User/Login'
import Signin from '../components/user/Signin'

export default function User({ navigation }) {
    const [isRegistred, setIsRegistred] = useState(true)
    return (
        <View style={{ flex: 1 }}>
            {isRegistred && <Login setIsRegistred={setIsRegistred} navigation={navigation} />}
            {!isRegistred && <Signin setIsRegistred={setIsRegistred} navigation={navigation} />}
        </View>
    )
}
