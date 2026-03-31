import {
  AboutFeaturesSection,
  AboutIntroSection,
  ProfileSection,
} from "@/components/about";
import { PageBody, PageHeader } from "@/components/common";

export default function About() {
  return (
    <main>
      <PageHeader heading="About" headingJp="事業概要" breadcrumb="About" />
      <PageBody>
        <AboutIntroSection />
        <AboutFeaturesSection />
        <ProfileSection />
      </PageBody>
    </main>
  );
}
