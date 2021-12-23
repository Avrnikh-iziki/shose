import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native'
import { BlurView } from 'expo-blur';
import { SIZES, COLORS, FONTS } from '../../constants';
import { useDispatch } from 'react-redux';

export default function ItemDetail({ setShowAddToBagModal, selectedItem, setSelectedItem, showAddToBagModal }) {
    const [selectedSize, setSelectedSize] = useState("")
    const dispatch = useDispatch()
    const selectItem = (itemInfo) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                ...itemInfo,
                size:selectedSize !=""?selectedSize : selectedItem.sizes[0]
            }
        })
    }
    function renderShoeSizes() {
        return (
            selectedItem.sizes?.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 35,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedSize(item)
                        }}
                    >
                        <Text style={{ color: selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white, ...FONTS.body4 }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <>
            {
                selectedItem &&
                <Modal
                    animationType="slide"
                    transparent="true"
                    visible={showAddToBagModal}
                >
                    <BlurView
                        intensity={50}
                        tint="dark"
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0
                            }}
                            onPress={() => setSelectedItem(null)}
                        >
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price} $</Text>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <View>
                                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                    {renderShoeSizes()}
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => {
                                    selectItem(selectedItem)
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>

                </Modal>
            }
        </>
    )
}
