# React `useEffect` Hook

## Definition

`useEffect` is a React Hook used to perform side effects in a component. Common examples include API calls, data fetching, timers, subscriptions, and interactions with external systems.

## Hinglish

`useEffect` React component ke side effects handle karne ke liye use hota hai. API call ya data fetch karna iska common use case hai.

## Important Distinction

- `useState` → state create/update karta hai.
- `useEffect` → side effects perform karta hai.
- `setProduct()` jaise state setters ko `useEffect` ke andar call kiya ja sakta hai.

## Syntax

```jsx
useEffect(() => {
  // side effect
}, []);
```

An empty dependency array means the effect runs after the initial render (with React development Strict Mode, effects may be invoked an extra time during development).

## API Calling Example

```jsx
useEffect(() => {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=15.25&longitude=80.03&current_weather=true")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error while fetching data");
      }
      return response.json();
    })
    .then((converteddata) => {
      console.log(converteddata);
      setProduct(converteddata);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError("Unable to fetch weather data. Please try again later.");
      setLoading(false);
    });
}, []);
```

## API Flow

```text
useEffect
   ↓
fetch()
   ↓
API Response
   ↓
response.ok
   ↓
response.json()
   ↓
setProduct()
   ↓
State Update
   ↓
Re-render
   ↓
API Data on UI
```

## Loading and Error Handling

A production-style API component should handle at least:

- Loading state while the request is running.
- Error state when the request fails.
- Success state when data is available.

## Real-World Uses

- Weather applications
- Product dashboards
- News applications
- Job portals
- User profile data
- Notification systems

## Hands-On Project

**Weather Dashboard**

The project uses Open-Meteo API and Bootstrap to display:

- Temperature
- Wind speed
- Wind direction
- Weather code
- Latitude and longitude
- Timezone
- Elevation
- Loading spinner
- Error message
- Responsive cards

## Interview Questions

### What is `useEffect`?

`useEffect` is a React Hook used to perform side effects such as API calls, data fetching, timers, subscriptions, and external interactions.

### Does `useEffect` update state?

No. `useEffect` performs side effects. `useState` creates and updates state, although a state setter can be called from inside an effect.

### Why use `[]`?

An empty dependency array indicates that the effect does not depend on changing reactive values and normally runs after the initial render; development Strict Mode can invoke it an extra time.
