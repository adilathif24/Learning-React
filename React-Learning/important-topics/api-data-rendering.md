# React API Data Rendering, Search/Filtering, Router & SPA

## 1. API Data → UI

After fetching data from an API, React can render the returned data dynamically on the UI.

```text
API
 ↓
Fetch data
 ↓
Store / use data
 ↓
Render data on UI
```

## 2. Search and Filtering

Search and filtering help users find relevant records from dynamically loaded data.

```text
API Data
 ↓
Render list
 ↓
Search / Filter
 ↓
Show matching results
```

Real-world example: a Job Dashboard can fetch jobs and let users search by title or keyword and filter the displayed records.

## 3. React Router

React Router is used for navigation between different views/routes in a React application.

Key idea:
- Routes decide which component/view is displayed.
- Navigation changes the displayed view without traditional full-page navigation.

## 4. SPA — Single Page Application

A Single Page Application keeps the React application on one page while different components/views are loaded or updated as the user navigates.

```text
One React Application
        ↓
Different Routes / Views
        ↓
Different Components Render
```

## 5. Practical Application Flow

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

## Real-World Project Mapping — Job Dashboard

- Fetch job data from an API.
- Display jobs dynamically.
- Search jobs by title or keyword.
- Filter jobs by relevant criteria.
- Use React Router for Jobs, Job Details and About views.
- Keep the application as a SPA while changing views/components.

## Interview Points

- API data can be fetched and rendered dynamically in React.
- Search/filtering improves usability of data-driven UIs.
- React Router handles client-side application navigation through routes.
- SPA means the application can update views/components without traditional full-page navigation.
- API fetching, dynamic rendering, search/filtering and routing can be combined in a real React project.

## Important Note

These notes record the practical concepts discussed in today's workshop. Detailed implementation of API fetching, search/filtering and React Router will be practiced as dedicated roadmap topics.