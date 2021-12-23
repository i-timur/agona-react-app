import {FilmService} from '../services/FilmService';
import {makeAutoObservable} from 'mobx'

export class FilmStore {
  constructor() {
    makeAutoObservable(this,{
      films: false
    });
    this.filmService = new FilmService();
  }

  getAllFilms() {
    return this.filmService.getFilms();
  }
}