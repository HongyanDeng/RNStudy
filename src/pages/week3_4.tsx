import React, { useState } from 'react';
import {
    View, Text, Image,
    TextInput, ScrollView,
    FlatList, TouchableOpacity,
    TouchableWithoutFeedback, Button,
    Switch, ImageSourcePropType,
    StyleSheet, NativeModules,
    ImagePropsBase,
    Alert,
    Platform,
} from 'react-native'
//import end

//interface begins
//公司名称图标接口及其实现
interface CompanyInfoProps {
    title: string;
    image: ImageSourcePropType
}

const CompanyInfo = ({ title, image }: CompanyInfoProps) => {
    return (
        <View style={styles.CompanyInfo}>
            <Image source={image} style={styles.CompanyImageStyle} />
            <Text style={styles.CompanyTitle}>
                {title}
            </Text>
        </View>
    )
}

//其他登录方式接口及其实现
interface OtherLoginMethodsProps {
    method: string;
    image: ImageSourcePropType
}

const OtherLoginMethods = ({ method, image }: OtherLoginMethodsProps) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('使用TO跳转到' + method)}>
            <Image source={image} style={styles.OtherLoginImageStyle} />
        </TouchableOpacity>
    )
}

//styles begin
const styles = StyleSheet.create({
    LoginPageView: {
        backgroundColor: '#eaecf2ff',
        height: '100%',
    },
    KefuImageView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 35,
        height: 35,
        marginRight: '4%',
        alignSelf: 'flex-end',
        ...Platform.OS === 'ios' ?
            {
                marginTop: '10%',
            } :
            {
                marginTop: '3%',
            },
    },
    KefuImageStyle: {
        alignSelf: 'center',
        margin: 'auto',
        width: 25,
        height: 25,
    },
    CompanyInfo: {

    },
    CompanyImageStyle: {
        width: 80,
        height: 80,
        marginTop: '15%',
        //backgroundColor: 'red',
        alignSelf: 'center',
    },
    CompanyTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sense-serif',
    },
    MailAddressInput: {
        backgroundColor: 'white',
        marginTop: '15%',
        width: '85%',
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 12,
        borderWidth: 1,
        borderColor: 'rgba(109, 90, 90, 0)',
        padding: 10,
        fontSize: 18,
    },
    PasswordInput: {
        backgroundColor: 'white',
        marginTop: '3%',
        marginLeft: 0,
        width: '75%',
        height: 60,
        borderRadius: 20,
        alignSelf: 'center',
        margin: 12,
        borderWidth: 1,
        borderColor: 'rgba(109, 90, 90, 0)',
        padding: 10,
        fontSize: 18,
    },
    LoginViewButton: {
        marginTop: '12%',
        width: '85%',
        height: 60,
        borderRadius: 20,
        backgroundColor: 'black',
        alignSelf: 'center',

    },
    LoginButton: {
        //backgroundColor: 'blue',
        color: 'white',
        //alignSelf: 'center',
        //alignItems: 'center',
        margin: 'auto',
        fontSize: 20,
        textAlign: 'center',
        width: '90%',
        height: 'auto',
        padding: 13,
    },
    PasswordViewButton: {
        flexDirection: 'row',
        //marginTop: '3%',
        //padding: 10,
    },
    ForgetPasswordButton: {
        marginLeft: '7.5%',
        color: 'black',
        padding: 13,
        //backgroundColor:'red'
        fontSize: 16,

    },
    RegisterButton: {
        padding: 13,
        marginLeft: 'auto',
        marginRight: '7.5%',
        color: 'black',
        //backgroundColor:'red'
        fontSize: 16,
    },
    LoginMethodPress: {
        height: 80,
        //alignItems: 'center',
        //justifyContent: 'center',
        marginVertical: 5,
        //paddingHorizontal: 10,
        marginRight: '0%',
        marginLeft: '20%',
        //backgroundColor:'red'

    },
    OtherLoginMethods: {
        alignItems: 'center',
        //backgroundColor: 'red',
        height: 100,
        marginTop: '5%',

    },
    OtherLoginTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20

    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#c6c3c3ff',
        marginHorizontal: 12,
    },
    OtherLoginText: {
        fontSize: 16

    },
    OtherLoginImageStyleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 0
    },
    OtherLoginImageStyle: {
        width: 50,
        height: 50,
        //marginTop: '35%',
        marginLeft: '10%',
        marginRight: '10%',
        //backgroundColor: 'red',
        alignSelf: 'center',
    },
    AgreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 70,
        marginHorizontal: 40,
    },
    radioBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    AgreementText: {
        flexDirection: 'row',
        fontSize: 15,
        color: '#333',
        marginLeft: 8,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 0,
        width: '85%',
        marginLeft: '7%',
        borderRadius: 10,
        height: 60,
    },
    yincangImage: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginLeft: 30,
        //backgroundColor:'red',
        margin: 'auto',
    },

})
//styles end


