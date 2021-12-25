import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empolye } from '../model/empolye';
import { EmpolyeserviceService } from '../service/empolyeservice.service';

@Component({
  selector: 'app-uapdetempolye',
  templateUrl: './uapdetempolye.component.html',
  styleUrls: ['./uapdetempolye.component.scss']
})
export class UapdetempolyeComponent implements OnInit {

  employee:Empolye=new Empolye();

  id!: number;

  constructor(private empolyeservice:EmpolyeserviceService,private ruter:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.id=this.ruter.snapshot.params['id'];
    this.empolyeservice.getrmpolyebyid(this.id).subscribe(data=>{
      this.employee=data;
    },
    error=>console.log(error)
    )
  }

  updateempolye(){
    this.empolyeservice.updateempolye(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.goempolyelist()
    })
  }

  goempolyelist(){
    this.router.navigate(['/empolye-list']);
  }

  onsubmit(){
  this.updateempolye()
  }
}
