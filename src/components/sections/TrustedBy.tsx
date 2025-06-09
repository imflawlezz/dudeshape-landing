import {Mastercard} from "@/components/ui/logos/Mastercard";
import {Airbnb} from "@/components/ui/logos/Airbnb";
import {Uber} from "@/components/ui/logos/Uber";
import {Paypal} from "@/components/ui/logos/Paypal";
import {Visa} from "@/components/ui/logos/Visa";
import {Stripe} from "@/components/ui/logos/Stripe";

export const TrustedBy = () => {
    return (
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-32">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--primary)] mb-12">
                    Trusted by 200+ companies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
                    <Mastercard className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                    <Airbnb className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                    <Uber className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                    <Paypal className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                    <Visa className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                    <Stripe className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"/>
                </div>
            </div>
        </section>
    );
}