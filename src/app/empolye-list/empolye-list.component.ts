import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empolye } from '../model/empolye';
import { EmpolyeserviceService } from '../service/empolyeservice.service';

@Component({
  selector: 'app-empolye-list',
  templateUrl: './empolye-list.component.html',
  styleUrls: ['./empolye-list.component.scss']
})
export class EmpolyeListComponent implements OnInit {

  empolyess: Empolye[] = [];

  constructor(private empolyeservice:EmpolyeserviceService,private router:Router) { }

  ngOnInit(): void {
    this. getempolye();
  }

  private getempolye(){
    this.empolyeservice.getempolyelist().subscribe(data=>{
      this.empolyess=data;
    });
  }

  updateempolye(id:number){
    this.router.navigate(['uapdetempolye',id])
  }

  deleteempoly(id:number)
  {
    this.empolyeservice.deleteempolye(id).subscribe(data=>{
      this.getempolye();
    })
  }
}
