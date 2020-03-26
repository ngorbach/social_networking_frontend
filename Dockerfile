FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get install nano

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm

COPY ./scripts /scripts
RUN chmod +x ./scripts*

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp

WORKDIR frontend_tmp
COPY package.json /frontend_tmp/
RUN npm install
COPY . /frontend_tmp
RUN npm run build