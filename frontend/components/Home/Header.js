import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import { COLORS, icons, SIZES } from '../../constants'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Header({ navigation }) {
    const [search, setsearch] = useState(null)
    const { items } = useSelector(state => state.cartReducer)
    const [tok, settoken] = useState(null)
    useEffect(() => {
        AsyncStorage.getItem("token").then( token =>  settoken(token))
    }, [])
    return (
        <View style={{
            flexDirection: "row",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white
        }}>
            <TouchableOpacity
                style={{
                    marginLeft: SIZES.padding,
                    flex: .2
                }}
                onPress={() => console.log(search)}>
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>
            <View style={{
                flex: .8,
            }}>
                <TextInput
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search"
                    onChangeText={text => setsearch(text)}
                    style={{
                        textAlign: "center",
                        letterSpacing: 2,
                        borderColor: "orange",
                        borderWidth: 2,
                        borderRadius: 10
                    }}
                />
            </View>
            <View style={{
                flexDirection: "row"
            }}>
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.padding,
                        flex: .2,
                        flexDirection: "row"
                    }}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Image
                        source={icons.cart}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                    {
                        items.length > 0 && <View style={{
                            backgroundColor: "rgba(250,0,0,.8)",
                            borderRadius: 50,
                            paddingHorizontal: 5,
                            height: "80%",
                            position: "absolute",
                            left: -6,
                            top: -3
                        }}>
                            <Text style={{
                                color: COLORS.white
                            }}>{items.length}</Text>
                        </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.padding,
                        flex: .2
                    }}
                    onPress={() =>
                        tok == null
                            ? navigation.navigate('User')
                            : navigation.navigate('UserArea')}
                >
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
