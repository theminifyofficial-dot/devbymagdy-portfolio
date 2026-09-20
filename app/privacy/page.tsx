import type { Metadata } from "next";
import LegalPage, { Clause } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy | devbymagdy",
  description:
    "What data devbymagdy collects when you use this site or book a call, and how it is handled.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="September 2026">
      <Clause heading="Who runs this site">
        <p>
          This site is run by Mahmoud Magdy, trading as devbymagdy, based in
          Cairo, Egypt. You can reach me at magdy5613@gmail.com for any question
          about your data.
        </p>
      </Clause>

      <Clause heading="What this site collects">
        <p>
          The site itself does not run analytics, advertising trackers or
          cookies of its own. Browsing these pages does not create an account or
          a profile of you.
        </p>
      </Clause>

      <Clause heading="When you book a call">
        <p>
          Booking is handled by Calendly, embedded on the contact section. When
          you book, you give Calendly your name, email address and chosen time,
          and Calendly passes those details to me so I can attend the call.
          Calendly sets its own cookies and is covered by its own privacy
          policy.
        </p>
      </Clause>

      <Clause heading="When you contact me">
        <p>
          If you email or message me on WhatsApp, I keep that conversation so I
          can reply and, if we work together, deliver the project. I do not sell
          it, share it for marketing, or add you to a mailing list.
        </p>
      </Clause>

      <Clause heading="How long it is kept">
        <p>
          Enquiries that do not become projects are kept while there is a
          reasonable chance of picking the conversation back up, then deleted.
          Records tied to paid work are kept as long as needed for tax and
          accounting.
        </p>
      </Clause>

      <Clause heading="Your rights">
        <p>
          You can ask me what I hold about you, ask for a correction, or ask me
          to delete it. Email magdy5613@gmail.com and I will act on it.
        </p>
      </Clause>

      <Clause heading="Hosting">
        <p>
          The site is hosted by Vercel, which processes standard server request
          data such as IP address in order to serve pages and protect against
          abuse.
        </p>
      </Clause>
    </LegalPage>
  );
}
