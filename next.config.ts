import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'preview-chat-4e90df34-e35d-4a9d-8505-79be5279ad38.space.z.ai',
  ],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.douyinvod.com' },
      { protocol: 'https', hostname: '**.tikwm.com' },
      { protocol: 'https', hostname: '**.ixigua.com' },
      { protocol: 'https', hostname: '**.bilivideo.com' },
      { protocol: 'https', hostname: '**.tiktokcdn.com' },
      { protocol: 'https', hostname: '**.twimg.com' },
      { protocol: 'https', hostname: '**.ytimg.com' },
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
      { protocol: 'https', hostname: '**.googlevideo.com' },
      { protocol: 'https', hostname: '**.ggpht.com' },
    ],
  },
};

export default nextConfig;
