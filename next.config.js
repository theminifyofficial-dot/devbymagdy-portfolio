const isDev = process.env.NODE_ENV !== "production";

/**
 * Content Security Policy.
 *
 * script-src keeps 'unsafe-inline' because Next injects inline hydration
 * bootstrap scripts and every page here is static, so there is no
 * request-time nonce to hand them. The site takes no user input and holds
 * no session, so the residual risk is low. 'unsafe-eval' is added only in
 * development, where Next compiles with eval for hot reload.
 * Calendly is allowlisted explicitly rather than by wildcard.
 */
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev ? "'unsafe-eval'" : "",
  "https://assets.calendly.com",
]
  .filter(Boolean)
  .join(" ");

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: blob: https://*.calendly.com",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self' https://calendly.com https://*.calendly.com",
  "frame-src https://calendly.com https://*.calendly.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