//function begins
function App() {

    const [address, setAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // 切换密码显隐状态
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.LoginPageView}>
            <View style={styles.KefuImageView}>
                <Image source={require('../assets/kefu.png')} style={styles.KefuImageStyle} />
            </View>

            <View style={styles.CompanyInfo}>
                <CompanyInfo title="MAMMOTION" image={require('../assets/m.png')} />
            </View>

            <View>
                <TextInput
                    style={styles.MailAddressInput}
                    onChangeText={setAddress}
                    value={address}
                    placeholder="邮箱地址"
                    keyboardType="email-address"
                />
                <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={styles.PasswordInput}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="请输入密码"
                        keyboardType="default"
                        secureTextEntry={!isPasswordVisible}
                        textContentType="password"
                        autoCapitalize="none"
                        autoCorrect={false}

                    />

                    {/*<TouchableOpacity
                        style={styles.AgreementContainer}
                        onPress={() => setIsHidden(!isHidden)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.radioBox}>
                            {isHidden && (
                                <Image
                                    source={require('../assets/xianshikejian.png')}
                                    style={styles.checkIcon}
                                    resizeMode="contain"
                                />
                            )}
                        </View>

                    </TouchableOpacity>*/}

                    <TouchableOpacity onPress={togglePasswordVisibility} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Image style={styles.yincangImage} source={isPasswordVisible ? require('../assets/xianshikejian.png') : require('../assets/yincang.png')} />
                    </TouchableOpacity>




                </View>


            </View>
            <TouchableOpacity style={styles.LoginViewButton} onPress={() => Alert.alert('使用TO登录成功！')}>
                <Text style={styles.LoginButton} >
                    登录
                </Text>
            </TouchableOpacity>

            <View style={styles.PasswordViewButton}>
                <TouchableOpacity onPress={() => Alert.alert('使用TO密码重置成功!')} style={styles.ForgetPasswordButton}>
                    <Text >
                        忘记密码
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('使用TO注册成功!')} style={styles.RegisterButton}>
                    <Text >
                        注册
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.OtherLoginMethods}>
                <View style={styles.OtherLoginTextView}>
                    <View style={styles.line} />
                    <Text style={styles.OtherLoginText}>
                        其他登录方式
                    </Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.OtherLoginImageStyleView}>
                    <OtherLoginMethods method="谷歌" image={require('../assets/guge.png')} />
                    {
                        Platform.OS === "ios" ? <OtherLoginMethods method="苹果" image={require('../assets/pingguo.png')} /> : null
                    }
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.AgreementContainer}
                    onPress={() => setIsAgreed(!isAgreed)}
                    activeOpacity={0.8}
                >
                    <View style={styles.radioBox}>
                        {isAgreed && (
                            <Image
                                source={require('../assets/agree.png')}
                                style={styles.checkIcon}
                                resizeMode="contain"
                            />
                        )}
                    </View>
                    <View style={styles.AgreementText}>
                        <Text>
                            同意
                        </Text>
                        <TouchableOpacity onPress={() => Alert.alert('使用TO跳转至隐私协议')} >
                            <Text style={{ color: '#5382e2ff' }}>
                                隐私协议
                            </Text>
                        </TouchableOpacity>
                        <Text>
                            、
                        </Text>
                        <TouchableOpacity onPress={() => Alert.alert('使用TO跳转至用户协议')} >
                            <Text style={{ color: '#5382e2ff' }}>
                                用户协议
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App