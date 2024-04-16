
export function getEnvConfig(
    keys: string[],env: Record<string,
    string | number>
):Record<string, string | number | undefined> {
  return keys.reduce((acc, key) => {
    acc[key] = env[key]
    return acc;
  }, {} as Record<string, string | number>)
}