// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tslint: false,
          tsconfig: './tsconfig.json',
          typeChecker: true,
          watch: './src',
        },
      },
    },
  ],
  modify: (defaultConfig, { dev }) => {
    const config = { ...defaultConfig };

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test && !!'.module.css'.match(rule.test)) {
        const use = rule.use.map((useConfig) => {
          if (
            useConfig.options &&
            useConfig.options.modules &&
            useConfig.options.modules.localIdentName
          ) {
            const { options, ...rest } = useConfig;
            // omit minimize which fails the build process
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { modules, minimize, ...restOptions } = options;
            return {
              ...rest,
              options: {
                ...restOptions,
                modules: {
                  ...modules,
                  localIdentName: `${dev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'}`,
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

    return config;
  },
};
