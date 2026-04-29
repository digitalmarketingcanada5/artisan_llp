import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Under Maintenance - Artisan Law LLP",
  description:
    "Our website is currently undergoing scheduled maintenance. We'll be back online shortly. For urgent matters, please contact us directly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div
      className="relative min-h-screen bg-black text-white font-sans flex items-center justify-center px-6"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <main className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-8 py-16">
        <Image
          src="/Logo3.png"
          alt="Artisan Law LLP"
          width={140}
          height={140}
          priority
          className="h-auto w-28 sm:w-32"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            We&apos;ll be back soon.
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            Our website is currently undergoing scheduled maintenance to bring
            you an improved experience. Thank you for your patience.
          </p>
        </div>

        <div className="w-full max-w-md border border-white/15 rounded-lg bg-white/5 backdrop-blur-sm px-6 py-5 flex flex-col gap-2 text-sm sm:text-base">
          <p className="text-white/70">For urgent legal matters, contact us:</p>
          <a
            href="mailto:info@artisanlaw.ca"
            className="text-white hover:text-white/80 underline-offset-4 hover:underline transition"
          >
            info@artisanlawllp.com
          </a>
          <a
            href="tel:+16475554000"
            className="text-white hover:text-white/80 underline-offset-4 hover:underline transition"
          >
            +1 (647) 833-3487
          </a>
        </div>

        <p className="text-xs text-white/50 mt-4">
          &copy; {new Date().getFullYear()} Artisan Law LLP. All rights reserved.
        </p>
      </main>
    </div>
  );
}
