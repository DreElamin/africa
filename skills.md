---
name: webapp-development
description: Guidelines and best practices for creating modern React/TypeScript applications. Use this when developing web components, pages, or features.
argument-hint: "[file path or task description]"
---
# Web Application Development Guidelines

This skill provides the agent with best practices for frontend web development, focusing on React with TypeScript, modern patterns, and performance optimization.

## When to use this skill
Use this skill when you need to:
*   Create new components or pages for a web application
*   Implement data fetching, styling, or routing logic
*   Debug or refactor existing frontend code
*   Ensure performance and accessibility best practices are followed

## Core Principles
*   **Modern React Patterns**: Utilize React Suspense, lazy loading, and functional components.
*   **TypeScript Best Practices**: Ensure strong typing throughout the codebase.
*   **Styling**: Use a specific styling solution (e.g., Tailwind CSS or MUI v7) for consistency.
*   **File Organization**: Organize code by feature directory for scalability.
*   **Performance**: Optimize performance using techniques like code splitting and image optimization.

## Step-by-Step Procedures

1.  **Plan the component**: Identify the user flow and required data.
2.  **Create a new file**: Place the new file in the appropriate `src/features/` directory.
3.  **Implement**: Write production-grade code focusing on functionality and visual appeal.
4.  **Test**: Reference the testing skill to create relevant Playwright tests.

## References and Resources
*   [Test template](./test-template.js) - A standard template for Playwright tests.
*   [Design System Docs](../../docs/design-system.md) - Guidelines for visual design and components.

## Best practices
*   Use data-testid attributes for dynamic content.
*   Keep components small, independent, and reusable.
*   Document complex logic clearly with comments.
