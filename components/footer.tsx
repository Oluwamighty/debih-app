import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-steel-grey text-industrial-light/80 pt-16 pb-8 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                                <Image
                                    src="/image/logo.jpg"
                                    alt="DEBIH Logo"
                                    fill
                                    className="object-cover"
                                    quality={100}
                                />
                            </div>
                            <span className="font-display text-xl text-white">DEBIH Solutions</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Industrial Precision, Local Reliability. Powering your world gracefully and reliably across Nigeria.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-electric-gold transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-electric-gold transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-electric-gold transition-colors">Projects</Link></li>
                            <li><Link href="/portal" className="hover:text-electric-gold transition-colors">Client Portal</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-electric-gold mt-1 shrink-0" />
                                <span>Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-electric-gold shrink-0" />
                                <span>08148623562</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-electric-gold shrink-0" />
                                <span>debihsolutions@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-gold hover:text-deep-navy transition-colors"><Linkedin className="w-4 h-4" /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-gold hover:text-deep-navy transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="https://web.facebook.com/debihsolutions/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-gold hover:text-deep-navy transition-colors"><Facebook className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} DEBIH Solutions. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
