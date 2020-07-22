import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent implements OnInit {
  company : { name, company_name, address, tel, total_employee, name_manager, date} 
  = { name: "", company_name: "", address: "", tel:"", total_employee:"", name_manager:"", date:""};

  constructor() { }

  ngOnInit(): void {
  }
  createCompany(){
    console.log("Company created: ", this.company);
    this.company = {  name: "", company_name: "", address: "", tel:"", total_employee:"", name_manager:"", date:""};

  }

}
