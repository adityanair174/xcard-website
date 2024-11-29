import { Button } from "@/components/ui/button"
import { Activity, BarChart2, MapPin, PlayCircle, Smartphone, Users } from 'lucide-react'
import Link from "next/link"

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
        <div className="section-divider"></div>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-box" role="article" aria-labelledby="feature-1-title">
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <Activity className="h-8 w-8 text-white mr-3 flex-shrink-0" aria-hidden="true" />
                    <h3 id="feature-1-title" className="text-xl font-bold text-white">AI-Powered Analytics</h3>
                  </div>
                  <p className="text-gray-300">Complex algorithms analyze your gameplay without the need for physical sensors.</p>
                </div>
              </div>
              <div className="feature-box" role="article" aria-labelledby="feature-2-title">
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-8 w-8 text-white mr-3 flex-shrink-0" aria-hidden="true" />
                    <h3 id="feature-2-title" className="text-xl font-bold text-white">Mobile Integration</h3>
                  </div>
                  <p className="text-gray-300">Receive detailed stats and insights directly on your smartphone within minutes.</p>
                </div>
              </div>
              <div className="feature-box" role="article" aria-labelledby="feature-3-title">
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-white mr-3 flex-shrink-0" aria-hidden="true" />
                    <h3 id="feature-3-title" className="text-xl font-bold text-white">Accessible to All</h3>
                  </div>
                  <p className="text-gray-300">No need to purchase expensive equipment. Just play at our partner centers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider"></div>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 w-0.5 bg-gradient-to-b from-white to-transparent" style={{ top: '24px', bottom: '24px', transform: 'translateX(-50%)' }}></div>
              <div className="space-y-24">
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <h3 className="text-2xl font-bold mb-2 text-white">Visit a Partner Center</h3>
                    <p className="text-white max-w-xs ml-auto">Find a nearby xCard partner center and book your session.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
                    <PlayCircle className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex-1 pl-8 ml-auto">
                    <h3 className="text-2xl font-bold mb-2 text-white">Play Your Game</h3>
                    <p className="text-white max-w-xs">Enjoy your football match without any distractions or equipment.</p>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <h3 className="text-2xl font-bold mb-2 text-white">Receive Analytics</h3>
                    <p className="text-white max-w-xs ml-auto">Get comprehensive stats and insights on your mobile device within minutes.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
                    <Activity className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider"></div>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-start space-x-4">
                <svg
                  className="h-6 w-6 text-green-400 mt-1"
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
                  <h3 className="font-bold text-xl mb-1">Cost-Effective</h3>
                  <p className="text-gray-400">No need to invest in expensive equipment or technology.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <svg
                  className="h-6 w-6 text-green-400 mt-1"
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
                  <h3 className="font-bold text-xl mb-1">Professional-Grade Analytics</h3>
                  <p className="text-gray-400">Access the same level of insights as professional players.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <svg
                  className="h-6 w-6 text-green-400 mt-1"
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
                  <h3 className="font-bold text-xl mb-1">Improve Your Game</h3>
                  <p className="text-gray-400">Use data-driven insights to enhance your skills and performance.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <svg
                  className="h-6 w-6 text-green-400 mt-1"
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
                  <h3 className="font-bold text-xl mb-1">Track Progress</h3>
                  <p className="text-gray-400">Monitor your improvement over time with detailed historical data.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="section-divider"></div>
        <section className="w-full py-12 md:py-24 lg:py-32">
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

