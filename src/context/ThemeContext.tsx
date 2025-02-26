"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the expected shape of the context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create a context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

// Theme provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>('mocha'); // Default theme

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Apply theme globally
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'latte' ? 'mocha' : 'latte';
        setTheme(newTheme); // Update theme state
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
