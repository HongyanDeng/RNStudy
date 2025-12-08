import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView } from "react-native";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            {/* flex 布局*/}
            <View style={styles.testView1}>
            </View>
            <View style={styles.testView2}>

            </View >
            <View style={styles.testView3}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a5dca1ff',
        flexDirection: 'row',//主轴方向
        alignItems: 'center',//其子元素在交叉轴上的排列方式
        justifyContent: 'center',//其子元素主方向的对齐方式
    },
    testView1:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-end',
    },
    testView2:{
        width: 120,
        height: 120,
        backgroundColor: 'yellow',
    },
    testView3:{
        width: 140,
        height: 140,
        backgroundColor: 'green',
    },
});
