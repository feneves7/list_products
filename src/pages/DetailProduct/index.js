import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const DetailProduct = ({ navigation }) => (
    
    <View style={styles.container}>
        <Text style={styles.titles}>Nome do Produto</Text>
        <Text>{navigation.state.params.product.title}</Text>
        <Text style={styles.titles}>Descrição</Text>
        <Text>{navigation.state.params.product.description}</Text>
        <Text style={styles.titles}>Imagem do Produto</Text>
        <Image 
            style={styles.image}
            source={{uri: navigation.state.params.product.url}}
        />
    </View>
);


DetailProduct.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});

export default DetailProduct;
