import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    text: string;
}

const CustomButton: React.FC<Props> = ({text,}: Props) => {
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <View style={{flex:1}}>
                <Text style={styles.buttonText}>{text}</Text>

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#5800BB',
        height: 54,
        width: '40%',
        borderRadius: 5, // curve edges
        alignSelf: 'center',
        alignItems: 'center', // centers text in center of button height and width (works with flexdirection)
        flexDirection: 'row', // centers text in center of button height and width (works with align items)
    },
    buttonText: {
        fontFamily: 'San-Francisco',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
}) 


export default CustomButton