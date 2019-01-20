FROM node:8.11-alpine as builder

RUN mkdir -p /tmp/projeto-padrao

WORKDIR /tmp/projeto-padrao/

COPY . ./

RUN npm install

RUN npm install --global @angular/cli

ARG build_env

RUN echo "ng build -c=${build_env}"

RUN ng build -c=${build_env}

FROM httpd:2.2.34-alpine

RUN mkdir -p /usr/local/apache2/htdocs/projeto-padrao/

COPY --from=builder /tmp/projeto-padrao/dist /usr/local/apache2/htdocs/projeto-padrao/

EXPOSE 80

CMD ["httpd-foreground"]
