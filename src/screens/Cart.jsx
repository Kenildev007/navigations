import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Counter from '../components/Counter'

const Cart = () => {
    return (
        <ScrollView>
            <View>
                <View style={styles.cartItemContainer}>
                    <View>
                        <Image style={styles.imageContainer}
                            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                        />
                    </View>
                    <View>
                        <View style={styles.detailsLine}>
                            <Text>item Name</Text>
                            <TouchableOpacity><Icon name="delete" size={20} /></TouchableOpacity>
                        </View>
                        <Text style={styles.price}>Price</Text>

                        <Counter  />

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartItemContainer: {
        height: '100%',
        width: '95%',
        padding: 20,
        backgroundColor: '#C8FFE0',
        flexDirection: 'row',
        margin: 8,
        flex: 1
    },
    imageContainer: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    detailsLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        paddingHorizontal: 10,
        backgroundColor: '#C8sFFE0',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        paddingHorizontal: 10,
        marginTop: 15
    },
    counter: {
        fontSize: 15,
        color: '#000',
        paddingHorizontal: 5,
        marginTop: 15
    }
})