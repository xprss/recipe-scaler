import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-title',
  imports: [Button],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  public onNavigateToGitHub(): void {
    window.open('https://www.github.com/xprss', '_blank');
  }
}
