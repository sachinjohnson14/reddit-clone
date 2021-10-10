import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RedditListContainerService {
  constructor(private http: HttpClient) {}

  /**
   * API call to fetch reddit data
   * @param redditUrl
   * @param subReddit
   * @param after
   * @returns
   */
  fetchRedditData(redditUrl, subReddit, after): Observable<any> {
    let params = {};
    if (after) {
      params = {
        limit: "25",
        after: after,
      };
    } else {
      params = {
        limit: "25",
      };
    }
    return this.http.get(`${redditUrl}/${subReddit}.json`, { params });
  }
}
