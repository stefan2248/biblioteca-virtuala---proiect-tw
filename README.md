<Two-line description:
A web application for managing a personal collection of books.
Users can keep track of the books they have read or want to read.>
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| <title> | text | required, max 100 chars |
| <read flag> | boolean | toggled from the list, default false |
| <format tag> | fixed values | <fizica>, <digital>, <audiobook> |
| <category> | relation | <fictiune>, <stiinta>, <biografie> |
| user | relation | the owner of the item (from week 11) |


Sample data used across all stages:
1. <Ion>, unread, <fizica>
2. <Moara cu Noroc>, read, <digital>
3. <Enigma Otiliei>, unread, <audiobook>


## How to run
Open `index.html` in a browser. No build step, no server.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| <ChatGPT> | <Understanding project requirements and guidance for Stage 1> |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript