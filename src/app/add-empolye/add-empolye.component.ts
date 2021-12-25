import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empolye } from '../model/empolye';
import { EmpolyeserviceService } from '../service/empolyeservice.service';

@Component({
  selector: 'app-add-empolye',
  templateUrl: './add-empolye.component.html',
  styleUrls: ['./add-empolye.component.scss']
})
export class AddEmpolyeComponent implements OnInit {

  employee:Empolye = new Empolye();

  constructor(private empolyeservice:EmpolyeserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveempolye(){
    this.empolyeservice.addempolye(this.employee).subscribe(data=>{
      console.log(data);
      this.goempolyelist()
    },
    error=>console.log(error)
    )
  }

  goempolyelist(){
    this.router.navigate(['/empolye-list']);
  }
  
  onsubmit(){
    console.log(this.employee);
    this.saveempolye();
  }

}
