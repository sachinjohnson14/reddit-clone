import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RedditListContainerComponent } from "./reddit-list-container/reddit-list-container.component";
import { RedditListItemComponent } from "./reddit-list-item/reddit-list-item.component";

const routes: Routes = [
  {
    path: "",
    component: RedditListContainerComponent,
  },
  {
    path: "subReddit",
    component: RedditListItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
