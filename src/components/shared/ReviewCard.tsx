'use client';

import { StarIcon } from '../ui/icons/StarIcon';

interface ReviewCardProps {
    name: string;
    rating: number;
    review: string;
    avatarUrl: string;
}

export default function ReviewCard({
                                       name,
                                       rating,
                                       review,
                                       avatarUrl,
                                   }: ReviewCardProps) {
    return (
        <div className="bg-white shadow-2xl p-6 w-full">
            <div className="flex items-center space-x-4 mb-6">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <p className="font-dm-sans font-medium text-black">{name}</p>
                    <div className="flex justify-self-start space-x-1">
                        <StarIcon/>
                        <span className="text-sm font-dm-sans text-black">{rating}</span>
                    </div>
                </div>
            </div>
            <p className="font-dm-sans font-light italic text-black">“{review}”</p>
        </div>
    );
}
