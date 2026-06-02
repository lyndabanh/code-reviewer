# Code Reviewer

An AI-powered code review tool that gives feedback and suggests improvements for your code. Paste in a snippet, select your language, and get a real review back.

## How it works

The React frontend sends your code to a FastAPI backend, which calls the Claude API to analyze it. Claude returns structured feedback and an improved version of your code, which the frontend renders side by side.

## Tech stack

- **Frontend:** React, Vite
- **Backend:** Python, FastAPI, uvicorn
- **AI:** Anthropic Claude API

## Running locally

### Prerequisites
- Node.js
- Python 3.x
- An Anthropic API key ([get one here](https://console.anthropic.com))

### Backend

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` directory:

```
ANTHROPIC_API_KEY=your-key-here
```

Start the server:

```bash
uvicorn main:app --reload --port 8001
```

> Port 8001 is used here to avoid conflicts with other local services. You can use any available port — just update the Vite proxy config in `frontend/vite.config.js` to match.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Usage

1. Select your programming language from the dropdown
2. Paste your code into the editor
3. Click **Review Code**
4. Get feedback and an improved version side by side
