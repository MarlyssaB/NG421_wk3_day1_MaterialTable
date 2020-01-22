import { Injectable } from '@angular/core';
import { IYTers } from './interface/iyters';
import { YouTubers } from './data/yters-table';

@Injectable({
  providedIn: 'root'
})
export class YTerServiceService {
  yters: IYTers[] = [];

  constructor() {
    this.yters = YouTubers;
   }

   getList(): IYTers[]{
     return this.yters;

   }
}
