
import React from 'react';
import { Project, Metric } from './types';
import { Rocket, Brain, Code, Terminal, Zap, Globe } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'IDEATR.DEV',
    description: 'Build and grow apps at the speed of thought. Scaling to 100k MRR.',
    tags: ['Next.js', 'AI', 'Vercel'],
    image: 'https://res.cloudinary.com/dnhv7jexy/image/upload/v1740039235/ideatr_promo.png',
    color: '#ff00ff'
  },
  {
    id: '2',
    title: 'THEROOTED.AI',
    description: 'Winner of Stanford GSB LISA Startup Incubator. Youngest participant ever.',
    tags: ['LLMs', 'Healthcare', 'Incubated'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
    color: '#00f2ff'
  },
  {
    id: '3',
    title: 'BUILD FAST SHIP FAST',
    description: 'Legendary series: 10 full-stack apps built and shipped in just 7 days.',
    tags: ['Velocity', 'Ship', 'Pure Code'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    color: '#39ff14'
  }
];

export const STATS: Metric[] = [
  { name: 'Velocity', value: 99 },
  { name: 'MRR Goal', value: 85 },
  { name: 'Sleep', value: 5 },
  { name: 'Stanford LISA', value: 100 },
];

export const NAVIGATION = [
  { name: 'HOME', icon: <Terminal size={18} />, link: '#' },
  { name: 'BLOG', icon: <Brain size={18} />, link: 'https://arjuns-blog.framer.website' },
  { name: 'X', icon: <Zap size={18} />, link: 'https://x.com/arjunkshah21' },
  { name: 'GITHUB', icon: <Globe size={18} />, link: 'https://github.com/arjunkshah' },
];
