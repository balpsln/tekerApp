import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SenderHome from '../screens/sender/SenderHome'; // adjust if path is different
import Welcome from '../screens/common/Welcome';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator({ role }: { role: string }) {
    return (
        <Stack.Navigator>
            {role === 'sender' ? (
                <Stack.Screen name="SenderHome" component={SenderHome} />
            ) : (
                <Stack.Screen name="Welcome" component={Welcome} />
            )}
        </Stack.Navigator>
    );
}
