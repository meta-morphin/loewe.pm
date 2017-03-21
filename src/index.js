function requireAll (r) {
  r.keys().forEach(r);
}

// require all .pug files in this directory
requireAll(require.context("./", true, /\.pug$/));
require("./sass/main.scss");

