import { Component, OnInit, HostListener } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { RedditList, SubRedditList } from "../common-interface";
import { RedditListContainerService } from "./reddit-list-container.service";

@Component({
  selector: "app-reddit-list-container",
  templateUrl: "./reddit-list-container.component.html",
  styleUrls: ["./reddit-list-container.component.scss"],
})
export class RedditListContainerComponent implements OnInit {
  redditList: RedditList[] = [];
  redditUrl: string = "https://www.reddit.com";
  subReddits: SubRedditList[] = [
    {
      title: "r/aww",
    },
    {
      title: "r/movies",
    },
    {
      title: "r/funny",
    },
  ];
  after: string = "";
  subReddit: string;
  constructor(
    private rService: RedditListContainerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  fetchRedditList(subReddit) {
    this.subReddit = subReddit;
    this.spinner.show();
    this.rService
      .fetchRedditData(this.redditUrl, subReddit, this.after)
      .subscribe((data) => {
        console.log("data", data);
        this.after = data.data.after;
        this.spinner.hide();
        data.data.children.forEach((child) => {
          this.redditList.push({
            title: child.data.title,
            thumbnail: child.data.thumbnail,
            subreddit: child.data.subreddit,
            link: this.redditUrl + child.data.permalink,
          });
        });
      });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("here");
      this.fetchRedditList(this.subReddit);
    }
  }
}
