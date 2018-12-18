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
        text: "Epten Dobra idea",
        city: "Skopje"
      },
      {
        title: "Bobit B.",
        text: "Epten Dobra idea",
        city: "Kavadarci"
      },
      {
        title: "Nevena B.",
        text: "Epten Dobra idea",
        city: "Skopje"
      },
      {
        title: "Rade B.",
        text: "Epten Dobra idea",
        city: "Skopje"
      },
    ]
  }

  getIdeas(): Idea[] {
    return this.ideas;
  }

  addIdea(idea: Idea): void {
    this.ideas.push(idea);
  }
}
