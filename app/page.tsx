'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Nav />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where Tech Meets Relaxation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join our unique community of tech enthusiasts in Munich, where we combine the best of both worlds: technology discussions and sauna relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600" asChild>
                <a href="https://discord.gg/yTVEfyS7WB">Join Our Discord</a>
              </Button>
              <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10" asChild>
                <a href="https://lu.ma/techsauna">View Events</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/techsauna.png"
              alt="Munich Tech Sauna"
              width={500}
              height={500}
              className="w-full max-w-md rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Our Story</CardTitle>
              <CardDescription>Tech meets tradition in Munich</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src="/ice.jpg"
                  alt="Community"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                The Munich Tech Sauna community is a unique gathering of tech enthusiasts in the beautiful city of Munich, Germany. We come together to unwind and connect, sharing the joy of saunas and great conversations. Our community values a tech-free environment, leaving gadgets and devices at the door, allowing us to focus on what truly matters: human connections.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Our Atmosphere</CardTitle>
              <CardDescription>Where warmth meets welcome</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src="/diverse.jpeg"
                  alt="Diverse Community"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                With a warm and inviting atmosphere, we welcome great people from all corners of the tech world who share our passion for relaxation and camaraderie. Our gatherings are characterized by an uplifting mood, where you can leave the stresses of the workday behind and immerse yourself in the soothing ambiance of the sauna.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">In Between Sauna Sessions</CardTitle>
              <CardDescription>Relaxation continues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src="/beer.jpeg"
                  alt="After Sauna Beer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                After a rejuvenating sauna session, we often come together for a well-deserved afterwork beer and chill. It's the perfect time to continue those meaningful discussions or simply relax in good company. We also explore various sauna infusions, enhancing the health benefits of the experience and deepening our appreciation for holistic wellness.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">Join Us</CardTitle>
              <CardDescription>Be part of our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src="/sauna-utensils.jpg"
                  alt="Sauna Utensils"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Join the "Munich Tech Sauna" community to escape the digital hustle and nurture your well-being in a friendly setting. Connect with us on <a href="https://discord.gg/yTVEfyS7WB" className="text-pink-500 hover:text-pink-400">Discord</a> for real-time conversations, or join our <a href="https://www.reddit.com/r/munichtechsauna/" className="text-pink-500 hover:text-pink-400">Reddit</a> community to stay informed. Whether you're a tech professional or just curious about the intersection of tech and wellness, you'll find a welcoming space here.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="bg-gray-900 rounded-lg p-6">
          <iframe
            src="https://lu.ma/embed/calendar/cal-6K0AaZr12PW4uBL/events"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 'none' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
