# Context Turntable

A compact retro-style standalone music player built with plain HTML, CSS, and JavaScript.

## Features

- Local playlist playback (`mp3` files)
- Transport controls: Previous, Play/Pause, Next
- Auto-play next track on song end
- Window controls: Minimize, Maximize, Close, Reopen
- Compact one-column layout with scrollable playlist

## Run

Open `context-turntable.html` in your browser.

## Add Songs

1. Put audio files in the `audio/` folder.
2. Add each track to the `playlist` array in `context-turntable.js`:

```js
{
  title: "Song Title",
  file: "audio/your-file-name.mp3",
}
```

## Project Files

- `context-turntable.html` - UI structure
- `context-turntable.css` - Retro theme and layout
- `context-turntable.js` - Player logic and playlist
