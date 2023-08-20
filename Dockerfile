FROM ubuntu

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .

RUN apt-get update && \
    apt-get install -y nodejs npm && \
    npm install

EXPOSE 3002
CMD ["npm","start"]