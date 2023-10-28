import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
id: any;
object:any;
  constructor(private serv:ApiServiceService  ,public rout:ActivatedRoute) {
    this.id=this.rout.snapshot.paramMap.get("id")
    // console.log(this.id)
    serv.getby(this.id).subscribe((data:any)=>{
      this.object=data
      // console.log(this.object)
    })
   }

  ngOnInit(): void {
  }

}
