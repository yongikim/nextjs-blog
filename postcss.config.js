module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbos: "no-2009",
        },
        state: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
