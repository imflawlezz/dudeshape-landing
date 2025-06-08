export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-80px)] sm:w-screen sm:h-screen w-full overflow-hidden bg-white text-white">
            <div className="absolute inset-0 flex justify-center">
                <div className="relative md:left-1/20 md:translate-x-1/20 sm:w-screen sm:h-screen">
                    <img
                        src="/sections/hero.jpg"
                        alt="Hero"
                        className="h-full w-full object-cover md:w-screen"
                    />
                </div>
            </div>

            <div className="relative z-10 h-full flex items-center ">
                <div className="w-full md:max-w-5/6 lg:max-w-5/12 bg-[var(--primary-dark)] px-10 py-20 md:pl-32 md:py-20 md:pr-10 shadow-lg">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
                        We Help You Make Modern Furniture
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-dm-sans mt-4 md:mt-8 lg:pr-32 font-light leading-relaxed">
                        Transform your space with elegant, functional, and timeless furniture — crafted with care, made for life.
                    </p>
                </div>
            </div>
        </section>
    );
}