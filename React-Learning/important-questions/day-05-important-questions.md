# Day 5 — `useEffect` + API Fetching Important Questions

## 1. What is `useEffect`?

`useEffect` is a React Hook used to perform side effects such as API calls, data fetching, timers, subscriptions, and external interactions.

## 2. Does `useEffect` create or update state?

No. `useState` creates and updates state. A state setter such as `setProduct()` can be called inside `useEffect`.

## 3. Why is `fetch()` commonly used inside `useEffect`?

API calls are side effects, so `useEffect` provides a place to perform the request after rendering according to its dependency array.

## 4. What does `response.json()` do?

It reads the response body and parses JSON data into a JavaScript value.

## 5. Why check `response.ok`?

It allows the application to detect unsuccessful HTTP responses and throw an error before processing the response body.

## 6. Why use `.catch()`?

`.catch()` handles errors in the Promise chain, such as a failed fetch/network request or an error thrown in the chain.

## 7. Why use a loading state?

It gives the user feedback while the API request is still in progress.

## 8. Why use an error state?

It allows the UI to show a meaningful message when weather data cannot be fetched.

## 9. Explain the API data flow.

```text
useEffect → fetch() → response.ok → response.json()
→ setProduct() → state update → re-render → UI
```

## 10. Practical Interview Scenario

**Q: How would you build a React weather dashboard?**

**Answer:** I would call the weather API inside `useEffect`, validate the HTTP response with `response.ok`, convert the response using `response.json()`, store the result using `useState`, and manage loading and error states. Then I would conditionally render the weather information using Bootstrap components.
