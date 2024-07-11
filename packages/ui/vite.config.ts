import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';

type Mode = 'package' | 'full' | 'full-min';

export default defineConfig(({ mode }) => generateVueConfig({ mode: mode as Mode }));
