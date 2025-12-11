import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Image as ImageIcon, Upload, Filter, Grid, LayoutTemplate, Sun } from "lucide-react";
import gallery1 from "@/assets/gallery-new-1.png";
import gallery2 from "@/assets/gallery-new-2.png";
import gallery3 from "@/assets/gallery-new-3.png";
import gallery4 from "@/assets/gallery-new-4.jpg";

export const PrototypeDemo = () => {
    const { t } = useLanguage();
    const [activeView, setActiveView] = useState<"start" | "gallery">("start");
    const [selectedAgent, setSelectedAgent] = useState("Tameem");

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="demo">
            <div className="container px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Total Control. <span className="text-gradient-gold">Zero Mystery.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Monitor every conversation, track hours worked, and manage your AI workforce.
                    </p>
                </div>

                {/* Prototype Container */}
                <div className="rounded-xl border border-white/10 bg-card overflow-hidden shadow-2xl max-w-6xl mx-auto flex h-[700px]">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-white/10 bg-card/50 p-6 flex flex-col gap-8 hidden md:flex">
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white">A</div>
                                <span className="font-bold">AI Agency</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Agents</h3>
                                    <div className="space-y-2">
                                        {["Tameem", "Salah", "Moaz", "Maher"].map((agent) => (
                                            <button
                                                key={agent}
                                                onClick={() => setSelectedAgent(agent)}
                                                className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${selectedAgent === agent ? "bg-white/10 text-white" : "text-muted-foreground hover:bg-white/5"
                                                    }`}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">{agent}</span>
                                                    <span className="text-[10px] opacity-60">Fashion Photography</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Library</h3>
                                    <div className="space-y-2">
                                        <button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5">
                                            <LayoutTemplate className="w-4 h-4" />
                                            <span className="text-sm">Your Products</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveView("gallery")}
                                            className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeView === "gallery" ? "bg-white/10 text-white" : "text-muted-foreground hover:bg-white/5"
                                                }`}
                                        >
                                            <Grid className="w-4 h-4" />
                                            <span className="text-sm">Final Gallery</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <Sun className="w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-background/50 flex flex-col">
                        {/* Top Bar for Gallery */}
                        {activeView === "gallery" && (
                            <div className="h-16 border-b border-white/10 flex items-center px-6 gap-4">
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                    <span className="text-xs font-medium text-muted-foreground">Type:</span>
                                    <span className="text-xs bg-purple-600 px-2 py-0.5 rounded text-white">All</span>
                                    <span className="text-xs px-2 py-0.5 text-muted-foreground">Social</span>
                                    <span className="text-xs px-2 py-0.5 text-muted-foreground">E-commerce</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                    <span className="text-xs font-medium text-muted-foreground">Gender:</span>
                                    <span className="text-xs bg-purple-600 px-2 py-0.5 rounded text-white">All</span>
                                </div>
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="flex-1 p-8 overflow-y-auto">
                            {activeView === "start" ? (
                                <div className="h-full flex flex-col justify-center max-w-3xl mx-auto">
                                    <div className="mb-12">
                                        <h2 className="text-3xl font-bold text-purple-500 mb-2">Agent {selectedAgent}</h2>
                                        <p className="text-muted-foreground">Expert Fashion Photographer. Specializes in multi-model editorial, high-texture, and lifestyle shots.</p>
                                    </div>

                                    <h3 className="text-xl font-bold text-center mb-8">Where would you like to start?</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <button
                                            onClick={() => setActiveView("gallery")}
                                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all text-center space-y-4"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <ImageIcon className="w-8 h-8 text-purple-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">From Your Products</h4>
                                                <p className="text-sm text-muted-foreground">Select from photos you've already uploaded.</p>
                                            </div>
                                        </button>

                                        <button className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all text-center space-y-4">
                                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Upload className="w-8 h-8 text-purple-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Upload New Photos</h4>
                                                <p className="text-sm text-muted-foreground">Add new product photos to your collection.</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <img src={gallery1} alt="Gallery 1" className="w-full h-auto rounded-lg object-cover hover:scale-[1.02] transition-transform cursor-pointer" />
                                    <img src={gallery2} alt="Gallery 2" className="w-full h-auto rounded-lg object-cover hover:scale-[1.02] transition-transform cursor-pointer" />
                                    <img src={gallery3} alt="Gallery 3" className="w-full h-auto rounded-lg object-cover hover:scale-[1.02] transition-transform cursor-pointer" />
                                    <img src={gallery4} alt="Gallery 4" className="w-full h-auto rounded-lg object-cover hover:scale-[1.02] transition-transform cursor-pointer" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
