import {Advantage} from "@/components/ui/Advantage";
import {ShieldIcon} from "@/components/ui/icons/ShieldIocn";
import {GuaranteeIcon} from "@/components/ui/icons/GuaranteeIcon";
import {DeliveryIcon} from "@/components/ui/icons/DeliveryIcon";

export const AboutUs = () => {
    return (
        <section className="py-16 px-5 sm:px-10 md:px-20 lg:px-30 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--primary)] mb-6">
                            About Us
                        </h2>
                        <p className="font-dm-sans text-lg font-normal text-[var(--paragraph)] mb-12 leading-relaxed">
                            Driven by passion, rooted in craftsmanship — we design furniture that brings comfort and beauty into your home.
                        </p>

                        <div className="space-y-8">
                            <Advantage
                                icon={<ShieldIcon/>}
                                heading="Best Quality"
                                subheading="We use premium materials and skilled artisanship to ensure every piece exceeds expectations."
                            />
                            <Advantage
                                icon={<GuaranteeIcon/>}
                                heading="Customer Support"
                                subheading="Our friendly team is here to help — from the first question to after your furniture arrives."
                            />
                            <Advantage
                                icon={<DeliveryIcon/>}
                                heading="Free Shipping"
                                subheading="Enjoy fast, free, and reliable delivery on every order — right to your door."
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative overflow-hidden shadow-lg">
                            <img
                                src="/sections/about-us.jpg"
                                alt="Modern living room with sage green sofa, wooden coffee table, and natural lighting showcasing our furniture craftsmanship"
                                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}