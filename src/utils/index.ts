export function range({ from = 0, to }:{from: number, to: number}):Array<number> {
  return [...Array(to).keys()].map((i) => i + from);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const dummyExport = () => { };
