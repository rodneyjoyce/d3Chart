import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "Rodney Joyce";

  public data = [
    {
      cat: 'library', name: 'Lodash', value: 5,
      icon: 'assets/img/lodash.svg',
      desc: `
  				Been using it for 3 years.`
    },
    {
      cat: 'library', name: 'MomentJS', value: 5,
      icon: 'assets/img/momentjs.png',
      desc: `
  				Dates and times
  			`
    },
    {
      cat: 'library', name: 'Redux', value: 5,
      icon: 'assets/img/redux.svg',
      desc: `
  				State management
  			`
    },
    {
      cat: 'framework/library', name: 'Angular', value: 200,
      icon: 'assets/img/angular2.svg',
      desc: `
  			 Typescript and SPA
  			`
    },
    {
      cat: 'framework/library', name: 'Bootstrap', value: 100,
      icon: 'assets/img/bootstrap.svg',
      desc: `
            Yeah
  			`
    },
    {
      cat: 'framework/library', name: 'ReactJS', value: 1,
      icon: 'assets/img/react.png',
      desc: `
            React
  			`
    },
    {
      cat: 'devops', name: 'Jenkins', value: 10,
      icon: 'assets/img/jenkins.png',
      desc: `
  				Ci/CD
  			`
    },
    {
      cat: 'tooling', name: 'Visual Studio Code', value: 50,
      icon: 'assets/img/vscode.png',
      desc: `
  			  Mac or PC
  			`
    },
    {
      cat: 'backend', name: 'MongoDB', value: 10,
      icon: 'assets/img/mongodb.png',
      desc: `
  				NoSQL
  			`
    },
    {
      cat: 'backend', name: 'NodeJS', value: 10,
      icon: 'assets/img/nodejs.svg',
      desc: `
  				JS runtime
  			`
    },
    {
      cat: 'platform', name: 'Docker', value: 30,
      icon: 'assets/img/docker.svg',
      desc: `
  			 Docker Containers!
  			`
    },
    {
      cat: 'platform', name: 'Phonegap', value: 70,
      icon: 'assets/img/phonegap.png',
      desc: `
  			 Hybrid mobile app.
  			`
    },
    {
      cat: 'language', name: 'HTML', value: 75,
      icon: 'assets/img/html5-css3.png',
      desc: `
  				HTML
  			`
    },
    {
      cat: 'language', name: 'JavaScript', value: 75,
      icon: 'assets/img/javascript.png',
      desc: `
  				Javascript
  			`
    },
    {
      cat: 'language', name: 'SASS', value: 20,
      icon: 'assets/img/sass.png',
      desc: `
  				Saas
  			`
    },
    {
      cat: 'language', name: 'TypeScript', value: 75,
      icon: 'assets/img/typescript.png',
      desc: `
  				Used for strong type checking
  			`
    },
    {
      cat: 'build', name: 'GulpJS', value: 20,
      icon: 'assets/img/gulp.png',
      desc: `
  				Gulp task runner
  			`
    },
    {
      cat: 'workflow', name: 'Webpack', value: 30,
      icon: 'assets/img/webpack.svg',
      desc: `
  				A module bundler library
  			`
    },
    {
      cat: 'framework', name: 'AngularJS', value: 10,
      icon: 'assets/img/angular1.png',
      desc: `
  				Angular 1
  			`
    },
    {
      cat: 'library/framework', name: 'jQuery', value: 10,
      icon: 'assets/img/jquery.png',
      desc: `
  				Deprecated
  			`
    }
  ];
}
