import {Nav} from "@/components/shared/Nav";
import {IconButton} from "@/components/ui/IconButton";
import {SearchIcon} from "@/components/ui/icons/SearchIcon";
import {MenuIcon} from "@/components/ui/icons/MenuIcon";

export const Header = () => {
    return (
        <header className="flex px-4 sm:px-6 md:px-8 lg:px-32 justify-between items-center py-2 md:py-4 sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex-shrink-0">
                <span className="text-[var(--primary)] font-montserrat font-bold text-xl sm:text-2xl">
                    DudeShape
                </span>
            </div>

            <div className="hidden md:block">
                <Nav />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <IconButton
                    icon={<SearchIcon />}
                    aria-label="Search"
                    className="p-2 sm:p-3"
                />
                <IconButton
                    icon={<MenuIcon />}
                    aria-label="Open menu"
                    className="p-2 sm:p-3"
                />
            </div>
        </header>
    )
}