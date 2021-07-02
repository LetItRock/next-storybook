module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/styleguide",
        destination: "/styleguide/index.html",
      },
      {
        source: "/iframe.html",
        destination: "/styleguide/iframe.html",
      },
    ];
  },
};
