import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly translateService: TranslateService
  ) {
    this.setlanguage();
  }

  private setlanguage(): void {
    this.translateService.setDefaultLang('en');
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang) {
      const language = userLang.substring(0, 2);
      this.translateService.use(language);
    }
  }

}
