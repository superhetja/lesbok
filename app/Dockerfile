FROM node:16

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002
RUN mkdir /app && chown node:node /app

# install global packages
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i -g --unsafe-perm=true --allow-root npm@latest expo-cli@latest


# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms

# ENV PATH /opt/app/.bin:$PATH
WORKDIR /app
# WORKDIR /opt/app
COPY --chown=node:node ./package.json ./package-lock.json /app 
# when running for production 
#RUN npm ci --only=production
RUN npm install

COPY  ./ .

# copy in our source code last, as it changes the most
# WORKDIR /opt/app/
# for development, we bind mount volumes; comment out for production


ENTRYPOINT ["npm", "run"]
CMD ["start"]

