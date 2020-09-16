# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


############################################################
Cart Module
ng g module cart
ng g c cart/coponents/cart
ng g c cart/components/cart-list
ng g c cart/components/cart-summery
ng g class cart/models/cart-item
ng g service cart/services/cart



###############
Routing
ng g c components/not-found


##############
Product Module
ng g m product
ng g c product/components/product-home
ng g c product/components/product-list
ng g c product/components/product-edit
ng g c product/components/product-search

ng g service product/services/product

ng g class product/models/product
ng g class product/models/brand

create product-routing manually

##############
create pipe

ng g pipe shared/pipes/filter
ng g pipe shared/pipes/power
ng g pipe shared/pipes/sort

ng g directive shared/directives/highlight


ng g guard product/guards/can-edit
ng g guard product/guards/save-alert
ng g interface product/models/editable

ng  g service services/error-handler

ng g c components/login
ng g service services/auth-interceptor
ng g service shared/services/auth
 
ng g guard shared/guards/auth


ng g c cart/components/checkout
