import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section.component';
import { PodcastSectionComponent } from './podcast-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, PodcastSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
