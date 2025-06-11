'use client';

import { useState } from "react";
import TabsGroup from "@/components/ui/TabsGroup";
import GridSwitcher from "@/components/ui/GridSwitcher";
import { LivingRoomIcon } from "@/components/ui/icons/LivingRoomIcon";
import { KitchenIcon } from "@/components/ui/icons/KitchenIcon";
import { DiningRoomIcon } from "@/components/ui/icons/DiningRoomIcon";
import { BedroomIcon } from "@/components/ui/icons/BedroomIcon";
import { OfficeIcon } from "@/components/ui/icons/OfficeIcon";
import { HallwayIcon } from "@/components/ui/icons/HallwayIcon";

const TABS = [
    { id: 'room', label: 'Shop By Room' },
    { id: 'category', label: 'Shop By Category' },
    { id: 'style', label: 'Shop By Style' },
];

const TAB_CONTENT = {
    room: [
        { text: 'Living Room', Icon: <LivingRoomIcon /> },
        { text: 'Kitchen', Icon: <KitchenIcon /> },
        { text: 'Dining Room', Icon: <DiningRoomIcon /> },
        { text: 'Office', Icon: <OfficeIcon /> },
        { text: 'Bed Room', Icon: <BedroomIcon /> },
        { text: 'Hallway', Icon: <HallwayIcon /> },
    ],
    category: [
        { text: 'Chairs' },
        { text: 'Tables' },
        { text: 'Sofas' },
        { text: 'Storage' },
        { text: 'Beds' },
        { text: 'Lighting' },
    ],
    style: [
        { text: 'Modern Minimalist' },
        { text: 'Scandinavian' },
        { text: 'Industrial' },
        { text: 'Bohemian' },
        { text: 'Classic Elegance' },
        { text: 'Japandi' },
    ],
};

export const AllFurniture = () => {
    const [activeTab, setActiveTab] = useState('room');

    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-screen-xl mx-auto space-y-10 text-center">
                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--primary)]">
                    All Furniture
                </h2>

                <div className="flex justify-center">
                    <TabsGroup
                        tabs={TABS}
                        initialActiveId="room"
                        onTabChange={(id) => setActiveTab(id)}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="relative w-full max-w-2xl mx-auto pl-8 pt-5">
                        <div className="relative w-full aspect-square sm:aspect-[4/3]">
                            <div className="absolute inset-0 -translate-x-8 -translate-y-5 bg-[var(--primary)]" />
                            <div className="relative z-10 w-full h-full">
                                <img
                                    src="/sections/all-furniture.jpg"
                                    alt="Furniture Preview"
                                    className="w-full h-full object-cover shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                        <GridSwitcher activeTabId={activeTab} data={TAB_CONTENT} />
                    </div>
                </div>
            </div>
        </section>
    );
};
