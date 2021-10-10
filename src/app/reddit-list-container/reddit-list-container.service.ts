import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RedditListContainerService {
  constructor(private http: HttpClient) {}

  fetchRedditData(redditUrl, subReddit): Observable<any> {
    return this.http.get(`${redditUrl}/${subReddit}.json?limit=25`);
  }
}
