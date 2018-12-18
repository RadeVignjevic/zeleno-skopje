import { Injectable } from '@angular/core';
import { Idea } from './idea';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  ideas: Idea[];

  constructor() { 
    this.ideas = [
      {
        title: "Davor B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje"
      },
      {
        title: "Bobit B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Kavadarci"
      },
      {
        title: "Nevena B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje"
      },
      {
        title: "Rade B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje"
      },
    ]
  }

  getIdeas(): Idea[] {
    return this.ideas;
  }

  addIdea(idea: Idea): void {
    this.ideas.unshift(idea);
  }
}
