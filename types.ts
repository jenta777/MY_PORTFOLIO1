import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceStart?: string;
  longDescription?: string;
  features?: string[];
  tools?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'design' | 'tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}