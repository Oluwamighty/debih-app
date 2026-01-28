import { fetchDashboardData } from "@/app/actions";
import { ChatWidget } from "@/components/chat-widget";
import { DataView } from "@/components/data-view";
import { Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const data = await fetchDashboardData();

  return (
    <div className="min-h-screen bg-industrial-light flex flex-col font-sans">
      {/* Header */}
      <header className="bg-deep-navy text-industrial-light shadow-md sticky top-0 z-50 border-b border-electric-gold/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-electric-gold flex items-center justify-center text-deep-navy shadow-[0_0_10px_rgba(242,183,5,0.4)]">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none tracking-wide">DEBIH</span>
              <span className="text-xs text-industrial-light/80 font-medium tracking-[0.2em] ml-0.5">SOLUTIONS</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-industrial-light/80">
            <Link href="/" className="hover:text-electric-gold transition-colors flex items-center gap-1 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Website
            </Link>
            <div className="w-px h-4 bg-white/20 mx-2"></div>
            <a href="#" className="text-electric-gold font-semibold">Dashboard</a>
            <a href="#" className="hover:text-electric-gold transition-colors">Reports</a>
            <a href="#" className="hover:text-electric-gold transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-8rem)]">
          {/* Main Data View (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-8 overflow-y-auto pr-2 pb-4">
            <div className="space-y-2">
              <h1 className="font-display text-3xl text-deep-navy">Welcome back</h1>
              <p className="text-steel-grey/80">Here is an overview of your recent business inquiries and schedule.</p>
            </div>

            <DataView data={data} />
          </div>

          {/* Chat Widget (Right Column) */}
          <div className="lg:col-span-1 h-full pl-2">
            <div className="lg:sticky lg:top-8 h-full flex flex-col">
              <div className="mb-4">
                <h2 className="font-display text-xl text-deep-navy mb-1">Agent Assistant</h2>
                <p className="text-sm text-steel-grey/70">Powered by DEBIH AI</p>
              </div>
              <ChatWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
