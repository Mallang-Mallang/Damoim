/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['lh3.googleusercontent.com', 'k.kakaocdn.net', 'ssl.pstatic.net'],
  },
  async headers() {
    return [
      {
        source: '/api/graphql',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://studio.apollographql.com',
          },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/addSchedule',
        destination: '/',
        permanent: false,
      },
      {
        source: '/meeting',
        destination: '/',
        permanent: false,
      },
      {
        source: '/meeting2',
        destination: '/',
        permanent: false,
      },
      {
        source: '/mypage',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
