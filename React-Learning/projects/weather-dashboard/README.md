# Weather Dashboard 🌤️

## Project Overview

A React weather dashboard built using the Open-Meteo API and Bootstrap.

## Concepts Used

- React functional components
- `useState`
- `useEffect`
- API fetching with `fetch()`
- `response.ok` error checking
- `response.json()`
- Loading state
- Error state
- Conditional rendering
- Dynamic API data rendering
- Bootstrap responsive grid and cards
- Inline styling / glassmorphism UI

## API

Open-Meteo Forecast API with current weather data.

## Features

- Live temperature
- Wind speed
- Wind direction
- Weather code
- Latitude and longitude
- Timezone
- Elevation
- Loading spinner
- Error message
- Responsive Bootstrap dashboard

## Data Flow

```text
Component Render
      ↓
useEffect
      ↓
fetch API
      ↓
response.ok
      ↓
response.json()
      ↓
setProduct()
      ↓
State Update
      ↓
Conditional Rendering
      ↓
Weather Dashboard
```

## Learning Outcome

This project demonstrates how React handles API side effects, stores fetched data in state, manages loading/error states, and renders dynamic API data in a responsive UI.
