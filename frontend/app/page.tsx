import { TechTrio } from '@/app/components/TechTrio'
import { StepFlow } from '@/app/components/StepFlow'
import { FeaturesSection } from '@/app/components/FeaturesSection'
import { HeroSection } from '@/app/components/HeroSection'
import { BlogPostsSection } from '@/app/components/BlogPostsSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <TechTrio />
      <StepFlow />
      <FeaturesSection />
      <BlogPostsSection />
    </>
  )
}
