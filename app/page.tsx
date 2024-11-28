import { useRef } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, CreditCard, MapPin, Zap, Target, TrendingUp, PlayCircle, BarChart3 } from 'lucide-react'

export default function LandingPage() {
  const newsletterRef = useRef<HTMLDivElement>(null)

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black to-gray-800 text-white relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-[20%] w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-300 blur-2xl opacity-20 animate-float"></div>
      <div className="absolute top-[40%] left-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-gray-400 to-gray-200 blur-2xl opacity-20 animate-float-delayed"></div>
      
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-transparent relative z-10">
        <Link className="flex items-center" href="#">
          <CreditCard className="h-6 w-6 text-white" />
          <span className="ml-2 text-xl font-bold">Xcard</span>
        </Link>
        <nav>
          <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors" onClick={scrollToNewsletter}>
            Get Started
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white relative z-10" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}>
                  Elevate Your Game with Xcard
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold mt-4">
                  Democratize Football Analytics
                </p>
                <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-gray-300 md:text-2xl mt-6">
                  Professional-level analytics for every footballer, from Sunday league to semi-pro. No special equipment needed.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto" onClick={scrollToNewsletter}>
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black to-gray-800 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-[1.53rem] sm:text-[2.68rem] font-bold tracking-tighter text-center mb-12 text-white">Unlock Your Potential with Xcard</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gradient-to-br from-black to-gray-800 border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-white" />
                    <CardTitle className="text-xl sm:text-2xl text-white">Performance Metrics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-[15px]">Track your speed, distance covered, and intensity levels with the same precision as the pros.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-black to-gray-800 border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-white" />
                    <CardTitle className="text-xl sm:text-2xl text-white">Tactical Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-[15px]">Gain insights into your positioning, ball control, and decision-making on the field.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-black to-gray-800 border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                    <CardTitle className="text-xl sm:text-2xl text-white">Progress Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-[15px]">Set goals, track your improvement, and get personalized training recommendations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Xcard Works section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black to-gray-800 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-[1.53rem] sm:text-[2.68rem] font-bold tracking-tighter text-center mb-12 text-white">How Xcard Works</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white to-transparent" style={{ top: '24px', height: 'calc(100% - 48px)' }}></div>
              <div className="space-y-12">
                {[
                  { title: "Visit an Xcard Centre", description: "Come to one of our affiliated centers. No special equipment needed!", icon: MapPin },
                  { title: "Play Your Game", description: "Enjoy your match or training session while our AI captures your performance.", icon: PlayCircle },
                  { title: "Game Insights", description: "Receive comprehensive analysis and personalized tips to improve your game.", icon: BarChart3 }
                ].map((step, index) => (
                  <div key={index} className={`flex items-center justify-center ${index === 0 ? 'pt-0' : index === 2 ? 'pb-0' : 'py-12'}`}>
                    <div className="w-1/2 pr-8 text-right">
                      {index % 2 === 0 && (
                        <>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-300 text-[15px]">{step.description}</p>
                        </>
                      )}
                    </div>
                    <div className="z-10">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div className="w-1/2 pl-8 text-left">
                      {index % 2 !== 0 && (
                        <>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-300 text-[15px]">{step.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black to-gray-800 relative" ref={newsletterRef}>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-[1.53rem] sm:text-[2.68rem] font-bold tracking-tighter text-white">Stay Ahead of the Game with Xcard</h2>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg text-gray-300 md:text-xl">
                  Subscribe to our newsletter for exclusive insights, tips, and offers that will elevate your performance.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left">© 2024 Xcard. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-white" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-white" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: -3s;
        }
        section {
          position: relative;
        }
        section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, white, transparent);
        }
      `}</style>
    </div>
  )
}

