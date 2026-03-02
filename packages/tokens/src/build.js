/** Style Dictionary 4 config: W3C DTCG tokens → CSS variables (--ds-*) + JSON */
export default {
  // Only process token set files, exclude Tokens Studio metadata files ($*.json).
  source: [
    'src/tokens/core/**/*.json',
    'src/tokens/components/**/*.json',
    'src/tokens/themes/**/*.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ds',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [{ destination: 'tokens.json', format: 'json/flat' }],
    },
  },
};
