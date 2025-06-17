import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { sendVerificationCode, confirmCode } from '../../services/AuthService';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [confirmation, setConfirmation] = useState<any>(null);

    const setUser = useAuthStore(state => state.setUser);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleSendCode = async () => {
        try {
            const confirm = await sendVerificationCode(phoneNumber);
            setConfirmation(confirm);
            Alert.alert('Code sent');
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Error', error.message);
            } else {
                Alert.alert('Error', 'Unknown error occurred');
            }
        }
    };

    const handleConfirmCode = async () => {
        try {
            if (!confirmation) return;

            const user = await confirmCode(confirmation, code);
            if (user) {
                setUser(user.uid, 'sender');
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'SenderHome' }],
                });
            }
        } catch (error: any) {
            Alert.alert('Invalid code', error.message);
        }
    };


    return (
        <View style={{ padding: 16 }}>
            <Text style={{ marginBottom: 8 }}>Phone Number:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
                placeholder="+905xxxxxxxxx"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />
            <Button title="Send Code" onPress={handleSendCode} />

            {confirmation && (
                <>
                    <Text style={{ marginTop: 16, marginBottom: 8 }}>Verification Code:</Text>
                    <TextInput
                        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
                        placeholder="123456"
                        value={code}
                        onChangeText={setCode}
                        keyboardType="numeric"
                    />
                    <Button title="Confirm Code" onPress={handleConfirmCode} />
                </>
            )}
        </View>
    );
};

export default Signup;
