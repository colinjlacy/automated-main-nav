# Automated Nav in Angular 2

This demo uses the [Angular 2 Quickstart](https://github.com/angular/quickstart) project (a la RC4) to demonstrate the construction of an automated nav in a modular client.  It corresponds with [this blog post](https://webcake.co/automating-your-main-nav-in-a-modular-angular-2-app/) on my [website](https://webcake.co).

## To test:

Pull this repo, and run the installation:
```
$ npm install
$ typings install
```

The app should start right up if you run:
```
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to see it in action.

If you'd like to experiment with adding or removing modules from your route configurations, the simplest way is to comment-out their routes from the main route registry, in `app/app.routes.ts`.  

You can also find the functionality that automates the main nav in `app/core-components/header.component.ts`.
