# multi-env

Repository created with express-generator
https://expressjs.com/en/starter/generator.html

### install dependencies:

- $ npm install

### run the app:

- $ DEBUG=multi-env:\* npm start

### Running docker locally

- docker build . -t shuffle/multi:12345
- docker run --name multi -d -p 8300:5000 -e NODE_PORT=5000 -e APP_VERSION=12345 shuffle/multi:12345 
  - localhost:8300
  - docker rm multi -f

## Steps in Github actions

- Lint
  - eslint
    - npx eslint . (during local development)
- Docker build && docker push
    - git tag -a v1.0.1 && git push origin v1.0.1
- Generate install info
    - step 'helpful'
- Install image in heroku
- Test endpoint /health (200)

