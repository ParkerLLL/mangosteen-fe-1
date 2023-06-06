/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent, FunctionalComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

