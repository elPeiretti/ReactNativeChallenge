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