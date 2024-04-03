import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductDetail = ({ route }) => {
    const { product } = route.params;
    return (
        <>
            <View style={styles.main}>
                <ScrollView>
                    <Image
                        style={styles.Image}
                        src={product.image}
                    />
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.title}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View>
                        <Text style={styles.title}>Size:</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.addToCart}>
                    <Text style={styles.btnText}>
                        Add To Cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNow}>
                    <Text style={styles.btnText}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    Image: {
        width: "80%",
        height: 300,
        resizeMode: 'contain',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderColor: '#000000',
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginHorizontal: 10,
        marginVertical: 4,
    },
    description: {
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 4,
        fontFamily:'PPNeueMachina_ Light',

        color: '#000000'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    addToCart: {
        backgroundColor: '#FFEBB2',
        padding: 10,
        width: '49%',
        borderRadius: 10,
    },
    buyNow: {
        backgroundColor: '#E59BE9',
        padding: 10,
        width: '49%',
        borderRadius: 10,
    },
    btnText: {
        textAlign: 'center',
        fontFamily:'PPNeueMachina_ Light'
    },

})