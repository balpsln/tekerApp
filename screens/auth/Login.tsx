import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { sendVerificationCode, confirmCode } from '../../services/AuthService';

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [confirmation, setConfirmation] = useState<any>(null);

    const handleSendCode = async () => {
        try {
            const result = await sendVerificationCode(phoneNumber);
            setConfirmation(result);
            Alert.alert('Code sent', 'Please enter the code you received.');
        } catch (err: any) {
            Alert.alert('Error', err.message);
        }
    };

    const handleVerifyCode = async () => {
        try {
            const user = await confirmCode(confirmation, code);
            console.log('User signed in:', user.uid);
            Alert.alert('Success', 'Logged in successfully!');
            // TODO: Navigate to proper screen based on role
        } catch (err: any) {
            Alert.alert('Error', err.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            {!confirmation ? (
                <>
                    <Text>Enter Phone Number</Text>
                    <TextInput
                        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
                        keyboardType="phone-pad"
                        placeholder="+90 555 123 4567"
                        onChangeText={setPhoneNumber}
                    />
                    <Button title="Send Code" onPress={handleSendCode} />
                </>
            ) : (
                <>
                    <Text>Enter Verification Code</Text>
                    <TextInput
                        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
                        keyboardType="number-pad"
                        placeholder="123456"
                        onChangeText={setCode}
                    />
                    <Button title="Verify" onPress={handleVerifyCode} />
                </>
            )}
        </View>
    );
}

