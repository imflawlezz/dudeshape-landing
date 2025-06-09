import { ReactNode } from 'react';

interface AdvantageProps {
    icon: ReactNode;
    heading: string;
    subheading: string;
    className?: string;
}

export const Advantage = ({ icon, heading, subheading, className = "" }: AdvantageProps) => {
    return (
        <div className={`flex items-start gap-4 ${className}`}>
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-montserrat font-bold text-[20px] text-[var(--primary)] mb-2">
                    {heading}
                </h3>
                <p className="font-dm-sans text-[var(--paragraph)] text-lg leading-relaxed">
                    {subheading}
                </p>
            </div>
        </div>
    );
};