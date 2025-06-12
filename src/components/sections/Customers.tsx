import ReviewCard from "@/components/shared/ReviewCard";
import Image from "next/image";

export const Customers = () => {
    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                <div className="hidden lg:block relative w-full max-w-2xl pl-20">
                    <div className="relative w-full aspect-square">
                        <div className="absolute inset-0 -translate-x-20 bg-[var(--primary-dark)] rounded-full z-0" />
                        <div className="relative z-10 w-full h-full overflow-hidden rounded-sm">
                            <Image
                                src="/sections/customers.jpg"
                                alt="Furniture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full mx-auto">
                    <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--primary)] mb-7">
                        Our customers are very important to us
                    </h2>
                    <p className="text-[var(--paragraph)] font-dm-sans text-xl mb-10 leading-relaxed">
                        Your satisfaction is our success. We listen, we care, and we’re always improving to serve you better.
                    </p>
                    <div className="shadow-lg rounded-lg">
                        <ReviewCard
                            name="Mh Jibon"
                            rating={4.8}
                            review="Stylish, high-quality furniture for every home! Perfect for modern, rustic, or minimalist decor. Highly recommend!"
                            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
