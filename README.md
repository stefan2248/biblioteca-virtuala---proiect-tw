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

## How to run

Open `index.html` in a browser. No build step, no server.

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

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project