import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { TranslatePipe } from '@ngx-translate/core';

export interface GalleryItem {
  imageSrc: string;
  nameEN: string;
  nameAR: string;
  alt?: string;
}

export interface GalleryDetailData {
  descriptionEN: string;
  descriptionAR: string;
  subImages: GalleryItem[];
}

@Component({
  selector: 'app-gallery-detail',
  imports: [CommonModule, Image, TranslatePipe],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.scss',
})
export class GalleryDetailComponent {
  @Input({ required: true }) data!: GalleryDetailData;
  @Input() lang: 'en' | 'ar' = 'en';
  @Input() imagePath: string = 'assets/images/products-page/';
}
