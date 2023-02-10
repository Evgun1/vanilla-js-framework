import { IappRoutes, TappRuoutes, router } from "../tools/router"
import { IComponent } from "./component"


export interface IModule {
    components: Array<IComponent>
    bootstrapComponent: IComponent
    routes: TappRuoutes
    start(): void
    initComponents(): void
    renderRoute(): void
    renderRoute(): void
    renderComponent(component:IComponent): void
}


export interface IModuleConfig {
    components: Array<IComponent>
    bootstrap: IComponent
    routes: TappRuoutes
}

export class Module implements IModule {
    components
    bootstrapComponent
    routes
    constructor(config: IModuleConfig) {
        this.components = config.components
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if (this.routes) this.initRoutes()
    }

    initComponents() {
        this.bootstrapComponent.render()
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
    }

    renderRoute() {
        let url = router.getUrl()
        let route: IappRoutes | undefined = this.routes.find((r: IappRoutes) => r.path === url)

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(component: IComponent): void {
        component.render()
    }
}