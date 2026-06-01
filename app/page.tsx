import Navbar           from '@/components/Navbar'
import HeroSection       from '@/components/HeroSection'
import ProblemSection    from '@/components/ProblemSection'
import SolutionSection   from '@/components/SolutionSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FounderSection    from '@/components/FounderSection'
import TrustSection      from '@/components/TrustSection'
import WaitlistSection   from '@/components/WaitlistSection'
import FinalCTASection   from '@/components/FinalCTASection'
import Footer            from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FounderSection />
        <TrustSection />
        <WaitlistSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
