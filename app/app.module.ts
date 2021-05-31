import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NotesPage } from '../pages/notes/notes';

import { LearnNowPage } from '../pages/learnnow/learnnow';
import { CalenderPage } from '../pages/calender/calender';

@NgModule({
  declarations: [
    MyApp,
    LearnNowPage,
    ProfilePage,
    CalenderPage,
    HomePage,
    TabsPage,
    NotesPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LearnNowPage,
    ProfilePage,
    HomePage,
    NotesPage,
    CalenderPage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
