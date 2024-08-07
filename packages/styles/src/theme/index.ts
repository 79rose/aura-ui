import { inject, App, Plugin } from 'vue';
import { isObjectLike } from '@auraui/shared';
import { generateCssVars } from '../utils';
import { themeColorLevelsEnabledKeys, AurauiCssVarsConfig } from '../vars';

const THEME_PROVIDE_KEY = '__AuraUITheme__';

function useGlobalTheme(app: App, options?: AurauiCssVarsConfig) {
  /** 设置全局主题变量的方法 */
  function setTheme(styleObj: AurauiCssVarsConfig) {
    // 设置主题变量时，兼顾主题色的色阶
    const cssVars = generateCssVars(styleObj, {
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
      colorLevels: 9,
    });
    Object.entries(cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }

  const result = { setTheme };

  app.provide(THEME_PROVIDE_KEY, result);

  if (isObjectLike(options) && Object.keys(options).length > 0) {
    setTheme(options);
  }

  return result;
}

type AuraUITheme = ReturnType<typeof useGlobalTheme>;

export function useTheme() {
  const result = inject<AuraUITheme>(THEME_PROVIDE_KEY);
  if (!result) {
    throw new Error('useTheme() must be used after app.use(Theme)!');
  }
  return result;
}

export const Theme: Plugin<AurauiCssVarsConfig[]> = {
  install: (app, ...options) => {
    const finalOptions: AurauiCssVarsConfig = {};
    options.forEach((item) => {
      Object.assign(finalOptions, item);
    });
    useGlobalTheme(app, finalOptions);
  },
};

export * from './presets';
