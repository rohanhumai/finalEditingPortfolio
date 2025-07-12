"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aryan Patel",
      title: "Content Creator",
      review:
        "Rohan's edits turned my raw clips into viral content. The pacing and vibe were on point!",
      avatar: "https://i.pravatar.cc/100?u=1",
    },
    {
      name: "Sanya Mehra",
      title: "Automotive Blogger",
      review:
        "The cinematic feel, transitions, and color grading were 🔥. Totally exceeded my expectations!",
      avatar: "https://i.pravatar.cc/100?u=2",
    },
    {
      name: "Kunal Deshmukh",
      title: "Gamer & Streamer",
      review:
        "NightMare Edits elevated my gaming montages to a whole new level — top-notch motion blur + sync.",
      avatar: "https://i.pravatar.cc/100?u=3",
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-10 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          What Clients Say
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Real feedback from creators, gamers, and automotive enthusiasts who’ve worked with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-neutral-900 border border-white/10 shadow-lg hover:shadow-pink-500/10 transition duration-300 p-6"
          >
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <span className="text-sm text-gray-400">{t.title}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{t.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
