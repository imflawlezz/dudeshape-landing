import { IconButton } from "@/components/ui/IconButton";
import { ArrowLeftIcon } from "@/components/ui/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/icons/ArrowRightIcon";
import FurnitureSlider from "@/components/shared/FurnitureSlider";
import Link from "next/link";

export const PopularFurniture = () => {
    const furnitureItems = [
        { name: 'Nordic Harmony', price: 300, image: '/furniture/nordic-harmony.jpg', buyLink: '#' },
        { name: 'Serene Lines', price: 500, image: '/furniture/serene-lines.jpg', buyLink: '#' },
        { name: 'Cozy Nest', price: 1500, image: '/furniture/cozy-nest.jpg', buyLink: '#' },
        { name: 'Nordic Harmony', price: 300, image: '/furniture/nordic-harmony.jpg', buyLink: '#' },
        { name: 'Serene Lines', price: 500, image: '/furniture/serene-lines.jpg', buyLink: '#' },
        { name: 'Cozy Nest', price: 1500, image: '/furniture/cozy-nest.jpg', buyLink: '#' },
        { name: 'Nordic Harmony', price: 300, image: '/furniture/nordic-harmony.jpg', buyLink: '#' },
        { name: 'Serene Lines', price: 500, image: '/furniture/serene-lines.jpg', buyLink: '#' },
        { name: 'Cozy Nest', price: 1500, image: '/furniture/cozy-nest.jpg', buyLink: '#' },
    ];

    return (
        <section className="px-5 sm:px-10 md:px-20 lg:px-30 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <div className="md:w-1/2">
                    <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--primary)] mb-2">
                        Our Popular Furniture
                    </h2>
                    <p className="font-dm-sans font-normal text-lg md:text-xl text-[var(--paragraph)]">
                        Explore our most-loved pieces — thoughtfully designed, beautifully made, and ready to elevate any room.
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <IconButton
                        icon={<ArrowLeftIcon />}
                        className="p-2 sm:p-3"
                        id="slider-prev"
                        aria-label="Previous slide"
                    />
                    <IconButton
                        icon={<ArrowRightIcon />}
                        className="p-2 sm:p-3"
                        id="slider-next"
                        aria-label="Next slide"
                    />
                </div>
            </div>

            <div className="flex justify-end mb-6">
                <Link
                    href="#"
                    className="font-dm-sans font-light text-lg underline text-[var(--paragraph)] hover:text-[var(--primary)] transition-colors"
                >
                    More
                </Link>
            </div>

            <FurnitureSlider
                items={furnitureItems}
                prevButtonId="slider-prev"
                nextButtonId="slider-next"
            />
        </section>
    );
}