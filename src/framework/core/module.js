import { router } from "../tools/router"

export class Module {
    constructor(config) {
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
        let route = this.routes.find(r => r.path === url)

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(c) {
        c.render()
    }
}