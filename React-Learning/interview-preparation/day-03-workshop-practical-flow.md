# Day 3 — Workshop Practical Flow Interview Preparation

## API Data → UI

After fetching data from an API, React can render the returned data dynamically on the UI.

**Interview answer:**
I would fetch the API data, store or use the response in the component, and map/render the data dynamically in JSX.

## Search and Filtering

Search and filtering allow users to find relevant records from dynamically loaded data.

**Interview answer:**
I would keep the search/filter value in state and use it to determine which records from the fetched data should be displayed.

## React Router

React Router is used for navigation between different views/routes in a React application.

**Interview answer:**
I would use React Router to define routes and render the appropriate component/view for each route, such as a job list and job details page.

## SPA

SPA stands for Single Page Application. The application can update different views/components while staying within the same React application rather than performing traditional full-page navigation.

**Interview answer:**
A React SPA provides different views through client-side routing while the application remains loaded as a single-page experience.

## Combined Project Flow

```text
API Fetching
   ↓
Dynamic Data Rendering
   ↓
Search / Filtering
   ↓
React Router
   ↓
SPA Navigation
   ↓
Real React Application
```

## Job Dashboard Example

A Job Dashboard can combine all these concepts:

1. Fetch jobs from an API.
2. Render job cards dynamically.
3. Search jobs by title/keyword.
4. Filter the displayed jobs.
5. Use React Router for job list and job details views.
6. Keep the experience within a React SPA.

## Important Learning Boundary

Today's workshop discussion established the practical flow and concepts. Detailed implementation of API fetching, search/filtering and React Router remains part of the structured React roadmap and will be practiced as dedicated topics.