import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfficeService} from "../../../../shared/services/office.service";
import {OfficeInterface} from "../../../../shared/interfaces/office.interface";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  officeList!: OfficeInterface[];
  displayedColumns: string[] = ['streetAddress', 'postalCode', 'cityName', 'officeCEO'];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private officeService: OfficeService) {
  }

  ngOnInit(): void {
    this.officeService.getOfficeList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((officeList: OfficeInterface[]) => {
        this.officeList = officeList
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
