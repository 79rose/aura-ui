import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/scripts';

type Mode = 'package' | 'full' | 'full-min';

export default defineConfig(({ mode }) => generateVueConfig({ mode: mode as Mode }));
