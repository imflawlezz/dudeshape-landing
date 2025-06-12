import { IconButton } from "@/components/ui/IconButton";
import { EmailBox } from "@/components/shared/EmailBox";
import { FacebookIcon } from "@/components/ui/icons/FacebookIcon";
import { TwitterIcon } from "@/components/ui/icons/TwitterIcon";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { YoutubeIcon } from "@/components/ui/icons/YoutubeIcon";

export default function Footer() {
    return (
        <footer className="bg-[var(--footer)] text-white pt-12 px-6 font-dm-sans font-light">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr_1.5fr] gap-8 text-sm">
                <div>
                    <h2 className="text-2xl font-montserrat font-bold mb-8">DudeShape</h2>
                    <p className="mb-10">
                        From our hands to your home — furniture made with care, to turn everyday moments into lasting memories.
                    </p>
                    <p className="font-montserrat font-bold text-xl mb-5">Follow Us :</p>
                    <div className="flex space-x-4">
                        <IconButton icon={<FacebookIcon />} />
                        <IconButton icon={<TwitterIcon />} />
                        <IconButton icon={<InstagramIcon />} />
                        <IconButton icon={<YoutubeIcon />} />
                    </div>
                </div>

                <div>
                    <h3 className="font-montserrat font-bold text-xl mb-8">Take a tour</h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Product</a></li>
                        <li><a href="#" className="hover:underline">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-montserrat font-bold text-xl mb-8">Our company</h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Media</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-montserrat font-bold text-xl mb-8">Subscribe</h3>
                    <p className="mb-9">Subscribe to get the latest news from us</p>
                    <EmailBox variant="compact" />
                </div>
            </div>

            <div className="border-t border-[var(--separator)] mt-12 py-6 text-center text-lg items-center">
                Copyright © 2025. Site by <a href="https://github.com/imflawlezz" className="underline">imflawlezz</a>
            </div>
        </footer>
    );
}
