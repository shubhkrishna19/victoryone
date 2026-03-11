import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: blob: https://www.google.com https://maps.gstatic.com https://maps.googleapis.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "connect-src 'self'",
  "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/award", destination: "/awards", permanent: true },
      { source: "/newspaper", destination: "/media", permanent: true },
      { source: "/event-2", destination: "/events", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/project-amara", destination: "/projects/victoryone-amara", permanent: true },
      { source: "/project-central", destination: "/projects/victoryone-central", permanent: true },
      { source: "/central-comercial", destination: "/projects/victoryone-central-commercial", permanent: true },
      { source: "/amara-commercial", destination: "/projects/victoryone-amara-commercial", permanent: true },
      { source: "/past-project", destination: "/projects?collection=past", permanent: true },
      { source: "/message-form-chairman", destination: "/leadership#chairman", permanent: true },
      { source: "/introduction", destination: "/about", permanent: true },
      { source: "/team", destination: "/leadership#team", permanent: true },
      { source: "/csr", destination: "/about#csr", permanent: true },
      { source: "/custmer-feed-back", destination: "/#testimonials", permanent: true },
      { source: "/faq", destination: "/faq", permanent: true },
      { source: "/md-intriviews", destination: "/leadership#md-interview", permanent: true },
    ];
  },
};

export default nextConfig;
