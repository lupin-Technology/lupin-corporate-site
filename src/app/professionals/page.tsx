import { PageBody, PageHeader } from "@/components/common";
import {
  ProfessionalGrid,
  ProfessionalsIntroSection,
} from "@/components/professionals";

export default function Professionals() {
  return (
    <main>
      <PageHeader
        heading="Professionals"
        headingJp="プロフェッショナル紹介"
        breadcrumb="Professionals"
      />
      <PageBody containerClassName="mx-auto w-full max-w-[84vw]">
        <ProfessionalsIntroSection />
        <ProfessionalGrid />
      </PageBody>
    </main>
  );
}
