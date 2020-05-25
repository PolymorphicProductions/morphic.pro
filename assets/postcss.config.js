module.exports = ctx => {
  return {
    map: ctx.env === "dev" ? ctx.map : false,
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      require('postcss-nested'),
      require('@fullhuman/postcss-purgecss')({
        content: [
          "../lib/morphic_pro_web/**/*.leex",
          "../lib/morphic_pro_web/**/*.eex",

        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ]
  };
};
