import { TappRuoutes } from "../framework/tools/router";
import { homePageComponent } from "./pages/home-page.component";
import { tabsPageComponent } from "./pages/tabs-page.component";

export const appRoutes:TappRuoutes = [
    { path: '', component: homePageComponent },
    { path: 'tabs', component: tabsPageComponent },
]