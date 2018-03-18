import {Component} from "@angular/core";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.css']
})

export class NewsComponent {
  newsList: any = [];
  filteredList: any = [];
  constructor(private backend: BackendService) {
    this.backend.getAll().subscribe(news => {
      this.newsList = news;
      this.filteredList = news;
    });
  }
  changeCategory(category, event) {
    this.filteredList = this.newsList.filter(function (element) {
      if (element.category === category) {
        return true;
      }
    });
    if (category === 'all') {
      this.filteredList = this.newsList;
    }
    console.log(event)
  }
}
