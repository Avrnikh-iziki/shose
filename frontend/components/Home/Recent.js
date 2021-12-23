import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { images, SIZES, COLORS, FONTS } from '../../constants'
export default function Recent({ setShowAddToBagModal, setSelectedItem }) {
    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
       
    ]);
    
    const recent = (item, index) => (
        <TouchableOpacity
            key={index}
            style={{
                flex: 1,
                flexDirection: 'row',
            }}
            onPress={() => {
                setSelectedItem(item)
                setShowAddToBagModal(true)
            }}
        >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{
                        width: 130,
                        height: 100,
                    }}
                />
            </View>
            <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</Text>
                <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <View
            style={[{
                height:"100%",
                flexDirection: 'row',
            }, styles.recentContainerShadow]}
        >
            <View style={{ width: 70, marginLeft: SIZES.base }}>
                <Image
                    source={images.recentlyViewedLabel}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </View>
            <ScrollView

                style={{
                    marginTop: SIZES.radius
                }}>
                {
                    recentlyViewed?.map((shose, index) => (
                        recent(shose, index)
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
})