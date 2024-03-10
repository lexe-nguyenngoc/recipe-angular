import { Component } from '@angular/core';

type Feature = 'recipe' | 'shopping-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedFeature: Feature = 'recipe';

  handleNavigate(newFeature: Feature) {
    this.loadedFeature = newFeature;
  }
}
