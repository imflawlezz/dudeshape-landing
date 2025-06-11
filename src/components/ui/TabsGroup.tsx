'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface Tab {
    id: string;
    label: string;
}

interface TabsGroupProps {
    tabs: Tab[];
    initialActiveId?: string;
    onTabChange?: (id: string) => void;
}

export default function TabsGroup({
                                      tabs,
                                      initialActiveId,
                                      onTabChange,
                                  }: TabsGroupProps) {
    const [activeId, setActiveId] = useState(initialActiveId || tabs[0]?.id);

    const handleClick = (id: string) => {
        setActiveId(id);
        onTabChange?.(id);
    };

    return (
        <div className="flex overflow-x-auto space-x-4 sm:space-x-8 scrollbar-hide">
            {tabs.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={clsx(
                        'relative font-dm-sans text-sm sm:text-base md:text-lg lg:text-2xl font-light pb-2 transition-colors whitespace-nowrap',
                        activeId === id
                            ? 'text-[var(--primary)]'
                            : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                    )}
                >
                    {label}
                    <span
                        className={clsx(
                            'absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300',
                            activeId === id ? 'w-24 opacity-100' : 'w-0 opacity-0'
                        )}
                    ></span>
                </button>
            ))}
        </div>
    );
}
