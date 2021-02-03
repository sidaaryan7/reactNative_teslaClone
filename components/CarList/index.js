import React from 'react'
import {View,Text,FlatList,Dimensions} from "react-native";
import styles from './styles';
import cars from './cars';
import CarItem from "../CarItems";

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=><CarItem car={item}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelarationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />}
            
            
            ></FlatList>
            
        </View>
    )
}
