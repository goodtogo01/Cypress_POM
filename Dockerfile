FROM cypress/included:latest
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "npm", "cypress", "run" ]
VOLUME -$PWD:/app

