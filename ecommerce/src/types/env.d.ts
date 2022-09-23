/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}