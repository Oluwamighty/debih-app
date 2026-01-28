import Image from "next/image";
import { Reveal } from "@/components/reveal";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <Reveal>
                <h1 className="font-display text-4xl text-deep-navy mb-8">Featured Projects</h1>
            </Reveal>
            <div className="grid md:grid-cols-4 gap-8">

                <Reveal width="100%">
                    <div className="bg-white rounded-xl shadow-sm border border-steel-grey/10 overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/image/project1.jpg"
                                alt="Transformer Installation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-deep-navy group-hover:text-electric-gold transition-colors">Ikorodu Transformer Installation</h3>
                            <p className="text-steel-grey/70 mt-2">Installation of 200kva transformers infrastructure.</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.1}>
                    <div className="bg-white rounded-xl shadow-sm border border-steel-grey/10 overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/image/project2.jpg"
                                alt="Control Panel Assembly"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-deep-navy group-hover:text-electric-gold transition-colors">Ajah Sangotedo substation</h3>
                            <p className="text-steel-grey/70 mt-2">Comprehensive transformer installation</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <div className="bg-white rounded-xl shadow-sm border border-steel-grey/10 overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/image/maintenance.jpg"
                                alt="Routine Maintenance"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-deep-navy group-hover:text-electric-gold transition-colors">Cable Termination</h3>
                            <p className="text-steel-grey/70 mt-2">Precision cable termination completed — ensuring safe, reliable, and long-lasting electrical connections.</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal width="100%" delay={0.3}>
                    <div className="bg-white rounded-xl shadow-sm border border-steel-grey/10 overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/image/transformer-maintenance.jpg"
                                alt="Routine Transformer Maintenance"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-deep-navy group-hover:text-electric-gold transition-colors">Transformer Maintenance</h3>
                            <p className="text-steel-grey/70 mt-2">Annual preventative maintenance and oil filtration for site transformers.</p>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    );
}
