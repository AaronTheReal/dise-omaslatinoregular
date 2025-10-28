import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="text-black">CONECTATE</span>
          <span class="text-black">CON TUS</span>
          <span class="text-purple">RAICES<br />LATINAS</span>
        </h1>
        <p class="hero-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: white;
      padding: 3rem 2rem;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .hero-content {
      max-width: 400px;
      margin-left: 2rem;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 1.5rem 0;
      letter-spacing: -0.02em;
    }

    .text-black {
      color: black;
      display: block;
    }

    .text-purple {
      color: #8f50f8;
      display: block;
    }

    .hero-description {
      color: black;
      font-size: 1.125rem;
      font-weight: 300;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 2rem 1rem;
        min-height: auto;
      }

      .hero-content {
        margin-left: 0;
        max-width: 100%;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroSectionComponent {}
