import {defineNuxtModule, addPlugin, createResolver, addImports, addComponent, installModule} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    _nuxt.options.css.push('primeicons/primeicons.css');

    await addComponent({
      name: 'ToastMessage',
      filePath: resolve('./runtime/components/ToastMessage'),
    })
    await addComponent({
      name: 'ToastContainer',
      filePath: resolve('./runtime/components/ToastContainer'),
    })

    await installModule('@pinia/nuxt');
    await installModule('@nuxtjs/tailwindcss', {
      // module configuration
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
          ],
        },
      },
    })

    addImports({
      name: 'useToaster',
      as: 'useToaster',
      from: resolve('./runtime/composables/useToaster'),
    })
    addImports({
      name: 'ToastManager',
      as: 'ToastManager',
      from: resolve('./runtime/toastManager'),
    })
    addImports({
      name: 'useToastStore',
      as: 'useToastStore',
      from: resolve('./runtime/composables/useToastStore'),
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
})
