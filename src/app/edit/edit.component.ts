import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:any;
object:any;
edite_object: any={
  duplicate_of: []
};
target_values:any[]=[];
lead_id:any;
  constructor(private serv:ApiServiceService,router:ActivatedRoute ,public turn:Router) {
this.id=router.snapshot.paramMap.get('id')
// // console.log(this.id)
    serv.list().subscribe((data:any)=>{
      // console.log(data)
      this.object=data
      // console.log(this.object)

    })
  }
  getvalue(id: any){
    console.log('id: ',id.value)
    this.edite_object.duplicate_of = id.value
    // this.lead_id=id.value
    // this.idw=$event.target.value
    // console.log(this.edite_object)



  }


  edit(){
    return this.serv.update(this.id,this.edite_object).subscribe((data:any)=>{
     this.turn.navigateByUrl('/')
    })
  }


  ngOnInit(): void {
  }

}
