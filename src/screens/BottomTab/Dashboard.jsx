import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then(data => {
                setCategory(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });
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

    const handleCategory = (item) => {
        setSelectedCategory(item);
    };

    const filterData = selectedCategory ? data.filter(product => product.category === selectedCategory) : data;

    const handleClick = (item) => {
        navigation.navigate('ProductDetail', { product: item });
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
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    category.map((item, index) => {
                        return (
                            <View style={styles.categoriesContainer} key={index}>
                                <TouchableOpacity onPress={() => handleCategory(item)} style={styles.categoriesTouchable}>
                                    <Text style={styles.categories}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoriesContainer: {
        display: 'flex',
    },
    categoriesTouchable:{
        marginVertical:10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius:10,
    },
    categories: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height:42,
        fontSize: 20,
        color: '#000',
        width: 'auto',
        fontFamily: 'Formula1-Regular'
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
        fontFamily: 'radikal_thin-webfont',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Dashboard;
