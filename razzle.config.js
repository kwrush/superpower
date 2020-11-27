/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: false,
          watch: './src',
          typeChecker: true,
        },
      },
    },
  ],
  modifyWebpackConfig: ({
    env: { dev, target },
    webpackConfig,
    webpackObject,
  }) => {
    const config = { ...webpackConfig };

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test && !!'.module.css'.match(rule.test)) {
        const use = rule.use.map((useConfig) => {
          if (
            useConfig.options &&
            useConfig.options.modules &&
            useConfig.options.modules.localIdentName
          ) {
            const {
              options: { modules, ...restOptions },
              ...rest
            } = useConfig;
            return {
              ...rest,
              options: {
                ...restOptions,
                modules: {
                  ...modules,
                  localIdentName: `${
                    dev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'
                  }`,
                },
              },
            };
          }
          return useConfig;
        });

        return {
          ...rule,
          use,
        };
      }

      return rule;
    });

    config.resolve.alias = {
      '~app': path.resolve(__dirname, './src'),
    };

    return razzleHeroku(config, { target, dev }, webpackObject);
  },
};
