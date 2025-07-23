// src/types/jarallax.d.ts
declare module 'jarallax' {
  export interface JarallaxOptions {
    type?: string;
    speed?: number;
    imgSrc?: string;
    imgElement?: string | HTMLElement;
    imgSize?: string;
    imgPosition?: string;
    imgRepeat?: string;
    keepImg?: boolean;
    elementInViewport?: HTMLElement;
    zIndex?: number;
    disableParallax?: Function | boolean;
    disableVideo?: Function | boolean;
    automaticResize?: boolean;
    videoSrc?: string;
    videoStartTime?: number;
    videoEndTime?: number;
    videoVolume?: number;
    videoLoop?: boolean;
    videoPlayOnlyVisible?: boolean;
    videoLazyLoading?: boolean;
    onScroll?: Function;
    onInit?: Function;
    onDestroy?: Function;
    onCoverImage?: Function;
  }

  export function jarallax(element: HTMLElement | NodeListOf<HTMLElement> | Element | string, options?: JarallaxOptions | string): void;
  export function jarallaxVideo(): void;
  export function jarallaxElement(options?: object): void;

  export default jarallax;
}
