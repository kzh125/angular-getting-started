FROM node:14-alpine as builder
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.18
COPY --from=builder /usr/src/app/dist/angular-getting-started /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
