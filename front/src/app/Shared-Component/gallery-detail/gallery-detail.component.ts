import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { TranslatePipe } from '@ngx-translate/core';

export interface GalleryImage {
  imageSrc?: string;
  image?: string;
  nameEN?: string;
  nameAR?: string;
  alt?: string;
}

export interface GalleryItem {
  imageSrc: string;
  nameEN: string;
  nameAR: string;
  alt?: string;
}

export interface GalleryDetailData {
  descriptionEN?: string;
  descriptionAR?: string;
  subImages: GalleryImage[];
}

export interface GalleryConfig {
  images: GalleryImage[];
  imagePath: string;
  galleryTitleKey?: string;
  galleryAriaLabelKey?: string;
}

@Component({
  selector: 'app-gallery-detail',
  imports: [CommonModule, Image, TranslatePipe],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.scss',
})
export class GalleryDetailComponent {
  @Input() data?: GalleryDetailData;
  @Input() config?: GalleryConfig;
  @Input() lang: 'en' | 'ar' = 'en';
  @Input() imagePath: string = 'assets/images/products-page/';
  @Input() itemName?: string;
  @Input() showDescription = true;

  get titleKey(): string {
    return this.config?.galleryTitleKey ?? 'services_details.service_gallery';
  }

  get ariaLabelKey(): string {
    return this.config?.galleryAriaLabelKey ?? 'services_details.image_gallery';
  }

  get galleryImages(): GalleryImage[] {
    return this.config?.images ?? this.data?.subImages ?? [];
  }

  get currentImagePath(): string {
    return this.config?.imagePath ?? this.imagePath;
  }

  getImagePath(image: GalleryImage): string {
    const imageSrc = image.imageSrc || image.image;
    return this.currentImagePath + (imageSrc || '');
  }

  getImageAlt(image: GalleryImage): string {
    if (image.alt) {
      return image.alt;
    }
    if (this.itemName) {
      return this.itemName;
    }
    if (image.nameEN || image.nameAR) {
      return this.lang === 'en' ? (image.nameEN || '') : (image.nameAR || '');
    }
    return 'Gallery Image';
  }

  get description(): string {
    if (!this.data) return '';
    return this.lang === 'en' ? this.data.descriptionEN ?? '' : this.data.descriptionAR ?? '';
  }
}
