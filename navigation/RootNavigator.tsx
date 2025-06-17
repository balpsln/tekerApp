import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthStack from './AuthStack';
import { useAuthStore } from '../store/useAuthStore';

export default function RootNavigator() {
    const { userId, role } = useAuthStore();

    return (
        <NavigationContainer>
            {userId && role ? (
                <AppNavigator role={role} />
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    );
}
