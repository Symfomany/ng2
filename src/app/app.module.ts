import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// Angular Firebase
//import { AngularFireModule } from 'angularfire2';

// Must export the config for Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyC9q879WXhhRJAYzBNfLMzFNQpLcwbqe_E",
  authDomain: "gameofthrone-45ba7.firebaseapp.com",
  databaseURL: "https://gameofthrone-45ba7.firebaseio.com",
  storageBucket: "gameofthrone-45ba7.appspot.com",
};

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
