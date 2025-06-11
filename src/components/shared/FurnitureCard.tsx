'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FavActiveIcon } from '../ui/icons/FavActiveIcon';
import { FavInactiveIcon } from '../ui/icons/FavInactiveIcon';
import { ShareIcon } from '../ui/icons/ShareIcon';

interface FurnitureCardProps {
    name: string;
    price: number;
    image: string;
    buyLink: string;
}

export default function FurnitureCard({
                                          name,
                                          price,
                                          image,
                                          buyLink,
                                      }: FurnitureCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="bg-white drop-shadow-sm overflow-hidden w-full h-full flex flex-col m-0.5">
            <div className="relative pt-[75%]">
                <img
                    src={image}
                    alt={name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="p-4 md:p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-base md:text-lg font-medium font-dm-sans text-[var(--primary)] line-clamp-2">
                        {name}
                    </h3>
                    <div className="flex items-center space-x-2 ml-2 flex-shrink-0">
                        <button
                            onClick={() => setLiked(!liked)}
                            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
                            className="p-1"
                        >
                            {liked ? <FavActiveIcon/> : <FavInactiveIcon/>}
                        </button>
                        <button
                            aria-label="Share this product"
                            className="p-1"
                        >
                            <ShareIcon/>
                        </button>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <p className="font-dm-sans text-[var(--primary-dark)] text-lg md:text-xl font-medium">
                        ${price}
                    </p>
                    <Link
                        href={buyLink}
                        className="bg-[var(--primary)] font-dm-sans text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-teal-800 transition whitespace-nowrap"
                        aria-label={`Buy ${name} for $${price}`}
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
}