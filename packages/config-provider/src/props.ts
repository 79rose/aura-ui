/** @module ConfigProvider */
import { Component } from 'vue';
import { AurauiCssVarsConfig } from '@auraui/styles';
import { InferVueDefaults } from '@auraui/shared';
import type ConfigProvider from './config-provider.vue';

export interface ConfigProviderProps {
  /** 组件的节点将被渲染的标签类型 */
  tag?: string | Component;

  /** 应用在该节点上的主题变量 */
  themeVars?: AurauiCssVarsConfig;
}

/** @hidden */
export function defaultConfigProviderProps(): Required<InferVueDefaults<ConfigProviderProps>> {
  return {
    tag: 'div',
    themeVars: () => ({}),
  };
}

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
