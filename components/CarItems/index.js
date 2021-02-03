import React from 'react'
import{View,Text,ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton"

export default function CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require("../../assets/images/ModelX.jpeg")}
            style={styles.image}/>
            <View style={styles.titles}>
          <Text style={styles.title}>Model s</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
        <StyledButton type="primary" content={"Custom Ordered"} onPress={()=>{
            console.warn("custom ordered was pressed")
        }}/>

        <StyledButton
        type="secondary"
        content={"existing inventory"}
        onPress={()=>{
            console.warn("existing inventory was press")
        }}
        />
      </View>
    )
}
