import { Reveal } from "@/components/reveal";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <Reveal>
                <h1 className="font-display text-4xl text-deep-navy mb-6">About DEBIH Solutions</h1>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="text-lg text-steel-grey mb-4 font-medium">
                    DEBIH Solutions is a leading electrical engineering firm in Nigeria, committed to delivering safe and reliable power infrastructure.
                </p>
            </Reveal>
            <div className="prose max-w-none text-steel-grey/80 space-y-4">
                <Reveal delay={0.2}>
                    <p>
                        Founded with a vision to revolutionize the power sector through precision engineering and local expertise, we have grown to become a trusted partner for industrial and commercial clients. We don&apos;t just fix power problems; we engineer reliability into every connection.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <p>
                        Our team of certified engineers brings decades of combined experience in high-tension systems, transformer technology, and grid maintenance. We approach every project with a safety-first mindset and a commitment to operational excellence.
                    </p>
                </Reveal>
            </div>
        </div>
    );
}
