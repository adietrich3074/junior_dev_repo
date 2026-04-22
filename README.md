# Beginner React Component Library

A beginner-friendly React project that teaches reusable components through fun themed pages:

- Cars
- Sports
- Video Games

It includes a Home hub page and interactive examples (filters + favorites) to help new developers
learn component reuse and state in a simple way.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal to view the app.

## Build For Production

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components`: reusable UI components (`Button`, `Card`, `Badge`, etc.)
- `src/pages`: `HomePage`, `CarsPage`, `SportsPage`, `GamesPage`, and `ComponentShowcasePage`
- `src/data`: plain JavaScript arrays used to render cards and filters
- `src/styles`: base app styles and component styles

## Beginner Exercises

1. Add a new card item to one of the data arrays in `src/data/themes.js`.
2. Create a new card category and add a matching filter button on a page.
3. Add a new button variant in `src/components/Button.jsx` and style it in `src/styles/components.css`.
4. Build a new themed page (music, movies, or travel) using the existing components.
