import { OrderDetailsService } from './../../services/order-details.service';
import { AbstractType, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service: OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  foodData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id== this.getMenuId;

        })

    }
  }

}
