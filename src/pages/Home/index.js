import React, { Component } from 'react';
import { BottomNavigation, Text, Provider as PaperProvider  } from 'react-native-paper';

import { View, Image } from 'react-native';

import Products from '../Products';
import About from '../About';


export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <Image
            source={{uri: 'https://pngimage.net/wp-content/uploads/2018/06/produtos-icon-png-3.png'}}
            style={{width:65, height:80}}
        />
    </View>
        )

        
    });

    state = {
        index: 0,
        routes: [
            { key: 'products', title: 'Produtos', icon: 'history', color: '#3F51B5' },
            { key: 'about', title: 'About', icon: 'info', color: '#795548' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        products: () => <Products {...this.props} />,
        about: () => <About />,
    });

    
    render () {
        return (
            <BottomNavigation
                style={{backgroundColor: '#2980e3'}}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
            
        )
    }
}


