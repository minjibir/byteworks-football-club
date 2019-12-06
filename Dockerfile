FROM node:13-alpine as dist
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine as prod
COPY --from=dist /app/dist/football /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
