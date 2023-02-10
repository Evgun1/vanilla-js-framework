export const router = {
    getUrl() {
        return window.location.hash.slice(1)
    }
}

export type TappRuoutes = Array<IappRoutes>

export interface IappRoutes{
    path: string
    component: any
}