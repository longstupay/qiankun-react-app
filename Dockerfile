FROM node:16-alpine AS builder
# add a worke directory
WORKDIR /app
COPY package.json  yarn.lock ./
RUN yarn install
# copy the react app to the worke directory
COPY . .
# run the build script
RUN yarn build

# deploy on ningx
FROM nginx:1.17-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# import custom nginx config file "nginx.conf" in root path
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]