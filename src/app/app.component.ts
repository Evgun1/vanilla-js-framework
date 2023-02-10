import { IComponentParams } from "../framework/core/component";
import { WFMComponent } from "../framework/index";

class AppComponent extends WFMComponent {
    constructor(config: IComponentParams) {
        super(config)
    }
    
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>

    <router-outlet></router-outlet>

        <div class="row">
            <div class="col s6 offset-s3" style="margin-top: 40px">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Главная страница</span>
                        <p>Пока нету никакого функцианала</p>
                    </div>
                    <div class="card-action">
                        <a href="#">перейти на другую странцу</a>
                    </div>
                </div>
            </div>
        </div>
    `
})