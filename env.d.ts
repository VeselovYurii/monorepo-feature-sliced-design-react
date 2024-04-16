export type ImportMetaEnv = Readonly<Record<string, string | undefined>>

export interface ImportMeta {
    readonly env: ImportMetaEnv
  }