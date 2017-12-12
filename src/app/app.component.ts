import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from "angularfire2/database/firebase_list_observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');
  }

  add(course: HTMLInputElement) {
    this.courses$.push({
      name: course.value,
      price: 50,
      isLive: true,
      sections: [
        {title: 'asdasd'},
        {title: 'qweqwe'},
        {title: 'asdad'}
      ]
    });
    course.value = '';
  }

  update(course) {
    this.db.object('/courses/' + course.$key)
      .update({
        title: 'New Title',
        isLive: true
      });
  }

  delete(course) {
    this.db.object('/courses/' + course.$key)
      .remove()
      .then(x => console.log('Delete'))
      .catch(error => console.log(error));
  }
}
