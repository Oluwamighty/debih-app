import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-deep-navy text-industrial-light py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/image/banner.jpg"
                        alt="Background Banner"
                        fill
                        className="object-cover opacity-20"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 to-deep-navy/70 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-gold/10 border border-electric-gold/20 text-electric-gold text-sm font-medium mb-6">
                                <Zap className="w-4 h-4" />
                                <span>Leading Electrical Engineering Services</span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="font-display text-5xl lg:text-7xl mb-6 leading-tight">
                                Powering your world, <span className="text-electric-gold">safely</span> and <span className="text-electric-gold">reliably</span>.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg text-industrial-light/80 mb-8 max-w-2xl leading-relaxed">
                                DEBIH Solutions provides expert transformer installation, maintenance, and high-tension electrical services across Nigeria. We deliver industrial precision with local reliability.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/portal">
                                    <Button size="lg" className="bg-electric-gold text-deep-navy hover:bg-electric-gold/90 text-base font-bold h-12 px-8 transition-transform hover:scale-105 active:scale-95">
                                        Talk to DEBIH Agent
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button variant="secondary" size="lg" className="bg-transparent border-industrial-light text-industrial-light hover:bg-white/10 h-12 px-8 transition-transform hover:scale-105 active:scale-95">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services Highlights */}
            <section className="py-20 bg-industrial-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Reveal width="100%">
                            <div className="flex flex-col items-center">
                                <h2 className="font-display text-3xl lg:text-4xl text-deep-navy mb-4">Our Expertise</h2>
                                <p className="text-steel-grey/70 max-w-2xl text-center">
                                    We specialize in critical power infrastructure projects, ensuring safety and efficiency for industrial and commercial clients.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Reveal delay={0.1} direction="up" className="h-full">
                            <Card className="hover:shadow-lg transition-all border-t-4 border-t-deep-navy h-full group hover:-translate-y-2 duration-300">
                                <CardContent className="pt-8 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy mb-6 group-hover:bg-deep-navy group-hover:text-white transition-colors duration-300">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl text-deep-navy mb-3">Transformer Services</h3>
                                    <p className="text-steel-grey/80 mb-6 flex-1">
                                        Complete installation, repair, and oil filtration services for capacity transformers (300kVA - 5MVA).
                                    </p>
                                    <Link href="/services" className="text-deep-navy font-medium hover:text-electric-gold flex items-center text-sm mt-auto group/link">
                                        Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.2} direction="up" className="h-full">
                            <Card className="hover:shadow-lg transition-all border-t-4 border-t-electric-gold h-full group hover:-translate-y-2 duration-300">
                                <CardContent className="pt-8 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-electric-gold/10 flex items-center justify-center text-deep-navy mb-6 group-hover:bg-electric-gold group-hover:text-deep-navy transition-colors duration-300">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl text-deep-navy mb-3">Safety & Maintenance</h3>
                                    <p className="text-steel-grey/80 mb-6 flex-1">
                                        Routine checks, safety audits, and preventative maintenance for high-tension lines and control panels.
                                    </p>
                                    <Link href="/services" className="text-deep-navy font-medium hover:text-electric-gold flex items-center text-sm mt-auto group/link">
                                        Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.3} direction="up" className="h-full">
                            <Card className="hover:shadow-lg transition-all border-t-4 border-t-deep-navy h-full group hover:-translate-y-2 duration-300">
                                <CardContent className="pt-8 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy mb-6 group-hover:bg-deep-navy group-hover:text-white transition-colors duration-300">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl text-deep-navy mb-3">Technical Consultation</h3>
                                    <p className="text-steel-grey/80 mb-6 flex-1">
                                        Expert advisory for power loads, infrastructure planning, and regulatory compliance.
                                    </p>
                                    <Link href="/services" className="text-deep-navy font-medium hover:text-electric-gold flex items-center text-sm mt-auto group/link">
                                        Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-steel-grey text-industrial-light py-20 overflow-hidden relative">
                <div className="absolute inset-0 bg-deep-navy/5 pattern-grid opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Reveal width="100%">
                        <div className="flex flex-col items-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-gold text-deep-navy mb-8 shadow-lg shadow-electric-gold/20">
                                <Users className="w-8 h-8" />
                            </div>
                            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Ready to power your project?</h2>
                            <p className="text-industrial-light/70 max-w-2xl mx-auto mb-10 text-lg">
                                Consult with our AI agent to get instant answers or schedule a site inspection with our engineering team today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/portal">
                                    <Button size="lg" className="bg-electric-gold text-deep-navy hover:bg-electric-gold/90 font-bold px-8 w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
                                        Chat with Agent
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg" className="border-industrial-light text-industrial-light hover:bg-white/10 px-8 w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
                                        Contact Sales
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
