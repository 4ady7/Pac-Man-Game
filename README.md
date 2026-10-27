# Snack Man

A browser maze game in the style of Pac-Man. Steer a yellow character around a 10×10 grid, eat the pellets, and stay clear of the green enemies. Each cleared level adds another enemy and another wall.

There is no build step and no package install. The game is plain HTML, CSS, and JavaScript.

## Play

Open `index.html` in a browser. Click **Start**, then move.

You can also serve the folder if you prefer a local URL:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

The start screen looks for `images/icon.png` as the logo and favicon. The game still runs if that file is missing.

## Controls

| Input | Action |
| --- | --- |
| Arrow keys | Move up, down, left, or right |
| On-screen arrows | Same movement, for a mouse or touch |
| `1`–`8` | Set speed, from slowest (`1`) to fastest (`8`) |
| `9` | Speed boost for 9 seconds, then back to the default speed |

Movement starts only after you click **Start**. Releasing an arrow key stops you. Walls and the blue maze border block movement.

## Rules

- **Pellets.** White dots are worth 1 point each. The score is on the right.
- **Lives.** You start with 3, shown as yellow circles in the top-right. Touching an enemy costs one life, flashes the character red, and freezes movement for 1.5 seconds. After a hit there is a short grace period so the same contact does not take every life at once.
- **Enemies.** Green enemies wander on their own, including diagonally, and turn when they meet a wall.
- **Clearing a level.** Level 1 has 50 pellets. Eat them all and the **Start the next level?** button appears. Each new level places one extra enemy and one extra wall, so there are two fewer pellets to collect. After every 12th level the maze resets to the original layout (3 enemies, 10 walls, 50 pellets) and the cycle repeats.
- **Game over.** At 0 lives the run ends. Enter a name when prompted. The score is saved in the browser with `localStorage` and listed on the leaderboard, highest first. Click **Restart the game?** to play again. The score and lives reset; the leaderboard stays until you clear site data for this page.

## Project layout

```
index.html   page structure: start screen, maze, score, lives, leaderboard, controls
style.css    layout, maze tiles, mouth animation, hit and death effects
script.js    maze generation, movement, collisions, levels, and the leaderboard
```

The maze is a 10×10 grid of numbers, drawn into `<main>` as one cell per value:

| Value | Tile |
| --- | --- |
| `0` | Pellet |
| `1` | Interior wall |
| `2` | Player |
| `3` | Enemy |
| `4` | Outer border |

At the start of a run the script places 3 enemies and 10 walls on random pellet cells, away from the outer two rows and columns so the player is not boxed in immediately.
