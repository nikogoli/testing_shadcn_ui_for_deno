// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js';
export function createContext<ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType): readonly [{
    (props: ContextValueType & {
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
}, (consumerName: string) => ContextValueType];
export type Scope<C = any> = {
    [scopeName: string]: React.Context<C>[];
} | undefined;
type ScopeHook = (scope: Scope) => {
    [__scopeProp: string]: Scope;
};
export interface CreateScope {
    scopeName: string;
    (): ScopeHook;
}
export function createContextScope(scopeName: string, createContextScopeDeps?: CreateScope[]): readonly [<ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType | undefined) => readonly [{
    (props: ContextValueType & {
        scope: Scope<ContextValueType>;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
}, (consumerName: string, scope: Scope<ContextValueType | undefined>) => ContextValueType], CreateScope];

//# sourceMappingURL=index.d.ts.map
