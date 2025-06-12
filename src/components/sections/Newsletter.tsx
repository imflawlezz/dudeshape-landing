import {EmailBox} from "@/components/shared/EmailBox";

export const Newsletter = () => {
    return (
        <section className="bg-[var(--footer)] text-white px-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-30 py-8 sm:py-10 md:py-12 lg:py-16 my-8 sm:my-10 md:my-12 lg:my-16">
            <div className="max-w-xl mx-auto text-center space-y-8">

                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl">
                    Subscribe to get the latest news about us
                </h2>

                <p className="font-dm-sans font-light text-base sm:text-lg">
                    Be the first to hear about new collections, special offers, and inspiring design tips — straight to your inbox.
                </p>
                <EmailBox variant="full"/>
            </div>
        </section>
    );
};
