# Editor.js Demo

A simple demonstration of the Editor.js block-style editor with multiple plugins and tools.

## Features

- 📝 Block-style editing with clean JSON output
- 🎨 Beautiful UI with gradient background
- 🔧 Multiple editor tools:
  - Headers (H1-H6)
  - Lists (ordered & unordered)
  - Checklists
  - Quotes
  - Code blocks
  - Tables
  - Embeds (YouTube, Vimeo, Twitter)
  - Warning blocks
  - Text markers & inline code
  - Link tool

## Installation

Install all dependencies:

```bash
npm install
```

## Running the Demo

Start the development server:

```bash
npm start
```

Then open your browser and navigate to:
```
http://localhost:8008
```

## Usage

- Click the **+** button to add new blocks
- Use the toolbar to format text and add inline styles
- Click **Save Data** to see the JSON output
- Click **Load Sample** to load example content
- Click **Clear Editor** to start fresh

## Editor.js Tools Included

- **Header**: Create headings (H1-H6)
- **List**: Ordered and unordered lists
- **Checklist**: Todo-style checklists
- **Quote**: Beautiful quote blocks
- **Code**: Syntax-highlighted code blocks
- **Table**: Create and edit tables
- **Warning**: Warning/info blocks
- **Marker**: Highlight text
- **Inline Code**: Inline code formatting
- **Embed**: Embed videos and social media content
- **Link**: Auto-fetch link previews

## Project Structure

```
editorjs-demo/
├── index.html      # Main HTML file with Editor.js setup
├── server.js       # Simple HTTP server
├── package.json    # NPM dependencies
└── README.md       # This file
```

## Learn More

- [Editor.js Documentation](https://editorjs.io/)
- [Editor.js GitHub](https://github.com/codex-team/editor.js)
- [Available Tools](https://github.com/editor-js)

## License

MIT
