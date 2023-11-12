module.exports = (api) => {
  // 实现 csr (客户端) ssr（服务端）
  const isWeb = api.caller(caller => caller && caller.target === 'isWeb')

  return {
    // env  typescript  transform-runtime loadable code spliting 代码分割
    presets: [
      [
        '@bebel/env',
        {
          useBuiltIns: isWeb ? 'usage' : undefined,
          corejs: isWeb ? 3 : false
        }
      ],
      '@babel/typescript',
      [
        "@babel/react",
        {
          runtime: 'automatic'
        }
      ],
    ],
    plugins: ["@loadable/babel-plugin", "@babel/plugin-transform-runtime"],
    env: {
      development: {
        plugins: isWeb? ["react-fresh/babel"]:undefined
      }
    }
  };
};