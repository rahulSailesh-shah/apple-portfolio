# Environment Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
GEMINI_API_KEY=your_api_key_here
```

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

**Important:** Never commit your `.env.local` file to version control. It's already included in `.gitignore`.
