{
  "name": "es6-react",
  "private":"true", //私有包，不会发布到npm市场，就不用加:main:index.js配置，因为main:index.js一般是告诉别人这个包的入口文件
  // "version": "1.0.0",  这个用于本地项目构建，也是不需要的，一般是npm包才需要
  "description": "",
  "scripts": {
    "preinstall": "npx only-allow pnpm",
    "prepare":"husky install",
    "init":"pnpm install",
    "test": "echo \"Error: no test specified\" && exit 1",
    "encode-fe-lint-scan": "encode-fe-lint scan",
    "encode-fe-lint-fix": "encode-fe-lint fix"
  },
  "keywords": [],
  "engines": {
    "node":">=12",
    "npm":">=6"
  },
  "author": "",
  "license": "ISC",
  "husky": {
    "hooks": {
      "pre-commit": "encode-fe-lint commit-file-scan",
      "commit-msg": "encode-fe-lint commit-msg-scan"
    }
  },
  "devDependencies": {
    "@babel/core": "^7.14.6",
    "@babel/plugin-transform-runtime": "^7.14.5",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-react": "^7.14.5",
    "@babel/preset-typescript": "^7.14.5",
    "@loadable/babel-plugin": "^5.13.2",
    "@loadable/webpack-plugin": "^5.15.0",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
    "@testing-library/react": "^12.0.0",
    "@types/compression": "^1.7.1",
    "@types/css-minimizer-webpack-plugin": "^3.0.2",
    "@types/express": "^4.17.13",
    "@types/hpp": "^0.2.1",
    "@types/html-minifier": "^4.0.1",
    "@types/loadable__component": "^5.13.4",
    "@types/loadable__server": "^5.12.6",
    "@types/loadable__webpack-plugin": "^5.7.3",
    "@types/mini-css-extract-plugin": "^1.2.1",
    "@types/morgan": "^1.9.3",
    "@types/react": "^17.0.8",
    "@types/react-dom": "^17.0.8",
    "@types/react-helmet": "^6.1.1",
    "@types/react-router-config": "^5.0.2",
    "@types/react-router-dom": "^5.1.7",
    "@types/react-test-renderer": "^17.0.1",
    "@types/redux-mock-store": "^1.0.2",
    "@types/serialize-javascript": "^5.0.1",
    "@types/serve-favicon": "^2.5.3",
    "@types/terser-webpack-plugin": "^5.0.4",
    "@types/webpack-bundle-analyzer": "^4.4.1",
    "@types/webpack-manifest-plugin": "^3.0.5",
    "@types/webpack-node-externals": "^2.5.2",
    "@typescript-eslint/eslint-plugin": "^4.28.2",
    "@typescript-eslint/parser": "^4.28.2",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.6",
    "css-minimizer-webpack-plugin": "^3.0.2",
    "encode-fe-lint": "^1.0.9",
    "fork-ts-checker-webpack-plugin": "^6.2.12",
    "identity-obj-proxy": "^3.0.0",
    "mini-css-extract-plugin": "^2.1.0",
    "node-sass": "^7.0.1",
    "nodemon": "^2.0.9",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.3.5",
    "postcss-loader": "^6.1.1",
    "prettier": "^2.3.2",
    "react-refresh": "^0.10.0",
    "react-test-renderer": "^17.0.2",
    "redux-mock-store": "^1.5.4",
    "sass-loader": "^12.1.0",
    "source-map-support": "^0.5.19",
    "terser-webpack-plugin": "^5.1.4",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.5",
    "webpack": "^5.43.0",
    "webpack-bundle-analyzer": "^4.4.2",
    "webpack-cli": "^4.7.2",
    "webpack-dev-middleware": "^5.0.0",
    "webpack-hot-middleware": "^2.25.0",
    "webpack-manifest-plugin": "^3.1.1",
    "webpack-merge": "^5.8.0",
    "webpack-node-externals": "^3.0.0"
  },
  "dependencies": {
    "@babel/runtime": "^7.14.6",
    "@loadable/component": "^5.15.0",
    "@loadable/server": "^5.15.0",
    "@reduxjs/toolkit": "^1.6.0",
    "autoprefixer": "^10.2.6",
    "axios": "^0.21.1",
    "chalk": "^4.1.1",
    "compression": "^1.7.4",
    "connected-react-router": "^6.9.1",
    "core-js": "^3.15.2",
    "cross-env": "^7.0.3",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "history": "^4.10.1",
    "hpp": "^0.2.3",
    "html-minifier": "^4.0.0",
    "husky": "^8.0.0",
    "morgan": "^1.10.0",
    "normalize.css": "^8.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-error-boundary": "^3.1.4",
    "react-helmet": "^6.1.0",
    "react-redux": "^7.2.4",
    "react-router": "^5.2.0",
    "react-router-config": "^5.1.1",
    "react-router-dom": "^5.2.0",
    "redux-thunk": "^2.3.0",
    "serialize-javascript": "^6.0.0",
    "serve-favicon": "^2.5.0"
  }
}