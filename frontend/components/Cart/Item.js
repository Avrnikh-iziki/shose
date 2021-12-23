import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons } from "../../constants"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'


export default function Item({ navigation }) {
    const [name, setname] = useState(null)
    const [token, settoken] = useState(null)
    const [id, setid] = useState(null)
    const [email, setemail] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem("token").then(token => settoken(token))
        AsyncStorage.getItem("Name").then(name => setname(name))
        AsyncStorage.getItem("userid").then(id => setid(id))
        AsyncStorage.getItem("emai").then(email => setemail(email))

    }, [])

    const { items } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const newOrder = (item) => {
        const data =
        {
            item: [...item],
            Name: name,
            id: id,
            Email: email
        }
        Axios.post('https://shose-app.herokuapp.com/neworder', data)
            .then(res => {
                reset()
                navigation.navigate('Home')
            })
    }
    const reset = () => {
        dispatch({
            type: "RESET"
        })
    }
    const delItem = (item) => {
        dispatch({
            type: "DEL_ITEM",
            payload: {
                ...item
            }
        })
    }
    const total = (items) => {
        var TOTAL = 0
        items.map(el => {
            TOTAL += parseInt(el.price)
        })
        return TOTAL
    }

    const item = (item, index) => (
        <View
            key={index}
            style={{
                flexDirection: "row",
                width: "100%",
                height: 80,
                marginBottom: 3,
            }}>
            <View  >
                <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{
                        width: 120,
                        height: "100%",
                        marginRight: 2,
                        borderRadius: 3,
                        backgroundColor: COLORS.lightGray
                    }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                flex: 1,
            }}>
                <View style={{
                    flex: .5,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.lightGray,
                }}>
                    <Text style={{
                        textAlign: "center",
                        ...FONTS.body3,
                        color: COLORS.white
                    }}>
                        {item.name}
                    </Text>
                </View>
                <View style={{
                    flex: .3,
                    backgroundColor: COLORS.lightGray,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        textAlign: "center",
                        ...FONTS.h2,
                        color: COLORS.white
                    }}>{item.price} $</Text>
                </View>
                <TouchableOpacity
                    onPress={() => delItem(item)}
                    style={{
                        flex: .2,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: COLORS.lightGray,
                    }}>
                    <Image
                        source={icons.menu}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <View style={{
            flex:1
        }}>
            {
                items?.length > 0
                    ? <View style={{
                        justifyContent: "space-between",
                        flex: 1,
                        alignItems: "center"
                    }}>
                        <ScrollView style={{
                            marginTop: 7,
                            marginHorizontal: 3,
                            width: "98%",
                        }}>
                            {
                                items?.map((el, index) => (
                                    item(el, index)
                                ))
                            }
                        </ScrollView>
                        <View style={{
                            height: 50,
                            marginBottom: 5,
                            width: "80%",
                            backgroundColor: COLORS.lightGray,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{ width: "70%", textAlign: "center", letterSpacing: 3 }}>TOTAL :</Text>
                            <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 16 }}>{total(items)} $</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    token
                                        ? newOrder(items)
                                        : navigation.navigate('User')
                                }
                                style={{
                                    marginLeft: 15,
                                }}>
                                <Image
                                    source={icons.chevron}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    : <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            textAlign: "center"
                        }}>
                            Your Cart is Empty !!!
                        </Text>
                    </View>
            }
        </View>
    )
}
