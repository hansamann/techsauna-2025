'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-8 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
        <Image
          src="/techsauna.png"
          alt="Munich Tech Sauna"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <span className="text-xl font-semibold">Munich Tech Sauna</span>
      </Link>
      <div className="hidden md:flex gap-8 ml-auto">
        <a href="https://discord.gg/yTVEfyS7WB" className="hover:text-pink-400 transition-colors">Discord</a>
        <a href="https://www.reddit.com/r/munichtechsauna/" className="hover:text-pink-400 transition-colors">Reddit</a>
        <a href="https://lu.ma/techsauna" className="hover:text-pink-400 transition-colors">Events</a>
        <a href="/code-of-conduct" className="hover:text-pink-400 transition-colors">Code of Conduct</a>
      </div>
      <div className="relative">
        <Button
          variant="ghost"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50`}>
          <a href="https://discord.gg/yTVEfyS7WB" className="block px-4 py-2 hover:bg-gray-800 hover:text-pink-400 transition-colors">Discord</a>
          <a href="https://www.reddit.com/r/munichtechsauna/" className="block px-4 py-2 hover:bg-gray-800 hover:text-pink-400 transition-colors">Reddit</a>
          <a href="https://lu.ma/techsauna" className="block px-4 py-2 hover:bg-gray-800 hover:text-pink-400 transition-colors">Events</a>
          <a href="/code-of-conduct" className="block px-4 py-2 hover:bg-gray-800 hover:text-pink-400 transition-colors">Code of Conduct</a>
        </div>
      </div>
    </nav>
  );
} 