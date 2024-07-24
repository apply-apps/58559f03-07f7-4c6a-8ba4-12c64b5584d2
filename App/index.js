// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, ActivityIndicator, View, FlatList, Image } from 'react-native';

// Combined content of App.js
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Picsum Photos</Text>
                <ImageList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20, // Avoid overlapping with status bar
    },
    scrollView: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

// Combined content of ImageList.js
const images = [
    { id: '1', width: 200, height: 200 },
    { id: '2', width: 200, height: 200 },
    { id: '3', width: 200, height: 200 },
    { id: '4', width: 200, height: 200 },
    { id: '5', width: 200, height: 200 },
];

const ImageList = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const renderItem = ({ item }) => (
        <View style={imageStyles.imageContainer}>
            <Image
                source={{ uri: `https://picsum.photos/${item.width}/${item.height}?random=${item.id}` }}
                style={imageStyles.image}
            />
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={imageStyles.list}
        />
    );
};

const imageStyles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default App;