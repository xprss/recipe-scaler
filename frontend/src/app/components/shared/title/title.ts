import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { environment } from '../../../../environment/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DEFAULT_LANGUAGE, DISPLAY_NAME, Lang, LANG_CODE, Langs } from '../../../lib/langs';

@Component({
  selector: 'app-title',
  imports: [Button, TranslateModule, SelectModule, FormsModule],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title implements OnInit {
  constructor(public translate: TranslateService) {}
  public version: string = 'v' + environment.version;
  public onNavigateToGitHub(): void {
    window.open('https://www.github.com/xprss', '_blank');
  }

  public currentlySelectedLanguage: string = DEFAULT_LANGUAGE;
  public optionLabel = DISPLAY_NAME;
  public optionValue = LANG_CODE;
  public langsOptions = Langs;

  ngOnInit(): void {
    console.log(this.currentlySelectedLanguage)
  }

  public changeLang(lang: string): void {
    this.translate.use(lang);
  }
}
