import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}

export const IconButton = ({ icon, className = '', ...props }: IconButtonProps) => {
    return (
        <button
            className={`p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
            {...props}
        >
            {icon}
        </button>
    );
};