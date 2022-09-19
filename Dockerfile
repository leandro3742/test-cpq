FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --no-optional
COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev"]