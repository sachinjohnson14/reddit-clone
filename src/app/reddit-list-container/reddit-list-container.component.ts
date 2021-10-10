import { Component, OnInit, HostListener } from "@angular/core";
import { MatSnackBar } from "@angular/material";
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
  after: string;
  subReddit: string;
  constructor(
    private rService: RedditListContainerService,
    private spinner: NgxSpinnerService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchRedditList();
  }

  /**
   * fetch records from particular subreddit 25 at a time
   * @param subReddit
   */
  fetchRedditList() {
    this.spinner.show();
    this.rService
      .fetchRedditData(this.redditUrl, "r/aww", this.after)
      .subscribe(
        (data) => {
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
        },
        (error) => {
          this.spinner.hide();
          this.snackbar.open("Something went wrong", "X", {
            duration: 5000,
            verticalPosition: "bottom",
            horizontalPosition: "left",
            panelClass: ["error"],
          });
        }
      );
  }
  /**
   * Fetch further records on scroll to bottom (for infinite scrolling)
   */
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.body.scrollHeight;
    if (Math.round(pos) == Math.round(max)) {
      this.fetchRedditList();
    }
  }
}
