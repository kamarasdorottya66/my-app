import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list:Hero[]=
  [
    {id:1, name:'Captain America', superpower:'super human', address:'Washington'},
    {id:2, name:'Iron Man', superpower:'super human', address:'New York'},
    {id:3, name:'Hulk', superpower:'strong', address:'New York'},
    {id:4, name:'Black Widow', superpower:'human', address:'Moscow'},
    {id:5, name:'Black Panther', superpower:'super human', address:'Wakanda'},
  ]

  getAll():Hero[]{
    return this.list;
  }

  constructor() { }
}
