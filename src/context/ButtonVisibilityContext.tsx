"use client";

import React, { createContext, useContext, useState } from 'react';

interface ButtonVisibilityContextProps {
    isVisible: boolean;
    showButton: () => void;
    hideButton: () => void;
}

const ButtonVisibilityContext = createContext<ButtonVisibilityContextProps | undefined>(undefined);

export const useButtonVisibility = () => {
    const context = useContext(ButtonVisibilityContext);
    if (!context) {
        throw new Error('useButtonVisibility must be used within a ButtonVisibilityProvider');
    }
    return context;
};

export const ButtonVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    const showButton = () => setIsVisible(true);
    const hideButton = () => setIsVisible(false);

    return (
        <ButtonVisibilityContext.Provider value={{ isVisible, showButton, hideButton }}>
            {children}
        </ButtonVisibilityContext.Provider>
    );
};