import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RedditList } from "../common-interface";

@Component({
  selector: "app-reddit-list-item",
  templateUrl: "./reddit-list-item.component.html",
  styleUrls: ["./reddit-list-item.component.scss"],
})
export class RedditListItemComponent implements OnInit {
  @Input() public redditList: RedditList[];

  constructor(private _router: Router) {}

  ngOnInit() {
    if (!this.redditList || !this.redditList.length) {
      this._router.navigate([""]);
    }
  }
}
