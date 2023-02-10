export interface IComponent {
    template: string,
    selector: string,
    el: null | Element,
    render(): void
}

export interface IComponentParams {
    template: string
    selector: string
}

export class Component implements IComponent {
    template
    selector
    el: Element | null

    constructor({ template, selector }: IComponentParams) {
        this.template = template
        this.selector = selector
        this.el = null
    }

    render() {
        console.log(this.selector);
        this.el = document.querySelector(this.selector)
        if (!this.el) throw new Error(`Component with selector  ${this.selector} wasn's found`)
        this.el.innerHTML = this.template
    }
}

