# react-native-challenge
10-day coding challenge using React Native to test my learning, programming and planification skills. This challenge starts the 26/2/2023 and ends the 13/3/2023.
> Why React Native?
> I choosed this framework because I've already made a To-do list with it, but was not satisfied with the result. Also, I like the 'live' updating of the app, it saves time re-building the app every time a change is made.

## Rules
Here are the rules to follow:
- 6 hours of work per day maximum.
- No coding during the weekend.
- Use of two branches at least. One of them has to be for the baseline.
- Do several commits. Do not commit all the changes made in a day in one single commit.
- Every merge to the baseline must be done through a Pull Request.
- Documentate changes, additions, problems and solutions for each day in this file.
- Must do some planification on day 1.

## Day 1
> Time dedicated: about 4 hours

On day 1, the next things were done:
- I've chosen the app idea. It will be a Sudoku with different difficulties and with a Time-trial gamemode.
- I've setup all the software and files required to code and run/test de app.
- I've designed how de UI may be, just to have an idea while coding (UI_design.png).
- Coded the MainScreen and the DifficultyScreen. Will add Navigation later in the project.

For day 2 I will be continuing with the UIs and will try to do the sudoku generation algorithm.

## Day 2
> Time dedicated: about 4 and a half hours

On day 2, the next things were done:
- I created the game UI (for 9x9 sudoku).
- I added a modal for the pause dialog.

The way the matrix is implemented may not be the best one, I may change it if I have time left.

For day 3 I will implement the navigation between screens and will start with the sudoku generation algorithm. The 4x4 screen will be done later.

## Day 3
> Time dedicated: about 4.5 hours

On day 3, the next things were done:
- I've implemented the navigation between screens.
- I've done the sudoku generation algorithm. It is based on the premise that an unique solution is given if there are at least 17 hints.
- I've tried to add the number insertion feature, but I got stuck and did not find a way to implement it.
- I created a component for the stopwatch.

For day 4 I will try to implement the number insertion feature, and also the annotations and hints. If I have time and some energy left I will do the solution-checker. (I do not know yet if I want to show when a number inserted is wrong or if I want to check the entire board after it's completed.)

## Day 4
> Time dedicated: 0 hours

On day 4 I wasn't feeling motivated, so I decided to take a day off.

## Day 5
> Time dedicated: about 4.5 hours

On day 5, the next things were done:
- I've implemented the number insertion, annotawhention and hint features.
- I've implemented the number position check in the number insertion.
- I've added a 'finish' button to end the game. If the board is complete and correct, a modal pop-ups. Otherwise, the app shows an alert.
- I've removed the 'Stopwatch' and 'SudokuBoard' components because I did not find a way to "communicate" between components. My idea was to use something like an Interface, but I couldn't find any. This created an efficiency problem; everytime the clock updates, every component re-renders (not ideal at all).

On day 6 I will test the game and if I feel that it's working ok, I will try to find a solution to the clock updates.

## Day 6
> Time dedicated: about 3 hours.

On day 6, the next things were done:
- Re-implemented the stopwatch component.
- Implemented the use of Context for the time. I thought that if I added context to the current time, GameScreen would stop rendering every second. Though, that was not the case, so I realized that I could create a component for each modal, (instead of having them written in GameScreen.js), removing the re-rendering (only the FinishModal re-renders, which may be more efficient).
- Created a file for the Pause modal, to make GameScreen look cleaner.
- Added an icon to the app (I may change it later).

## Day 7
> Time dedicated: about 2 hours.

On day 7, the next things were done:
- I've added the impossible difficulty option
- I've implemented the time-trial gamemode. I could have done it in the same component as the normal game, but I've decided that it will be easier for me to fix things if I have them separated.

On the remaining days (8,9,10) I will try to implement a leaderboard. This will require me to build some kind of database, and I'm thinking that I will implement a RESTful API with Node.js or Python (may choose Node to continue using javascript)

## Day 8
> Time dedicated:

On day 8, the next things were done:
- I've researched about API's with Node.js and python. I have decided that the best option will be using python + fastapi, because from what I've read, Node.js will require me more time to understand ( and I only have day 9 and 10 to do it).
- I've added functionality to the '?' button in the MainScreen. It shows the explanations of the different game modes and the project.

On day 9 I will start reading and implementing the API, and if I have some time left I will try to code the data layer.