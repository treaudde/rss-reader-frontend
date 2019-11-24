import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssFeedListComponent } from './components/rss-feed-list/rss-feed-list.component';
import { RssFeedItemComponent } from './components/rss-feed-item/rss-feed-item.component';
import { RssFeedFormComponent } from './components/rss-feed-form/rss-feed-form.component';
import { RssFeedListItemComponent } from './components/rss-feed-list-item/rss-feed-list-item.component';
import { RssFeedsListComponent } from './components/rss-feeds-list/rss-feeds-list.component';
import { RssFeedsListItemComponent } from './components/rss-feeds-list-item/rss-feeds-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RssFeedListComponent, RssFeedItemComponent, RssFeedFormComponent, RssFeedListItemComponent, RssFeedsListComponent, RssFeedsListItemComponent]
})
export class RssFeedModule { }
