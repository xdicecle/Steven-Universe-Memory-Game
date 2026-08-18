# Steven Universe Memory Card Game

A React + Vite memory-style game featuring Steven Universe characters.

## Overview

This app challenges you to click cards without repeating a card you already flipped.
After each click, cards are shuffled to increase difficulty.

Current gameplay loop:

- Click a card to flip it.
- If you click a card that was already flipped, the round resets.
- Your high score tracks the best number of unique cards flipped in one round.

## Features

- Character cards with custom image assets
- Per-character background colors
- High score tracking
- Card shuffling after every valid click
- Responsive card grid layout

## Tech Stack

- React
- Vite
- JavaScript (ES modules)
- CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
	assets/        # Character images
	components/    # Card UI, game content, card data
	styles/        # App and reset styles
	App.jsx        # Main game logic and score state
	main.jsx       # App entry point
```

## Future Improvements

- Add true matching-pair memory mode
- Add difficulty levels and timer
- Add card flip animations and sound effects
- Persist high score in local storage

## License

This project is for learning and personal development.
