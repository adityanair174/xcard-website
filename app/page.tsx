import { Button } from "@/components/ui/button"
import { Activity, BarChart2, MapPin, PlayCircle, Smartphone, Users } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-white/10">
        <Link className="flex items-center justify-center" href="#">
          <BarChart2 className="h-6 w-6 mr-2" />
          <span className="font-bold">xCard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-gray-300" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300" href="#benefits">
            Benefits
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Democratizing Football Analytics
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  xCard: Advanced football analytics without expensive sensors or cameras. Play, analyze, improve.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Activity className="h-10 w-10" />}
                title="AI-Powered Analytics"
                description="Complex algorithms analyze your gameplay without the need for physical sensors."
              />
              <FeatureCard
                icon={<Smartphone className="h-10 w-10" />}
                title="Mobile Integration"
                description="Receive detailed stats and insights directly on your smartphone within minutes."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Accessible to All"
                description="No need to purchase expensive equipment. Just play at our partner centers."
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 w-0.5 bg-gradient-to-b from-white to-transparent" style={{ top: '24px', bottom: '24px', transform: 'translateX(-50%)' }}></div>
              <TimelineItem
                icon={<MapPin className="h-6 w-6" />}
                title="Visit a Partner Center"
                description="Find a nearby xCard partner center and book your session."
              />
              <TimelineItem
                icon={<PlayCircle className="h-6 w-6" />}
                title="Play Your Game"
                description="Enjoy your football match without any distractions or equipment."
              />
              <TimelineItem
                icon={<Activity className="h-6 w-6" />}
                title="Receive Analytics"
                description="Get comprehensive stats and insights on your mobile device within minutes."
              />
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitItem title="Cost-Effective" description="No need to invest in expensive equipment or technology." />
              <BenefitItem title="Professional-Grade Analytics" description="Access the same level of insights as professional players." />
              <BenefitItem title="Improve Your Game" description="Use data-driven insights to enhance your skills and performance." />
              <BenefitItem title="Track Progress" description="Monitor your improvement over time with detailed historical data." />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Elevate Your Game?</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Join xCard today and experience the future of football analytics.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default" size="lg">Sign Up Now</Button>
                <Button variant="outline" size="lg">Find a Partner Center</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-gray-400">© 2024 xCard. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border border-white/10 rounded-lg">
      <div className="mb-4 p-2 bg-white/10 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function TimelineItem({ icon, title, description }) {
  return (
    <div className="relative flex items-center mb-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
        <div className="text-black">{icon}</div>
      </div>
      <div className="ml-20 -mt-2">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function BenefitItem({ title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <svg
        className="h-6 w-6 text-green-400 mt-1 flex-shrink-0"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <div>
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

