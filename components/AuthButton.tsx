// components/AuthButton.tsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthButton: React.FC = () => {
    const { user, signIn, signOut } = useAuth();

    return (
        <div>
            {user ? (
                <button onClick={signOut}>Sign Out</button>
            ) : (
                <button onClick={signIn}>Sign In</button>
            )}
        </div>
    );
};

export default AuthButton;
