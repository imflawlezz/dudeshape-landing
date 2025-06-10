import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}

export const IconButton = ({ icon, className = '', ...props }: IconButtonProps) => {
    return (
        <button
            className={`p-1 rounded-full hover:scale-130 transition-transform ${className}`}
            {...props}
        >
            {icon}
        </button>
    );
};