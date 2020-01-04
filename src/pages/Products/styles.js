import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fafafa"
    },

    searchContainer: {
        marginTop: 15,
        marginBottom: 10,
        padding: 10
    },
    input: {
        fontSize: 16,
        fontWeight: 'bold',
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 1,
        marginBottom: 1,
        borderRadius: 5,
    },

    list: {
        padding:10
    },

    productContainer:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#333"
    },

    productDescription: {
        fontSize: 16,
        color:"#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#322b8c",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#322b8c",
        fontWeight: "bold"
    },

});

