import React, {createContext, ReactNode} from 'react';

export const StoreContext = createContext<any>(null)

type ProviderType = {
    store: any,
    children: ReactNode
}

export const Provider = ({store, children}: ProviderType) => {
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}