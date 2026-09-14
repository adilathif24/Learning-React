# Day 5 — React API Fetching + useEffect + Weather Dashboard 🌤️

**Date: 14 September 2026**

## Progress

### `useEffect` + API Fetching — COMPLETED ✅

## Learning Method

For the concept:
1. Definition
2. Hinglish explanation
3. Syntax
4. Real-world example
5. Hands-on implementation
6. Loading and error handling
7. Bootstrap UI
8. Interview preparation
9. GitHub documentation

## Topics Completed

- [x] `useEffect` Hook
- [x] Side effects in React
- [x] API calling with `fetch()`
- [x] `response.ok`
- [x] `response.json()`
- [x] Promise `.then()` flow
- [x] `.catch()` error handling
- [x] API data stored using `useState`
- [x] Loading state
- [x] Error state
- [x] Conditional rendering
- [x] Dynamic API data rendering
- [x] Bootstrap integration
- [x] Responsive Bootstrap cards
- [x] Real-world Weather Dashboard project

## Important Concept

`useEffect` is a React Hook used to perform side effects such as API calls and data fetching. It does not create or update state by itself. `useState` creates and updates state; a state setter such as `setProduct()` can be called inside `useEffect`.

## API Flow

```text
Component Render
      ↓
useEffect
      ↓
fetch()
      ↓
API Request
      ↓
response.ok
      ↓
response.json()
      ↓
setProduct()
      ↓
State Update
      ↓
Component Re-render
      ↓
API Data → UI
```

## Real-World Example

Weather application:

```text
Open Weather Dashboard
        ↓
React calls API
        ↓
Weather data received
        ↓
Store data in state
        ↓
Display temperature
wind speed, direction,
coordinates and weather code
```

## Project Completed

### Weather Dashboard

Built with:
- React
- `useState`
- `useEffect`
- Open-Meteo API
- `fetch()`
- `response.ok`
- JSON conversion
- Loading and error states
- Conditional rendering
- Bootstrap
- Responsive cards
- Glassmorphism-style UI

### Dashboard Features

- Current temperature
- Temperature warm/cool indicator
- Wind speed
- Wind direction
- Weather code
- Latitude and longitude
- Timezone
- Elevation
- Loading spinner
- Error message

## Code Pattern

```jsx
useEffect(() => {
  fetch("API_URL")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then((data) => {
      setProduct(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError("Unable to fetch data");
      setLoading(false);
    });
}, []);
```

## Interview Answer

**What is `useEffect`?**

`useEffect` is a React Hook used to perform side effects in a component. It is commonly used for API calls, data fetching, timers, subscriptions, and other external interactions. It runs after rendering according to its dependency array.

**Does `useEffect` update state?**

No. `useEffect` performs side effects. `useState` is responsible for state. A state setter such as `setProduct()` can be called inside `useEffect`.

## Status

**Day 5 — `useEffect` + API Fetching + Weather Dashboard COMPLETED ✅**

## Next

Continue with the React roadmap and strengthen API concepts with real-world search/filtering and dynamic data projects.
