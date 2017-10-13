# Projects List
### [Build a Markdown Previewer](https://www.freecodecamp.org/challenges/build-a-markdown-previewer)
### [Build a Camper Leaderboard](https://www.freecodecamp.org/challenges/build-a-camper-leaderboard)
### [Build a Recipe Box](https://www.freecodecamp.org/challenges/build-a-recipe-box)
### [Build the Game of Life](https://www.freecodecamp.org/challenges/build-the-game-of-life)
### [Build a Roguelike Dungeon Crawler Game](https://www.freecodecamp.org/challenges/build-a-roguelike-dungeon-crawler-game)

# General Workflow
## Create default react app
under command line,
1) make sure node.js installed : `> node -v`

2) install create-react-app : `> npm install -g create-react-app`

3) create your own app, suppose the appname is gameoflife : `> create-react-app gameoflife`

4) switch to the app folder and run it, will open the default app just made.
  ```
  > cd gameoflife
  > npm start
  ```

## Start coding
### clean initial project code
enter `src/` folder, delete all files except index.css and index.js

### create components
- deep clone nested array
```
JSON.parse(JSON.stringify(array));
```

- use [react-bootstrap](https://react-bootstrap.github.io)
run `npm install --save react-bootstrap` under app folder in command line,
add `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">` in index.html

# Problems To Be Solved
### GameOfLife
- box grid layout error when zoom-in or zoom-out window
- generations number won't stop if grid is clear or stop changing.
- code runs too slow when grid size is big.


