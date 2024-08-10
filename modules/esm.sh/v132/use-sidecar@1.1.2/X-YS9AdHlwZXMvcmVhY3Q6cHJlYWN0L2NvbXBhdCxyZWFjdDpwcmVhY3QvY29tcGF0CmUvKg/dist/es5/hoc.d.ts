// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import { Importer, SideCarHOC } from './types.d.ts';
export declare function sidecar<T>(importer: Importer<T>, errorComponent?: React.ReactNode): React.FunctionComponent<Omit<T, 'sideCar'> & SideCarHOC<Omit<T, 'sideCar'>>>;
