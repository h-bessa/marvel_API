# Marvel App Lumapps

<img align="left" alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="react" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img align="left" alt="redux" src=	"https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
<img align="left" alt="express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img align="left" alt="nodejs" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />

<br /><br />
Creating an API app to read an display Marvel's characters & comics information from the Marvel API
<br />
<br />

<img src='https://github.com/lumapps/frontend-tech-test/blob/master/src/Frontend%20Test.png?raw=true' />


## Setup
To run this project, clone and install it locally using npm (I didn't use yarn... sorry 😅):
```
git clone git@github.com:hydris-bessa/marvel_API.git
cd marvel_API/
npm install
npm run start
```

## API_KEY
Don't foget to get your own API public key given by Marvel. For the purpose of this test, please find mine here and add it to the .env file
```
ab6c2425acf0e0d77ab7987d9566a3f0
```

## Design
I used some components from the open source library created by LumApps - [Documentation](https://design.lumapps.com/)

## API Documentation
For this exercice, I used 2 endpoints from the Marvel API
<br />
- GET /v1/public/characters
- GET /v1/public/characters/{characterId}/comics

Here to read the [API documentation](https://developer.marvel.com/docs)
