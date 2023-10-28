import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alldata=[];
  constructor(public serv:ApiServiceService) {


    serv.list().subscribe((data:any)=>{
     this.alldata=data
    })
  }

  ngOnInit(): void {
  }

}
