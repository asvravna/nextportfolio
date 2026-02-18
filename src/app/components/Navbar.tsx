import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-[#FAF8F5] py-6 px-8">
      <h1 className="text-3xl font-serif text-stone-800 tracking-wide">
        Your Name
      </h1>
      <nav className="text-sm text-stone-400 tracking-widest uppercase mt-1 space-x-6">
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
