import { Component } from '@angular/core';

import { LearnNowPage } from '../learnnow/learnnow';
import { HomePage } from '../home/home';
import { NotesPage } from '../notes/notes';
import { ProfilePage } from '../profile/profile';
import { CalenderPage } from '../calender/calender';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabHome = HomePage;
  tabNotes = NotesPage;
  tabLearn = LearnNowPage;
  tabCalender = CalenderPage;
  tabProfile = ProfilePage;

  constructor() {}
}
