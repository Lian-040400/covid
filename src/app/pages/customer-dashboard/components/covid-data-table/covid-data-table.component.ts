import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { today } from '../../../../helpers/formatYesterdaydate';
@Component({
  selector: 'app-covid-data-table',
  templateUrl: './covid-data-table.component.html',
  styleUrls: ['./covid-data-table.component.scss']
})
export class CovidDataTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['country', 'totalCases', 'newCases', 'totalDeaths', 'newDeaths', 'population'];
  @Input('dataFromDb') set setData(v: any) {
    this.dataSource.data = v;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: any;
  dataFromDb?: any;
  public today = today
  constructor() {
    this.dataSource = new MatTableDataSource(this.dataFromDb);
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
