# Projeto Mashup Angular

## Projeto de integrar os dashboards feitos no Qlink Sense no Angular 6

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Qlik Sense

Foi usado gerado um template básico mashup na ferramenta do Qlik Sense dev-hub para o exemplo dessa aplicação.
No component qlik onde tem o url http://localhost:4848/extensions/... informe o caminho do seu mashup gerado na ferramenta do Qlik Sense.

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

## Barreiras Vencidas

Encontrada dificuldade na utilização do Material Design para Angular:
Solução: Feita importação do ReactiveFormsModule que faz parte dos forms e necessário na utilização.
OBS: Além de importar os componentes encontrados na aba API, no final da página de cada componente existem mais componentes para importar para uso daquele componente.
