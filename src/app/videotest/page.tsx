
"use client";

export default function VideoTest() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 text-white text-4xl p-10">
        🎬 Background Video Test
      </div>
    </div>
  );
}
