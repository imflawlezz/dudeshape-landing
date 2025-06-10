'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type SwiperType from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import FurnitureCard from './FurnitureCard';

interface FurnitureItem {
    name: string;
    price: number;
    image: string;
    buyLink: string;
}

interface FurnitureSliderProps {
    items: FurnitureItem[];
    prevButtonId?: string;
    nextButtonId?: string;
}

export default function FurnitureSlider({ items, prevButtonId, nextButtonId }: FurnitureSliderProps) {
    let swiperInstance: SwiperType;

    useEffect(() => {
        if (!prevButtonId || !nextButtonId || !swiperInstance) return;

        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);

        if (prevButton) prevButton.addEventListener('click', () => swiperInstance.slidePrev());
        if (nextButton) nextButton.addEventListener('click', () => swiperInstance.slideNext());

        return () => {
            if (prevButton) prevButton.removeEventListener('click', () => swiperInstance.slidePrev());
            if (nextButton) nextButton.removeEventListener('click', () => swiperInstance.slideNext());
        };
    }, [prevButtonId, nextButtonId]);

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                onSwiper={(swiper) => {
                    swiperInstance = swiper;
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <FurnitureCard
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            buyLink={item.buyLink}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}