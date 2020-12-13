const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nuppulehto/www/nuppulehto/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nuppulehto/www/nuppulehto/src/pages/index.js"))),
  "component---src-pages-info-js": hot(preferDefault(require("/Users/nuppulehto/www/nuppulehto/src/pages/info.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/nuppulehto/www/nuppulehto/src/templates/blog.js")))
}

