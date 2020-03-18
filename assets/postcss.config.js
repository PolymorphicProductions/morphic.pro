module.exports = ctx => {
  return {
    map: ctx.env === "dev" ? ctx.map : false,
    plugins: [require("tailwindcss"), require("autoprefixer")]
  };
};
