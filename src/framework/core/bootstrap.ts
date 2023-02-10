import { IModule } from "./module";

export function bootstrap(module :IModule):void {
    module.start()
}