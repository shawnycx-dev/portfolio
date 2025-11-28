import {
  AboutSection,
  BuiltWithSection,
  CompaniesSection,
  IntroSection,
  ProjectsSection,
} from "./_sections";

// Revalidate every hour
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <IntroSection />
      <CompaniesSection />
      <ProjectsSection />
      <AboutSection />
      <BuiltWithSection />
    </>
  );
}
