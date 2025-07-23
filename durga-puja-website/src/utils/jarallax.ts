'use client';

import { useEffect, useRef } from 'react';
import jarallax from 'jarallax';
import 'jarallax/dist/jarallax.css';

export function useJarallax(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      jarallax(elementRef.current, options);
    }

    return () => {
      if (elementRef.current) {
        jarallax(elementRef.current, 'destroy');
      }
    };
  }, [options]);

  return elementRef;
}

export function initJarallax(element: HTMLElement | Element, options = {}) {
  if (element) {
    jarallax(element, options);
  }
}

export function destroyJarallax(element: HTMLElement | Element) {
  if (element) {
    jarallax(element, 'destroy');
  }
}
