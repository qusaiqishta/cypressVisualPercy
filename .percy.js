module.exports = {
  version: 2,
  snapshot: {
    widths: [1280, 768, 375],
    minHeight: 1024,
    percyCSS: `
      /* Hide any dynamic content that might cause flakiness */
      .loading, .spinner { display: none !important; }
    `
  },
  discovery: {
    allowedHostnames: ['next-staging.almosafer.com', 'https://www.almosafer.com/'],
    disallowedHostnames: [],
    networkIdleTimeout: 100,
    concurrency: 1
  }
} 