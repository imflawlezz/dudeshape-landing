'use client';

import CategoryButton from './CategoryButton';

interface TabContentItem {
    text: string;
    Icon?: React.ReactNode;
}

interface GridSwitcherProps {
    activeTabId: string;
    data: {
        [tabId: string]: TabContentItem[];
    };
}

export default function GridSwitcher({ activeTabId, data }: GridSwitcherProps) {
    const items = data[activeTabId] || [];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {items.map(({ text, Icon }) => (
                <CategoryButton key={text} text={text} Icon={Icon} />
            ))}
        </div>
    );
}
