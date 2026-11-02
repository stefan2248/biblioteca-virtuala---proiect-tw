# Biblioteca Virtuală

A web application for managing a personal collection of books.
Users can keep track of the books they have read or want to read.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars |
| read | boolean | toggled from the list, default false |
| format | fixed values | fizica, digital, audiobook |
| category | relation | fictiune, stiinta, biografie |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:

1. Ion, unread, fizica
2. Moara cu Noroc, read, digital
3. Enigma Otiliei, unread, audiobook


## Stage 2: data logic

Plain JavaScript, no DOM. `carti.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | Understanding project requirements and guidance for Stages 1 and 2 |

Details per stage: see the `ai-log/` folder.


## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## How to run
```bash
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (http://localhost:5173).

## Stage 4: React components

The application uses reusable React components:
- `App.jsx` - main application component.
- `CarteList.jsx` - displays the list of books.
- `CarteCard.jsx` - displays each book with its title, format and reading status.

The interface is styled using `App.css`.

## Stage 5: State and events

The application uses React `useState` to manage the book collection and the selected theme.

Implemented features:
- Mark books as read or unread using a checkbox.
- Delete books from the collection.
- Automatically update the total number of books and unread books.
- Switch between light and dark themes.

The book list is updated without reloading the page.

## Stage 6: data from a mock API

The book list is served by json-server from `db.json`. The app fetches the books on load using `useEffect` and displays a loading message or an error message when necessary.

### How to run

Run the following commands in two separate terminals, inside the `frontend` folder:

```bash
npm run api
```

```bash
npm run dev
```

The API runs at `http://localhost:3001/carti` and the React application at `http://localhost:5173`.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: React components
- [x] Stage 5: State and events
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [ ] Stage 7: form and validation