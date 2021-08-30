module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://pixeon.clickvita.com.br/#/instituicao/CL',
        permanent: true,
      },
    ]
  },
}
