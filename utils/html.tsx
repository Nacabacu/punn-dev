'use client'

export const hasVerticalScroll = () => {
  return document.documentElement.scrollHeight > window.innerHeight;
};