import { Component, OnInit, ViewChild } from '@angular/core';
import { YTerServiceService } from './yter-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IYTers } from './interface/iyters';
import { YouTubers } from './data/yters-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Totally Amazing Table';
  displayedColumns: string[] = ["name", "type", "subscribers", "dateJoined"];
  dataSource: MatTableDataSource<IYTers>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private YTerService: YTerServiceService) { }

 

  ngOnInit() {
    this.dataSource =  new MatTableDataSource(this.YTerService.getList());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
