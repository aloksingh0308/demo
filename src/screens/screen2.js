import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

class Screen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardDetails: JSON.parse(this.props.route.params.cardData)
        }
    }
    render() {
        // console.log(this.props.route.params.cardData)
        const {cardDetails}=this.state
       
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.content_container}>
                        <View style={[styles.content_card]} >
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>My Personal Card</Text>
                        </View>
                        <View style={[styles.content_card, { width: '30%', alignItems: 'center' }]} >
                            <Image source={require('../download.png')} style={{ width: 50, height: 35, resizeMode: 'contain' }} />
                        </View>
                    </View>
                    <View style={styles.content_container}>
                        <View style={[styles.content_card]} >
                            <Text style={styles.heading_txt}>Card Number</Text>
                            <Text>{cardDetails.card_number}</Text>
                        </View>
                        <View style={[styles.content_card, { width: '30%' }]} >
                            <Text style={styles.heading_txt}>Exp</Text>
                            <Text>{cardDetails.exp_month}/{cardDetails.exp_year}</Text>
                        </View>
                    </View>
                    <View style={styles.content_container}>
                        <View style={[styles.content_card]} >
                            <Text style={styles.heading_txt}>Card Holder</Text>
                            <Text>{cardDetails.card_holder}</Text>
                        </View>
                        < View style={[styles.content_card, { width: '30%' }]} >
                            <Text style={styles.heading_txt}>CVV/CVC</Text>
                            <Text>{cardDetails.cvv_number}</Text>
                        </View>
                    </View>
                    <View style={styles.content_container}>
                        <TouchableOpacity style={{ width: '100%', backgroundColor: '#8acceb', borderRadius: 8 }}>
                            <Text style={{ textAlign: 'center', paddingVertical: '4%', color: '#0a02ab' }}>Edit Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Screen2
const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: '2%',
        backgroundColor: '#fff',
        paddingHorizontal: '3%',
        marginTop: '5%',
        borderRadius: 5
    },
    content_container: {
        width: '100%',
        // height:100,
        // backgroundColor:'red',
        flexDirection: 'row',
        paddingVertical: '2%'
    },
    content_card: {
        width: '70%',
        justifyContent: 'center',
        // alignItems:'center'
    },
    heading_txt: {
        color: '#666',
        width: '100%'
    }
})