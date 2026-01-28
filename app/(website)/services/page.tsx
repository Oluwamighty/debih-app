import { Reveal } from "@/components/reveal";

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <Reveal>
                <h1 className="font-display text-4xl text-deep-navy mb-8">Our Services</h1>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    'Transformer Installation & Repair',
                    'High Tension (HT) Line Construction',
                    'Industrial Electrification',
                    'Control Panel Assembly',
                    'Power Audit & Consultation',
                    'Oil Filtration & Treatment'
                ].map((service, index) => (
                    <Reveal key={service} delay={index * 0.1} width="100%">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-steel-grey/10 hover:shadow-md transition-shadow h-full">
                            <h3 className="font-bold text-xl text-deep-navy mb-2">{service}</h3>
                            <p className="text-steel-grey/70">Professional execution meeting international safety standards.</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
