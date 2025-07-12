"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";

export default function FiveVideoOverlap() {
  const videos = [
    {
      src: "https://res.cloudinary.com/dacrmefxl/video/upload/v1752255359/Bmw_m4_g82_-Rohan_XD_zwtrgg.mp4",
      title: "BMW M4 G82",
      tags: ["Drift", "4K", "Cinematic"],
    },
    {
      src: "https://res.cloudinary.com/dacrmefxl/video/upload/v1752254749/Porsche_911_Gt3_Rs_-Rohan_XD_ncr0k2.mp4",
      title: "Porsche GT3 RS",
      tags: ["Speed", "Color Graded", "Smooth Sync"],
    },
    {
      src: "https://res.cloudinary.com/dacrmefxl/video/upload/q_auto,f_auto/background_dckcrd.mp4",
      title: "Hero Background",
      tags: ["Dark Vibe", "Clean", "Visual"],
    },
    {
      src: "https://res.cloudinary.com/dacrmefxl/video/upload/Buggati_Chiron_-Rohan_XD_uekd2v.mp4",
      title: "Bugatti Chiron",
      tags: ["Luxury", "Speed", "Power"],
    },
    {
      src: "https://res.cloudinary.com/dacrmefxl/video/upload/Nissan_Gtr_R34_-Rohan_XD_dwlfy6.mp4",
      title: "Nissan GTR R34",
      tags: ["JDM", "Phonk", "Sync"],
    },
  ];

  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openModal = (src: string) => {
    setCurrentVideo(src);
    setOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-20 px-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
          Featured Creations
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          A blend of seamless transitions, bold color grading, and cinematic edits — tailor-made for your vibe.
        </p>
      </motion.div>

      {/* Center Featured Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[280px] sm:h-[360px] mb-16"
      >
        <Card className="bg-neutral-900/90 shadow-2xl rounded-3xl overflow-hidden border border-white/10 hover:shadow-pink-600/30 transition-all duration-500">
          <CardContent className="p-0 h-full relative">
            <video
              src={videos[2].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
              preload="metadata"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {videos[2].title}
              </h3>
              <div className="flex gap-2 mt-1 text-xs text-gray-300">
                {videos[2].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 px-2 py-1 rounded-md backdrop-blur"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <Button
              onClick={() => openModal(videos[2].src)}
              className="absolute bottom-4 right-4 bg-white/20 text-white hover:bg-white/30 px-4 py-1 text-sm"
            >
              View Full Edit
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grid Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[videos[0], videos[1], videos[3], videos[4]].map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-pink-400/30 hover:shadow-pink-500/20 transition-all duration-300 group hover:scale-[1.02] relative">
              <CardContent className="p-0 h-44 sm:h-48 md:h-52 lg:h-56 relative">
                <video
                  src={v.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  preload="metadata"
                />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-sm font-semibold text-white drop-shadow">
                    {v.title}
                  </h3>
                  <div className="flex gap-1 text-[10px] text-gray-300 mt-1">
                    {v.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 px-1.5 py-0.5 rounded backdrop-blur"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => openModal(v.src)}
                  className="absolute bottom-3 right-3 bg-white/20 text-white hover:bg-white/30 px-3 py-0.5 text-xs"
                >
                  View Full Edit
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center mt-20"
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="w-72 h-72 bg-pink-500 blur-3xl opacity-20 rounded-full"></div>
        </div>
        <Button className="relative z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-pink-500/30 transition-all hover:-translate-y-1 active:scale-95">
          Contact for Custom Edits
        </Button>
      </motion.div>

      {/* Lightbox Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border-none p-0 max-w-5xl overflow-hidden">
          <DialogTitle asChild>
            <VisuallyHidden>Video Lightbox</VisuallyHidden>
          </DialogTitle>
          {currentVideo && (
            <video
              src={currentVideo}
              autoPlay
              loop
              muted
              controls
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
