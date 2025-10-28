import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Podcast } from './podcast.model';

@Component({
  selector: 'app-podcast-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="podcast-card-container">
      <div class="podcast-image-wrapper" [style.backgroundColor]="podcast.backgroundColor">
        <img [src]="podcast.image" [alt]="podcast.title" class="podcast-image" />
      </div>
      <button class="play-button" aria-label="Play podcast">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
        </svg>
      </button>
      <p class="podcast-title">{{ podcast.title }}</p>
    </div>
  `,
  styles: [`
    .podcast-card-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }

    .podcast-image-wrapper {
      position: relative;
      width: 140px;
      height: 140px;
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .podcast-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-button {
      position: absolute;
      bottom: 16px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(50, 50, 50, 0.9);
      border: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .play-button:hover {
      background: rgba(80, 80, 80, 0.95);
    }

    .podcast-title {
      text-align: center;
      color: white;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.2;
      max-width: 140px;
      margin: 0;
    }
  `]
})
export class PodcastCardComponent {
  @Input() podcast!: Podcast;
}
