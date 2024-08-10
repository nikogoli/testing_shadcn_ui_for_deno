import { Importer, SideMedium } from './types.d.ts';
export declare function useSidecar<T>(importer: Importer<T>, effect?: SideMedium<any>): [React.ComponentType<T> | null, Error | null];
