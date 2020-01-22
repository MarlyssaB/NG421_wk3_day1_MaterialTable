import { Component, OnInit } from '@angular/core';
import { YTerServiceService } from '../yter-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private YTerService: YTerServiceService) { }

  dataSource = this.YTerService.getList;

  ngOnInit() {
  }

}
