module.exports = {
  version: 2,
  snapshot: {
    // Remove fixed widths to allow any width
    // widths: [1280, 768, 375],
    // Remove minimum height constraint
    // minHeight: 1024,
    percyCSS: `
      /* Hide any dynamic content that might cause flakiness */
      .loading, .spinner { display: none !important; }
    `,
    // Add settings for flexible image handling
    imageOptimization: false,
    // Allow Percy to handle any image dimensions
    flexibleDimensions: true
  },
  discovery: {
    allowedHostnames: ['next-staging.almosafer.com', 'https://www.almosafer.com/'],
    disallowedHostnames: [],
    networkIdleTimeout: 100,
    concurrency: 1
  }
} 