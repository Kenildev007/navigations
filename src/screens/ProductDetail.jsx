import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Counter from '../components/Counter';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

const ProductDetail = ({ route, navigation }) => {
    const { product } = route.params;
    const dispatch = useDispatch();

    const [count,setCount] = useState(1);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        navigation.navigate('Cart');
        setCount(1);
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 1)
        setCount(count - 1);
    }

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

                    <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />

                </ScrollView>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=> handleAddToCart()} style={styles.addToCart}>
                    <Text style={styles.btnText}>
                        Add To Cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAddToCart()} style={styles.buyNow}>
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
        fontFamily: 'PPNeueMachina_ Light',
        color: '#000000'
    },
    counter:{
        flexDirection: 'row',
        display:'flex',
        alignItems: 'center',
        marginTop:8
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
        fontFamily: 'PPNeueMachina_ Light'
    },
})