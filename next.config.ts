import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botid.com; style-src 'self' 'unsafe-inline' https://cdn.botid.com; img-src 'self' data: https://cdn.botid.com; font-src 'self' https://cdn.botid.com; connect-src 'self' https://cdn.botid.com; frame-src 'self' https://cdn.botid.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; sandbox 'allow-same-origin allow-scripts allow-popups allow-forms'; report-uri https://cdn.botid.com/csp-report; report-to 'default';",
          },
        ],
      },
    ];
  },
};

console.log("asdf");
export default withBotId(nextConfig);
