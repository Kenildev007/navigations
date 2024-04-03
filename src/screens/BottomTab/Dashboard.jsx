import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Dashboard = ({navigation}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleClick = (item) => {
        navigation.navigate('ProductDetail' , {product: item});
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleClick(item)} style={styles.item}>
            <View>
                <Image
                    style={styles.image}
                    src={item.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title} numberOfLines={4}>$ {item.price}</Text>
                <Text style={styles.description} numberOfLines={4}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 9,
        width: '45%',
        textAlign: 'left',
        borderWidth: 2,
        borderRadius: 5
    },
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000000',
    },
    description: {
        marginTop: 3,
        fontSize: 12,
        color: '#000000',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Dashboard;
