/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  //for registering the language
    i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },


 build: {
    transpile: ['gsap'],
},

}

module.exports = nextConfig
