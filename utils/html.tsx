'use client';

const PRESERVED_OFFSET = 100;

export const hasVerticalScroll = () => {
  return document.documentElement.scrollHeight > window.innerHeight + PRESERVED_OFFSET;
};
