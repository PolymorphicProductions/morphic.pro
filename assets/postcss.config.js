module.exports = ctx => {
  return {
    map: ctx.env === "dev" ? ctx.map : false,
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      require('postcss-nested'),
      ctx.env === "production" && require('@fullhuman/postcss-purgecss')({
        content: [
          "./css/**/*.css",
          "../lib/morphic_pro_web/**/*.leex",
          "../lib/morphic_pro_web/**/*.eex",
          "../lib/morphic_pro_web/**/*.ex"
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ]
  };
};
