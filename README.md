# Goal-Manager

Goal manager using React, Airtable and Styled Components

Youtube Link : https://www.youtube.com/watch?v=FEoEvSmtmPQ&t=331s
Youtube Channel : codeSTACKr
Github Project Repo Link : https://github.com/codeSTACKr/goal-manager-react
Git Clone : https://github.com/codeSTACKr/goal-manager-react.git

- Other Resource:
  - 50 Projects from @Colby Fayock
  - https://50reactprojects.com/

```
⏳ Time Stamps ⏳
00:00 Intro
00:26 embold.io Overview
00:58 Idea: Colby Fayock
02:16 Airtable Set-Up
07:24 React Project
17:56 styled-components
31:37 Publish to GitHub
32:34 embold.io Project Set-Up & Walkthrough
```

```
Creating a Goal manager using React, Airtable and Styled Components
Then publish the code in Github
Then run out code thru Embold - It will check the quality of our code and look issues for us
```

```
Use airtable as our goal management dashboard
Display our goals in our React project
Then Deploy in Netlify
```

```
Setup database on Airtable
Create React App
    npx create-react-app .
```

```
Config Airtable

go to airtable.com/api to get your apiKey and base name
create .env file
add the .env file to .gitignore

Install
    $ npm i airtable styled-components

App.js







App.js
import Airtable from 'airtable'
const base = new Airtable({apiKey:"keyE5HXx3pdspfEF6"}).base('appxK2lvS7XfyAeXw')
```
