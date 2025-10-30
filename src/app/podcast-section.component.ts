import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastCardComponent } from './podcast-card.component';
import { Podcast } from './podcast.model';

@Component({
  selector: 'app-podcast-section',
  standalone: true,
  imports: [CommonModule, PodcastCardComponent],
  template: `
    <section class="podcast-section">
      <h2 class="podcast-title">PODCAST</h2>
      <p class="podcast-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
      </p>

      <div class="podcast-grid">
        @for (podcast of podcasts; track podcast.id) {
          <app-podcast-card [podcast]="podcast" />
        }
      </div>

      <button class="view-more-button">ver más</button>
    </section>
  `,
  styles: [
    `
      .podcast-section {
        background: black;
        padding: 3rem 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .podcast-title {
        color: white;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        letter-spacing: 0.05em;
      }

      .podcast-description {
        color: white;
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 1.6;
        margin: 0 0 2.5rem 0;
        max-width: 600px;
      }

      .podcast-grid {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        max-width: 1200px;
      }

      .view-more-button {
        background: linear-gradient(90deg, #8f50f8 0%, #8f50f8 100%);
        color: white;
        border: none;
        padding: 0.75rem 2.5rem;
        border-radius: 50px;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.3s ease;
        font-family: inherit;
      }

      .view-more-button:hover {
        opacity: 0.9;
      }

      @media (max-width: 768px) {
        .podcast-section {
          padding: 2rem 1rem;
        }

        .podcast-title {
          font-size: 1.5rem;
        }

        .podcast-description {
          font-size: 1rem;
        }

        .podcast-grid {
          gap: 1rem;
        }
      }
    `,
  ],
})
export class PodcastSectionComponent {
  podcasts: Podcast[] = [
    {
      id: '1',
      title: 'NEW ENGLAND DEPORTES',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/9d22f38b943073c9d03a895a1d1dcf358e8aa15d?width=278',
      backgroundColor: '#1a1a2e',
    },
    {
      id: '2',
      title: 'SALUD VITAL',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/c8f7d43d125d4cc68167f4df7578f49ab4b200dd?width=320',
      backgroundColor: '#43b07f',
    },
    {
      id: '3',
      title: 'VIVA LATINO',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/3109888859523e8f5e850c41f9747113398d915c?width=865',
      backgroundColor: '#f5a623',
    },
    {
      id: '4',
      title: 'LAS MUJERES SIEMPRE EMPRENDEN',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/621520034125ecf093bf85ff6259f24fb7ce3c4a?width=320',
      backgroundColor: '#8753f3',
    },
    {
      id: '5',
      title: 'MEETING DEPORTIVO',
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/aa9e204a68b5b0449bf6e61fd9e93d6743174029?width=279',
      backgroundColor: '#f5f5f5',
    },
  ];
}
