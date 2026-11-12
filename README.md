# Streamy React Client

Streamy is a small live streaming website. You sign in with Google, create a stream with a title and a description, and then anyone can open the stream page and watch it live in the browser. This repository is the React front end. It needs two separate servers to do anything useful.

## What it does

- Sign in and out with Google.
- Create, edit and delete your own streams.
- Browse a list of all public streams and watch any of them in the browser.
- Plays live FLV video from a media server using flv.js.

## Tech stack

- React 16, Redux, Redux Thunk, Redux Form
- React Router 5
- Axios for the API calls
- flv.js for live video playback
- Semantic UI for styling (loaded from a CDN)
- Create React App (react-scripts 3.0.1)

## Related projects

The client talks to two backends:

- https://github.com/StreamyLive/API-Database (streams REST API, expected at `http://localhost:3001`)
- https://github.com/StreamyLive/API-RTMP (RTMP ingest and FLV output, expected at `http://localhost:8000`)

## Run it

You need Node.js and npm.

```sh
npm install
cp .env.example .env     # optional, only needed if your servers use other addresses
npm start                # opens http://localhost:3000
```

Start the two backend projects first, otherwise the stream list stays empty.

Settings (see `.env.example`):

- `REACT_APP_API_URL`: base URL of the streams API. Default `http://localhost:3001`.
- `REACT_APP_MEDIA_URL`: base URL of the media server. Default `http://localhost:8000`.

## Build static files

```sh
npm run build
```

The result is in `build/` and can be hosted on any static host. The build needs no secrets, but the page is only useful when `REACT_APP_API_URL` and `REACT_APP_MEDIA_URL` point to running backends when you build. Google sign-in only works on origins that are allowed for the Google client ID used in `src/components/GoogleAuth.js`. If you run your own copy, create your own Google OAuth client ID and put it there.

## Status

Prototype. It works together with the two backend projects, but it is a learning project and the backends are not hosted, so there is no live demo.

## Credits

Built following the Redux and streaming project from Stephen Grider's React course, extended so that visitors can watch other users' public streams. Created from Create React App.
