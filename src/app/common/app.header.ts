import { IComponentParams } from "../../framework/core/component";
import { WFMComponent } from "../../framework/index";

class AppHeader extends WFMComponent {
  constructor(config: IComponentParams) {
    super(config)
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <nav class="indigo">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" style="margin-left: 20px">Native Framework</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Главная</a></li>
        <li><a href="#tabs">Табы</a></li>
      </ul>
    </div>
  </nav>
    `
})