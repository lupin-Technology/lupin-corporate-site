import { PageBody, PageHeader } from "@/components/common";
import { ContactForm, ContactSteps } from "@/components/contact";

export default function Contact() {
  return (
    <main>
      <PageHeader
        heading="Contact"
        headingJp="お問い合わせ"
        breadcrumb="Contact"
      />
      <PageBody containerClassName="mx-auto w-full max-w-[1010px]">
        <ContactSteps />
        <ContactForm />
      </PageBody>
    </main>
  );
}
