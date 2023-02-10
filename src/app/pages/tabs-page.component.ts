import { IComponentParams } from "../../framework/core/component";
import { WFMComponent } from "../../framework/index";

class TabsPageComponent extends WFMComponent {
    constructor(config : IComponentParams) {
        super(config)
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
    <h1>Tabs Page</h1>
    `
})