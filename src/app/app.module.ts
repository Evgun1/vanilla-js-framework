import { WFMModule } from "../framework/index";
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";
import { appRoutes } from "./app.routes";
import { IModuleConfig } from "../framework/core/module";

class AppModule extends WFMModule {
    constructor(config: IModuleConfig) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    bootstrap: appComponent,
    routes: appRoutes
    
});
