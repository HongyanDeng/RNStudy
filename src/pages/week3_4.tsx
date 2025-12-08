import React, { useState } from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity,
    ImageSourcePropType, StyleSheet, Alert, Platform,
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
        <TouchableOpacity onPress={() => Alert.alert('跳转到' + method)}>
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
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginRight: '4%',
        ...Platform.OS === 'ios' ?
            {
                marginTop: '12%',
            } :
            {
                marginTop: '3%',
            },
    },
    KefuImageStyle: {
        alignSelf: 'center',
        width: 25,
        height: 25,
    },
    CompanyInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    CompanyImageStyle: {
        width: 80,
        height: 80,
    },
    CompanyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sense-serif',
    },
    InputView: {
        height: '18%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    MailAddressInput: {
        backgroundColor: 'white',
        width: '90%',
        height: 55,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(109, 90, 90, 0)',
        padding: 10,
        fontSize: 18,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        height: 55,
    },
    PasswordInput: {
        backgroundColor: 'white',
        width: '80%',
        height: 55,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(109, 90, 90, 0)',
        padding: 10,
        fontSize: 18,
    },
    yincangImage: {
        width: 20,
        height: 20,
        marginLeft: 30,
        margin: 'auto',
    },
    LoginViewButton: {
        marginTop: '8%',
        width: '90%',
        height: 55,
        borderRadius: 10,
        backgroundColor: 'black',
        alignSelf: 'center',
    },
    LoginButton: {
        color: 'white',
        margin: 'auto',
        fontSize: 20,
        textAlign: 'center',
        width: '90%',
        padding: 13,
    },
    PasswordViewButton: {
        flexDirection: 'row',
        padding: 12,
    },
    ForgetPasswordButton: {
        marginLeft: '3%',
        color: 'black',
        fontSize: 16,
    },
    RegisterButton: {
        marginLeft: 'auto',
        marginRight: '3%',
        color: 'black',
        fontSize: 16,
    },
    OtherLoginMethods: {
        alignItems: 'center',
        height: 150,
        padding: 10,
    },
    OtherLoginTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#c6c3c3ff',
    },
    OtherLoginText: {
        fontSize: 16
    },
    OtherLoginImageStyleView: {
        flexDirection: 'row',
    },
    OtherLoginImageStyle: {
        width: 50,
        height: 50,
        marginLeft: '8%',
        marginRight: '8%',
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
    AgreementButton:{
        color: '#5382e2ff',
        textDecorationLine: 'underline'
    }
})
//styles end
//function begins
function App() {

    const [address, setAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // 切换密码显隐状态
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.LoginPageView}>
            <TouchableOpacity style={styles.KefuImageView} onPress={() => Alert.alert('跳转到客服页面')}>
                <Image source={require('../assets/kefu.png')} style={styles.KefuImageStyle} />
            </TouchableOpacity>

            <View style={styles.CompanyInfo}>
                <CompanyInfo title="MAMMOTION" image={require('../assets/m.png')} />
            </View>

            <View style={styles.InputView}>
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
                    <TouchableOpacity onPress={togglePasswordVisibility} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Image style={styles.yincangImage} source={isPasswordVisible ? require('../assets/show.png') : require('../assets/hidden.png')} />
                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity style={styles.LoginViewButton} onPress={() => Alert.alert('登录成功！')}>
                <Text style={styles.LoginButton} >
                    登录
                </Text>
            </TouchableOpacity>

            <View style={styles.PasswordViewButton}>
                <TouchableOpacity onPress={() => Alert.alert('密码重置成功!')} style={styles.ForgetPasswordButton}>
                    <Text >
                        忘记密码
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('注册成功!')} style={styles.RegisterButton}>
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
                    <OtherLoginMethods method="谷歌" image={require('../assets/google.png')} />
                    {
                        Platform.OS === "ios" ? <OtherLoginMethods method="苹果" image={require('../assets/apple.png')} /> : null
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
                        <TouchableOpacity onPress={() => Alert.alert('跳转至隐私协议')} >
                            <Text style={styles.AgreementButton}>
                                隐私协议
                            </Text>
                        </TouchableOpacity>
                        <Text>
                            、
                        </Text>
                        <TouchableOpacity onPress={() => Alert.alert('跳转至用户协议')} >
                            <Text style={styles.AgreementButton}>
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