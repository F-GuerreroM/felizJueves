import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-tcg',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tcg.component.html'
})
export class TcgComponent implements OnInit {
  animes: any[] = [];
  cargando = true;

  // RESPALDO BLINDADO PARA EL VIDEO (Hardcoded)
  private animesBackup = [
    { title: 'Frieren: Beyond Journey\'s End', score: 9.14, episodes: 28, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/1015/138006.jpg' } } },
    { title: 'Fullmetal Alchemist: Brotherhood', score: 9.10, episodes: 64, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg' } } },
    { title: 'Steins;Gate', score: 9.07, episodes: 24, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg' } } },
    { title: 'Attack on Titan', score: 9.05, episodes: 25, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg' } } },
    { title: 'Hunter x Hunter (2011)', score: 9.04, episodes: 148, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg' } } },
    { title: 'Bleach: Sennen Kessen-hen', score: 9.03, episodes: 13, images: { jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/1908/135431.jpg' } } }
  ];

  constructor(private tcgService: TcgService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarAnimes();
  }

  cargarAnimes() {
    this.tcgService.obtenerCartas().subscribe({
      next: (data) => {
        this.animes = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('⚠️ Usando respaldo video:', err);
        this.animes = this.animesBackup;
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}