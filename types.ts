import React from 'react';

export enum AppRoute {
  HOME = 'home',
  FRIENDS = 'friends',
  GALLERY = 'gallery',
  SOUNDTRACK = 'soundtrack',
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: number; // in seconds
}

export interface FriendLetter {
  id: string;
  name: string;
  avatarUrl: string;
  preview: string;
  fullLetter: string;
  relationship: string;
  videoUrl?: string;
}

export interface Memory {
  id: string;
  imageUrl: string;
  caption: string;
  date: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
}

export interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  onClick?: () => void;
  delay?: number;
  layoutId?: string;
}