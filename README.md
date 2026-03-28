# Trackly – Job Application Tracker

A React + TypeScript app to manage and track your job applications through every stage of the hiring process.

## Features

- Add, delete, and update job applications
- Track status through the full pipeline: Applied → Interviewing → Offered → Accepted / Rejected
- Filter applications by status
- Dashboard with live statistics and a status distribution chart
- Data persisted in `localStorage` — survives page refreshes

## Tech Stack

- **React 19** with TypeScript
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **Chart.js** / `react-chartjs-2` — pie chart visualization
- **ESLint** — linting with React Hooks and TypeScript rules

## Getting Started

```bash
git clone https://github.com/your-username/trackly.git
cd trackly/frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
frontend/src/
├── components/       # Reusable UI components
│   ├── ApplicationCard.tsx
│   ├── ApplicationForm.tsx
│   ├── Dashboard.tsx
│   └── StatusFilter.tsx
├── constants/        # Shared constants (status colors, labels)
├── hooks/            # Custom React hooks
│   └── useApplications.tsx
├── pages/            # Page-level components
│   └── ApplicationPage.tsx
└── types/            # TypeScript type definitions
    └── Application.ts
```

## What I Learned

Built this project to practice React fundamentals and modern patterns including:
- Separating state logic into custom hooks (`useApplications`)
- TypeScript interfaces and union types for domain modeling
- Lazy state initialization with `useState` for efficient `localStorage` reads
- Component composition and prop-driven UI updates
- Form validation and controlled inputs

## Roadmap

- [ ] Edit application modal (full CRUD)
- [ ] Sort by date, company, or status
- [ ] Text search across applications
- [ ] Export to CSV
- [ ] Unit tests with Vitest
