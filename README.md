# Side Hustle Generator

A React application that generates personalized side hustle ideas using OpenAI's GPT-3.5 API based on your skills, background, and goals.

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```
3. Create a `.env` file in the root directory and add your OpenAI API key:

```
VITE_OPENAI_API_KEY=your_api_key_here
```
4. Start the development server:

```bash
npm run dev
```

## Deployment to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to Cloudflare Pages
3. Create a new project and connect your repository
4. Add the following environment variable in Cloudflare Pages:
   - `VITE_OPENAI_API_KEY`: Your OpenAI API key
5. Deploy the site

## Features

- Four customizable input fields for skills, background, ideal customer, and secondary goals
- Integration with OpenAI's GPT-3.5 API
- Modern UI with Tailwind CSS
- Responsive design
- TypeScript for type safety
- Environment variable support for API key security

## Development

- Built with Vite + React
- Uses TypeScript for type safety
- Styled with Tailwind CSS
- OpenAI integration for AI-powered suggestions
