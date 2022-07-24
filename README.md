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

- Getting the code
  - action source
- Lint
  - eslint
  - prettier
    - npx prettier --write .
- Linting
- Docker build
- Docker push
- Install image
- Test endpoint /health (200)
