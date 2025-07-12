"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

function NavLink({ href, label, external = false }: NavLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-400 transition-colors text-base font-medium"
        title={`Visit ${label}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-white hover:text-pink-400 transition-colors text-base font-medium"
    >
      {label}
    </Link>
  );
}

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* 🔹 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dacrmefxl/video/upload/f_mp4/q_auto/background_dckcrd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🔹 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            NightMare Edits
          </Link>

          <div className="hidden md:flex items-center gap-6 text-white">
            <NavLink href="/" label="Home" />
            <NavLink
              href="https://www.youtube.com/@nightmareditzz69"
              label="About"
              external
            />
            <NavLink href="/Creations" label="Creations" />
            <Button
              asChild
              className="rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
            >
              <Link href="/pricing">Join Us</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 px-4 pb-4 flex flex-col gap-3 z-40">
            <NavLink href="/" label="Home" />
            <NavLink
              href="https://www.youtube.com/@nightmareditzz69"
              label="About"
              external
            />
            <NavLink href="/Creations" label="Creations" />
            <Button
              asChild
              className="w-full bg-white text-black hover:bg-white/80"
            >
              <Link href="/pricing">Join Us</Link>
            </Button>
            <ThemeToggle />
          </div>
        )}
      </nav>

      {/* 🔹 Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-20 max-w-7xl animate-fade-in">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-xl transition-all duration-500">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-transparent bg-clip-text drop-shadow-xl">
            NightMare
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-100">
            Hi, I&apos;m NightMare — a creative video editor delivering cinematic reels,
            synced transitions, motion blur, and more.
          </p>

          <div className="mt-6">
            <Button
              asChild
              className="bg-white text-black px-6 py-3 text-lg hover:bg-gray-200 transition shadow-lg hover:shadow-pink-400/40"
            >
              <Link href="/pricing">Join Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
