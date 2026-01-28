import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-title',
  imports: [Button],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  public version: string = "v" + environment.version;
  public onNavigateToGitHub(): void {
    window.open('https://www.github.com/xprss', '_blank');
  }
}
