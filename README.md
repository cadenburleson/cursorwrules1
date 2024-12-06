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

## RULES USED

[[Readability and Maintainability]]: Prioritize code that’s easy to read and maintain. Employ best practices such as the DRY principle to reduce redundancy. Explain why these practices are beneficial, and how they make the codebase more efficient and easier to maintain.

Example: When suggesting code optimizations, provide a brief comparison to show how the optimized version improves upon the original in terms of readability and maintenance.

[[Use TypeScript and Tailwind CSS by Default]]: Unless specified otherwise, use TypeScript for logic and Tailwind CSS for styling. Highlight TypeScript’s static typing advantages for minimizing runtime errors and Tailwind CSS’s utility-first approach for fast, maintainable designs.

Example: For a user interface component, present a TypeScript interface to define its props clearly and show how Tailwind CSS classes can be applied for styling.

[[Accessibility as a Priority]]: Embed accessibility features, including ARIA roles and attributes, to make applications inclusive. Detail the purpose of each accessibility enhancement.

Example: When adding an image, include an explanation on using alt text and ARIA roles to improve accessibility.

[[Precision in Meeting User Requirements]]: Adhere strictly to the user’s specifications. Demonstrate a clear understanding of the request before proceeding.

[[Strategy]]: Summarize the user’s requirements in your own words to confirm understanding, then detail your approach in pseudocode, emphasizing the inclusion of all requested features.

[[Strategic Planning with Pseudocode]]: Begin with a comprehensive plan expressed in pseudocode. Detail every logical step before coding, ensuring a solid blueprint guides the development process.

Example: Provide a pseudocode outline for a requested feature, breaking down complex logic into manageable steps.

[[Commitment to Code Quality]]: Produce code that is up-to-date, functional, secure, and efficient. Prioritize performance while ensuring the code is bug-free and adheres to security best practices.

Example: When writing a function, briefly discuss its security implications or efficiency considerations.

[[Valuing Readability Over Performance]]: Favor clear and understandable code, addressing any performance trade-offs with reasoned explanations.

[[Strategy]]: If choosing a less efficient algorithm for clarity, explain why this choice benefits maintainability and understanding.

[[Completeness in Functionality]]: Ensure all requested features are fully implemented without overlooking any aspect of the user’s request.

[[Strategy]]: Use a checklist to confirm all features have been addressed in your solution.

[[Avoiding Incomplete Work]]: Deliver solutions without TODOs, placeholders, or unfinished segments. Guarantee that each part of the code is ready for integration.

Example: Before concluding, review the code to ensure no sections are marked with TODOs or placeholders.

[[Thorough Code Verification]]: Conduct a final review to confirm the code is complete and meets all requirements. The solution should be ready for deployment without the need for further adjustments.

Example: Provide a summary of key points or components included in the solution, ensuring nothing has been missed.

[[Proper Naming and Imports]]: Ensure all necessary imports are included and that naming conventions are followed for clarity and easy maintenance.

Example: When introducing a new component or function, explain the reasoning behind its name and the choice of imports.

[[Conciseness in Communication]]: Aim for clarity and efficiency in both code and explanations. Avoid unnecessary elaboration to keep solutions straightforward and understandable.

Example: When explaining a concept or solution, use bullet points or numbered steps to convey information clearly and succinctly.
