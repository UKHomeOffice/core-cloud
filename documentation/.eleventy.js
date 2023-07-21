const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
      ? 'https://ukhomeoffice.github.io/core-cloud/'
      : '/';

  const pathPrefix = process.env.GITHUB_ACTIONS
      ? '/core-cloud/'
      : '/';

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#8f23b3',
    fontFamily: 'roboto, system-ui, sans-serif',
    icons: {
        mask: pathPrefix+'assets/logos/ho-mask-icon.svg',
        shortcut: pathPrefix+'assets/logos/ho-favicon.ico',
        touch: pathPrefix+'assets/logos/ho-apple-touch-icon.png'
    },
    opengraphImageUrl: pathPrefix+'assets/logos/ho-opengraph-image.png',
    header: {
      productName: 'Core Cloud Documentation',
      organisationLogo: '<img src="'+pathPrefix+'assets/logos/ho_logo.svg" height="34px" alt="Home Office Logo">',
      organisationName: 'Home Office'
    },
    footer: {
      copyright: {
        text: '© Crown Copyright 2023'
      },
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="'+pathPrefix+'LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
    },
    stylesheets: ['/styles/base.css'],
    pathPrefix,
    url,
  })

  eleventyConfig.addPassthroughCopy('./assets')
  eleventyConfig.addPassthroughCopy({'../LICENSE': 'LICENSE.txt'})


  return {
    pathPrefix,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
        // Use layouts from the plugin
        includes: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
      }
    }
};