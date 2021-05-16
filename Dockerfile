FROM node:12.2.0-alpine
 
WORKDIR /usr/front

COPY . .

COPY ./.docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["yarn", "start"]

