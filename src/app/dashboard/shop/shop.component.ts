import {Component, OnInit} from "@angular/core";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.css']
})

export class ShopComponent implements OnInit{
  productList: any = [];
  imgUrl = '/assets/images/';
  constructor(private shop: ShopService) {}
  ngOnInit(){
    this.shop.getAll().subscribe(products => this.productList = products);
  }
}
