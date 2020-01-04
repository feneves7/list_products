import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { SearchBar, ListItem  } from 'react-native-elements';

import _ from 'lodash';
import styles from './styles';
import api from '../../services/api';
import containsProduct from '../../services/util';



export default class Products extends Component {
  
    state = {
        productInfo: {},
        docs:[],
        fullDocs:[],
        page: 1,
        search: '',

    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = _.debounce( async  (page = 1) => {

        const response = await api.get(`/products?page=${page}`);        
        const { docs, ...productInfo } = response.data;
        
        this.setState({ 
            docs: [...this.state.docs, ...docs],
            fullDocs: [...this.state.fullDocs, ...docs],
            productInfo,
            page,
        });
    }, 250);

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }


    updateSearch = (search) => {

        const { fullDocs } = this.state;

        const docs = fullDocs.filter(title => {
            return containsProduct(title, search);
        });
        this.setState({ search, docs });
    };

          
    renderItem = ({ item }) => (
    <ListItem
        title={
            <Text style={styles.productTitle}>{item.title}</Text>
        }
        subtitle={
            <Text style={styles.productDescription}>{item.description}</Text>
        }
        leftAvatar={{ source: { uri: item.url } }}
        onPress={() => { this.props.navigation.navigate("DetailProduct", { product: item }); }}
        bottomDivider
        chevron
    />
    )
    
    
    renderSeparator = () => (
        <View
            style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
            }}
        />
    );

    renderHeader = () => {
        const { search } = this.state; 
        return(
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    inputStyle={{color: 'black'}}
                    lightTheme 
                    round
                />
            </View>
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
        <View
            style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#CED0CE"
            }}
        >
            <ActivityIndicator animating size="large" />
        </View>
        );
    };
    

    render () {
        return (
            <View style={styles.container} >
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.docs}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            
            </View>
        )
    }
}


