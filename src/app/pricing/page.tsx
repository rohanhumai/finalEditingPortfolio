"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-pink-400 transition-colors text-base font-medium"
    >
      {label}
    </Link>
  );
}

export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: "₹500",
      features: ["1 Edit", "HD Quality", "Basic Sync"],
      gradient: "from-gray-800 to-gray-900",
    },
    {
      title: "Pro",
      price: "₹1,500",
      features: ["3 Edits", "4K Quality", "Beat Sync + Transitions"],
      gradient: "from-indigo-700 to-purple-900",
    },
    {
      title: "Elite",
      price: "₹3,000",
      features: [
        "5+ Edits",
        "4K + Color Grading",
        "Motion Blur",
        "Trend Optimization",
      ],
      gradient: "from-pink-600 to-red-700",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
      {/* 🔮 Floating Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
      </div>

      {/* 🔹 Hero Section */}
      <section className="pt-20 pb-8 text-center px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Unlock premium cinematic edits tailored to your vibe.
        </p>
      </section>

      {/* 🔹 Pricing Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto mt-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              bounce: 0.25,
            }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 shadow-xl bg-gradient-to-br ${plan.gradient} border border-white/10 backdrop-blur-md hover:scale-[1.03] transition-all duration-300 group`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-pink-400 transition">
              {plan.title}
            </h2>
            <p className="text-4xl font-bold mb-6 text-white">{plan.price}</p>
            <ul className="space-y-3 text-gray-200 mb-8 font-mono">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <a href="https://x.com/messages/1696558827959734277-1696558827959734277">
              <Button className="cursor-pointer w-full bg-white text-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-base">
                Book Now
              </Button>
            </a>
          </motion.div>
        ))}
      </section>

      {/* 🔹 Footer */}
      <footer className="mt-20 py-10 text-center text-sm text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} NightMare Edits. All rights reserved.
      </footer>
    </div>
  );
}
