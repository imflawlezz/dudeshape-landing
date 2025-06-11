'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface CategoryButtonProps {
    text: string;
    Icon?: ReactNode;
    onClick?: () => void;
}

export default function CategoryButton({
                                           text,
                                           Icon,
                                           onClick,
                                       }: CategoryButtonProps) {
    const hasIcon = Boolean(Icon);

    return (
        <button
            onClick={onClick}
            className={clsx(
                'group flex flex-col items-center justify-center font-dm-sans',
                'border border-gray-300 p-4 w-full h-28 cursor-pointer transition-colors',
                'bg-white text-gray-800 hover:bg-[var(--primary)] hover:text-white'
            )}
        >
            {hasIcon && (
                <div
                    className={clsx(
                        'mb-2 text-[var(--primary)] transition-colors group-hover:text-white'
                    )}
                >
                    {Icon}
                </div>
            )}
            <span
                className={clsx(
                    'font-light',
                    hasIcon ? 'text-lg' : 'text-xl font-medium'
                )}
            >
                {text}
            </span>
        </button>
    );
}
