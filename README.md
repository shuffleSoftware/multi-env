# multi-env

Repository created with express-generator
https://expressjs.com/en/starter/generator.html

### install dependencies:

- $ npm install

### run the app:

- $ DEBUG=multi-env:\* npm start

### Running docker locally

- docker build . -t shuffle/multi:latest
- docker run -d -p 8350:5000 -e NODE_PORT=5000 shuffle/multi:latest
  - localhost:8350

## Steps

- Lint
  - eslint
    - npx eslint . (during local development)
- Docker build && docker push
    - git tag -a v1.0.1 && git push origin v1.0.1
- Generate install info in pull_request
- Install image
- Test endpoint /health (200)


f74a6665-e621-4709-97fe-5331b8e10169