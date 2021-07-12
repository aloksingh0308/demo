import React, { Component } from 'react'
import { Text, SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView,Image } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-view";
import ModalDropDown from 'react-native-modal-dropdown';

const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const year = ['2021', '2022', '2023', '2024', '2025']
class Screen1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card_number: '',
            card_holder: '',
            exp_month: '',
            exp_year: '',
            cvv_number: ''
        }
    }

    addCard = () => {
        const cardDeatils = JSON.stringify({
            card_number: this.state.card_number,
            card_holder: this.state.card_holder,
            exp_month: this.state.exp_month,
            exp_year: this.state.exp_year,
            cvv_number: this.state.cvv_number
        })
        //   console.log(cardDeatils)
        this.props.navigation.navigate('Screen2', { cardData: cardDeatils })
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.txt_container}>
                        <Text style={styles.heading_txt} >Add Credit Card</Text>
                        <Text style={styles.txt}>Each screen in the navigator can specify some options for the navigator, such as the title to render in the header.</Text>
                    </View>
                    <View style={styles.card_container}>
                        <Text style={[styles.heading_txt, { textAlign: 'left', paddingVertical: '1%', paddingHorizontal: '2%' }]}>Card Number</Text>
                        <View style={[styles.input_container, { height: 40,flexDirection:'row',justifyContent:'space-between',alignItems:'center' }]}>
                            <TextInput
                                onChangeText={(text) => this.setState({ card_number: text })}
                                placeholder='XXXX-XXXX-XXXX-XXXX'
                                keyboardType='decimal-pad'
                            />
                            <Image source={require('../download.png')} style={{width:50,height:30,resizeMode:'contain'}} />
                        </View>
                    </View>
                    <View style={[styles.card_container, { paddingVertical: '0%' }]}>
                        <Text style={[styles.heading_txt, { textAlign: 'left', paddingVertical: '1%', paddingHorizontal: '2%' }]}>Card Holder</Text>
                        <View style={[styles.input_container, { height: 40 }]}>
                            <TextInput
                                onChangeText={(text) => this.setState({ card_holder: text })}
                                placeholder='John Deo'
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ width: '60%' }}>
                            <Text style={[styles.heading_txt, { textAlign: 'left', paddingVertical: '1%', paddingHorizontal: '5%' }]}>Expiration Date</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={[styles.card_container, { paddingTop: '3%', width: 80 }]}>

                                    <View style={[styles.input_container, { height: 40, alignItems: 'center', justifyContent: 'center' }]}>
                                        <ModalDropDown
                                            defaultValue={month[0]}
                                            dropdownStyle={{width:'20%'}}
                                            onSelect={(i) => this.setState({ exp_month: month[i] })}
                                            options={month} />
                                    </View>
                                </View>
                                <View style={[styles.card_container, { paddingTop: '3%', width: 80 }]}>
                                    {/* <Text style={[styles.heading_txt,{textAlign:'left',paddingVertical:'1%',paddingHorizontal:'5%'}]}>Card Holder</Text> */}
                                    <View style={[styles.input_container, { height: 40, alignItems: 'center', justifyContent: 'center', }]}>
                                        <ModalDropDown options={year}
                                            defaultValue={year[0]}
                                            dropdownStyle={{width:'20%'}}
                                            onSelect={(i) => this.setState({ exp_year: year[i] })}
                                        />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ width: '40%' }}>
                            <Text style={[styles.heading_txt, { textAlign: 'left', paddingVertical: '1%', paddingHorizontal: '0%' }]}>CVV/CVC</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <View style={[styles.card_container, { paddingTop: '3%' }]}>
                                    <View style={[styles.input_container, { height: 40, width: 80 }]}>
                                        <TextInput
                                            onChangeText={(text) => this.setState({ cvv_number: text })}
                                            placeholder='323'
                                            keyboardType='decimal-pad'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: '90%', flexDirection: 'row', marginVertical: '3%', alignSelf: 'center' }}>
                        <Switch />
                        <Text>Mark As Default</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity onPress={() => this.addCard()}
                        // onPress={() => this.props.navigation.navigate('Screen2')}
                        >
                            <Text style={styles.btn_txt}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Screen1

const styles = StyleSheet.create({
    input_container: {
        borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor:'#999'

    },
    txt_container: {
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        paddingVertical: '2%',
        paddingBottom: '8%'
    },
    heading_txt: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: '5%',
        fontWeight: 'bold',
        color: '#555'
    },
    txt: {
        fontSize: 12,
        textAlign: 'justify'
    },
    card_container: {
        paddingVertical: '5%'
    },
    btn_txt: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: '5%',
        fontWeight: 'bold',
        backgroundColor: '#3e79de',
        color: '#fff',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5
    }
})