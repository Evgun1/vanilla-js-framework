export class Component {
    constructor({template, selector}) {
        this.template = template
        this.selector = selector
        this.el = null
    }

    render() {
        console.log(this.selector);
        this.el = document.querySelector(this.selector)
        if (!this.el) throw new Error (`Component with selector  ${this.selector} wasn's found`)
        this.el.innerHTML = this.template
    }
}