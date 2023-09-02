import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-homr',
  templateUrl: './homr.component.html',
  styleUrls: ['./homr.component.css'],
})
export class HomrComponent implements OnInit {
  constructor(private service: ServiceService) {}

  ngOnInit() {}

  getData() {
    this.service.getAllData().subscribe((dddd) => {
      console.log(dddd);
    });
  }
}
