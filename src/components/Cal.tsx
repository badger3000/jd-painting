"use client"; // Important for Next.js App Router

import Cal, {getCalApi} from "@calcom/embed-react";
import {useEffect} from "react";

export function CalEmbed({calLink}: {calLink: string}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: {
          branding: {brandColor: "#000000"},
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="cal" className="container py-24 sm:py-32  max-w-7xl mx-auto">
      <Cal
        calLink={calLink} // e.g., "your-username/30min"
        style={{
          width: "100%",
          height: "600px",
          overflow: "scroll",
        }}
        config={{
          layout: "month_view",
        }}
      />
    </section>
  );
}
