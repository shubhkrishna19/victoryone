import { SITE_URL } from "@/lib/constants";
import type { GlobalSettings } from "@/types/content";

export const globalSettings: GlobalSettings = {
  siteName: "VictoryOne",
  siteUrl: SITE_URL,
  defaultTitle: "VictoryOne | In-house construction and furnished living",
  defaultDescription:
    "VictoryOne rebuilds the legacy corporate experience around audited project, leadership, award, testimonial, media, event, career, and contact data from VictoryOne Central, Amara, and the broader group portfolio.",
  email: "info@victoryone.in",
  phones: ["0120-4266606/14/28", "+91-9210992922"],
  socialLinks: [],
  offices: [
    {
      id: "corporate-office",
      label: "Corporate Office",
      address: "Victoryone, H-56 Sec 63 Noida, Pin Code 201301",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0873215825745!2d77.37374561468012!3d28.627144882419934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58338bfffff%3A0xabc8b131eae91268!2sVictoryOne+Infraprojects+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1530694188812",
    },
    {
      id: "amara-site-office",
      label: "Site Office",
      address: "Victoryone Amara, GH-05 C, Sec-16, Greater Noida (West)",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6333544032627!2d77.45776782918823!3d28.61377099890159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3a248d5753%3A0xdcb09ff47d85fdf!2sVICTORYONE+AMARA!5e0!3m2!1sen!2sin!4v1530692941459",
    },
    {
      id: "central-site-office",
      label: "Site Office",
      address: "Victoryone Central, Plot No-02 E, Sec-12 Greater Noida (West)",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112136.44072937629!2d77.481189!3d28.561841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0ddf6e46c029e12!2sVICTORYONE+CENTRAL!5e0!3m2!1sen!2sin!4v1526647348983",
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy", ctaId: "footer-privacy" },
    { label: "Terms of Use", href: "/terms", ctaId: "footer-terms" },
  ],
};
