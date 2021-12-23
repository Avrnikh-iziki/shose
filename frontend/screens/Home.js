import React, { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import Header from '../components/Home/Header'
import Shose from '../components/Home/Shose'
import Recent from '../components/Home/Recent'
import { COLORS } from '../constants'
import ItemDetail from '../components/Home/ItemDetail'

export default function Home({ navigation }) {
    const [showAddToBagModal, setShowAddToBagModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            <View style={{
                flex: 1
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Header navigation={navigation} />
                    <Shose setShowAddToBagModal={setShowAddToBagModal} setSelectedItem={setSelectedItem} />
                    <View style={{
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "80%",
                            borderBottomColor: "orange",
                            borderBottomWidth: 1,
                        }}>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: 400,
                }}>
                    <Recent setShowAddToBagModal={setShowAddToBagModal} setSelectedItem={setSelectedItem} />
                </View>
                <ItemDetail setShowAddToBagModal={setShowAddToBagModal} selectedItem={selectedItem} showAddToBagModal={showAddToBagModal} setSelectedItem={setSelectedItem} />
            </View>
        </SafeAreaView>
    )
}
