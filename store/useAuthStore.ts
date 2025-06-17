import { create } from 'zustand';

type AuthStore = {
    userId: string | null;
    role: 'sender' | 'driver' | 'company' | 'freight' | 'admin' | null;
    setUser: (userId: string, role: AuthStore['role']) => void;
    clearUser: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    userId: null,
    role: null,
    setUser: (userId, role) => set({ userId, role }),
    clearUser: () => set({ userId: null, role: null }),
}));
