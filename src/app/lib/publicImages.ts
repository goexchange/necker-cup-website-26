/**
 * Easiest way to use images on any page:
 * 1. Put the image in public/images/ (e.g. public/images/necker.jpg)
 * 2. Add one line below: myImage: '/images/myImage.jpg',
 * 3. In any page: import { publicImages } from '@/app/lib/publicImages';
 *    Then use: <img src={publicImages.myImage} alt="..." /> or url('${publicImages.myImage}')
 * Root-relative paths (/images/...) work on all routes in dev and build.
 */
export const publicImages = {
  necker: '/images/necker.jpg',
  moskito: '/images/moskito.jpg',
  banner: '/images/banner_image.jpg',
  heroSlide1: '/images/hero-slide-1.jpg',
  heroSlide2: '/images/hero-slide-2.jpg',
  heroSlide3: '/images/hero-slide-3.jpg',
} as const;
