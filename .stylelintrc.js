module.exports = {
  // 继承的预设，这些预设包含了规则集插件
  extends: [
    // 基本 scss 规则
    'stylelint-config-standard-scss',
    // scss vue 规则
    'stylelint-config-recommended-vue/scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
  ],
  plugins: [
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    // 自定义规则集的启用 / 禁用
    // 'stylistic/max-line-length': null,
    'stylistic/max-line-length': 100,
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/unit-case': 'lower',
  },
};
