import { IComponentParams } from "../../framework/core/component";
import { WFMComponent } from "../../framework/index";

class HomePageComponent extends WFMComponent {
    constructor(config: IComponentParams) {
        super(config)
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
    <h1>Home Page</h1>
    `
})