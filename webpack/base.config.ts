import { RuleSetUseItem } from 'webpack';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { loader } from 'mini-css-extract-plugin';
export const isDev = process.env.NODE_ENV === 'development';

// loader style-loader  css-loader  postcss-loader

const getStyleLoaders = (isWeb: boolean, isSass?: boolean) => {
  let loaders: RuleSetUseItem[] = [
    {
      loader: 'css-loader',
      options: {
        importLoaders: isSass ? 2 : 1,
        modules: {
          auto: true,
          exportOnlyLocals: !isWeb,  // ssr
        }
      }
    },
    {
      loader: 'postcss-loader'
    },
  ]

  if(isWeb) {

  }

  if (isSass)
    loaders = [
      ...loaders,
    ]
  return loaders
}
// plugins csr ssr
const  getPlugins = (isWeb: boolean) => {
  let plugins = {
    
  }
}



// plugin