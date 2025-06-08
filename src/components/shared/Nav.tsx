import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="font-dm-sans text-lg text-[var(--links)] font-light flex gap-16">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Features</Link>
            <Link href="/">Contact</Link>
        </nav>
    )
}