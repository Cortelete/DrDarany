import React from 'react';

export interface PracticeArea {
  id: string;
  name: string;
  description: string;
  examples: string;
  icon: React.ReactNode;
  modalContent: React.ReactNode;
  simpleExamples: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  fullContent: string;
}