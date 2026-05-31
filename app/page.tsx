import Navbar            from '@/components/Navbar'
import HeroSection        from '@/components/HeroSection'
import ProblemSection     from '@/components/ProblemSection'
import SolutionSection    from '@/components/SolutionSection'
import HowItWorksSection  from '@/components/HowItWorksSection'
import ComingSoonSection  from '@/components/ComingSoonSection'
import WaitlistSection    from '@/components/WaitlistSection'
import FounderSection     from '@/components/FounderSection'
import FinalCTASection    from '@/components/FinalCTASection'
import Footer             from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ComingSoonSection />
        <WaitlistSection />
        <FounderSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
