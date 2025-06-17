// services/AuthService.ts
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const sendVerificationCode = async (phoneNumber: string): Promise<FirebaseAuthTypes.ConfirmationResult> => {
    return await auth().signInWithPhoneNumber(phoneNumber);
};

export const confirmCode = async (
    confirmation: FirebaseAuthTypes.ConfirmationResult,
    code: string
) => {
    const userCredential: FirebaseAuthTypes.UserCredential | null = await confirmation.confirm(code);

    if (!userCredential) {
        throw new Error('User credential is null');
    }

    return userCredential.user;
};
