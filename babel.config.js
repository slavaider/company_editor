module.exports = (api) => {
  api.cache.using(() => process.env.npm_lifecycle_event);

  const isDevelopment = process.env.npm_lifecycle_event === "start";

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true,
        },
      ],
    ].filter(Boolean),
  };
};
