'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-deep-navy text-industrial-light sticky top-0 z-50 border-b border-electric-gold/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(242,183,5,0.3)] transition-transform group-hover:scale-105">
                        <Image
                            src="/image/logo.jpg"
                            alt="DEBIH Logo"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display text-2xl leading-none tracking-wide text-white">DEBIH</span>
                        <span className="text-[10px] text-electric-gold font-medium tracking-[0.3em] ml-0.5 uppercase">Solutions</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-electric-gold",
                                isActive(link.href) ? "text-electric-gold" : "text-industrial-light/80"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/portal">
                        <Button variant="primary" className="bg-electric-gold text-deep-navy hover:bg-electric-gold/90 font-semibold px-6">
                            Client Portal
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-industrial-light hover:text-electric-gold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-deep-navy border-t border-white/10 p-4 absolute w-full shadow-xl">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium py-2 px-4 rounded-md transition-colors",
                                    isActive(link.href)
                                        ? "bg-electric-gold/10 text-electric-gold"
                                        : "text-industrial-light hover:bg-white/5"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/portal" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-electric-gold text-deep-navy font-bold mt-2">
                                Client Portal
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
