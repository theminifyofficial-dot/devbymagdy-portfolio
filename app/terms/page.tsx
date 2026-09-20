import type { Metadata } from "next";
import LegalPage, { Clause } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and conditions | devbymagdy",
  description:
    "The terms that apply to this site and to development work carried out by devbymagdy.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms and conditions" updated="September 2026">
      <Clause heading="About these terms">
        <p>
          These terms cover use of this website and set the starting point for
          development work carried out by Mahmoud Magdy, trading as devbymagdy.
          Each project also gets its own written scope, and where the two
          differ, the project agreement wins.
        </p>
      </Clause>

      <Clause heading="This site">
        <p>
          The work shown here is published with the permission of the clients
          involved. Case study text, layouts and code on this site remain mine.
          Client brand names, logos and product images belong to those brands.
        </p>
      </Clause>

      <Clause heading="Quotes and scope">
        <p>
          A quote covers the scope written down at the time it is given. Work
          added later is quoted separately before it starts, so nothing is
          billed that you have not agreed to.
        </p>
      </Clause>

      <Clause heading="Payment">
        <p>
          Projects normally run on a deposit before work starts and the balance
          on completion, with the split confirmed in writing before the project
          begins.
        </p>
      </Clause>

      <Clause heading="Ownership of the work">
        <p>
          Once a project is paid in full, the custom code and design produced
          for it are yours. Third party themes, apps, fonts and plugins stay
          under their own licences, which you are responsible for maintaining.
        </p>
      </Clause>

      <Clause heading="Things outside my control">
        <p>
          Shopify, hosting providers, payment gateways and third party apps can
          change or go down. I will work around such changes where I reasonably
          can, but I am not liable for interruptions caused by platforms I do
          not operate.
        </p>
      </Clause>

      <Clause heading="Limits of liability">
        <p>
          Liability for any project is limited to the amount paid for that
          project. Indirect losses such as lost profit or lost data are not
          covered.
        </p>
      </Clause>

      <Clause heading="Governing law">
        <p>
          These terms are governed by the laws of the Arab Republic of Egypt.
        </p>
      </Clause>

      <Clause heading="Contact">
        <p>Questions about these terms go to magdy5613@gmail.com.</p>
      </Clause>
    </LegalPage>
  );
}
