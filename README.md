# UoG-OIP

This project is a Hugo + Tailwind CSS starter and boilerplate, named "Hugoplate". It's designed to provide a solid foundation for building static websites with Hugo and styling them using Tailwind CSS.

## Key Features

*   **Multi-Authors:** Supports multiple authors for content.
*   **Search Functionality:** Includes built-in search capabilities.
*   **Dark Mode:** Configurable dark mode (though currently disabled in the provided `data/theme.json`).
*   **Tags & Categories:** Organizes content using tags and categories.
*   **Deployment Ready:** Pre-configured for deployment on Netlify, Vercel, GitHub Actions, GitLab CI, and AWS Amplify.
*   **Responsive Design:** Fully responsive layout.
*   **Markdown Content:** Content is written and managed in Markdown files.

## Tech Stack

*   **Hugo:** Static site generator.
*   **Tailwind CSS v4.0:** Utility-first CSS framework.
*   **Go:** Used for Hugo modules and potentially other Go-based tools.
*   **Node.js:** Used for managing development dependencies and running scripts (e.g., Tailwind CSS compilation, project setup).

## Building and Running

### Prerequisites

*   **Hugo Extended:** v0.144+
*   **Node.js:** v22+
*   **Go:** v1.24+

### Hugo Installation

**macOS:**

1.  **Using Homebrew (Recommended):**
    ```bash
    brew install hugo
    ```
2.  **Manual Installation:**
    *   Download the latest `hugo_extended` version for macOS from the [Hugo Releases page](https://github.com/gohugoio/hugo/releases). Look for a `.tar.gz` file.
    *   Extract the downloaded archive.
    *   Move the `hugo` executable to `/usr/local/bin` (or any directory in your PATH).
    *   Verify the installation: `hugo version`

**Windows:**

1.  **Using Winget (Recommended):**
    ```powershell
    winget install Hugo.Hugo.Extended
    ```
2.  **Manual Installation:**
    *   Download the latest `hugo_extended` version for Windows (64-bit) from the [Hugo Releases page](https://github.com/gohugoio/hugo/releases). Look for a `.zip` file.
    *   Create a new folder (e.g., `C:\Hugo`) and extract the contents of the `.zip` file into it.
    *   Add the `C:\Hugo\bin` directory to your system's PATH environment variable.
    *   Verify the installation: Open a new Command Prompt or PowerShell window and run `hugo version`.

### Project Setup

To set up the project, run the following command:

```bash
npm run project-setup
```

### Install Dependencies

Install all Node.js dependencies:

```bash
npm install
```

### Development Server

To start the development server and view the site locally, run:

```bash
npm run dev
```

This command runs `hugo server`, which typically serves the site at `http://localhost:1313`.

### Creating New Pages

To create a new page, you can use the Hugo CLI:

```bash
hugo new content/english/your-new-page.md
```

This will create a new Markdown file at `content/english/your-new-page.md` with some front matter. You can then edit this file to add your content.

**Folders and Files for New Pages:**

*   **`content/english/`**: This is the primary directory for your Markdown content files.
*   **`archetypes/default.md`**: This file serves as a template for new content. When you run `hugo new`, it uses this archetype to pre-populate your new Markdown file with front matter (like `title`, `date`, `draft`, etc.). You can customize this file to include common fields for your content.

### Compiling and Rendering

To build the production-ready static site, use:

```bash
npm run build
```

This command runs `hugo --gc --minify --templateMetrics --templateMetricsHints --forceSyncStatic`, generating the output in the `public` directory. This `public` directory will contain all the static HTML, CSS, and JavaScript files ready for deployment.

## Development Conventions

*   **Content Management:** In this Hugo project, you will primarily write content in Markdown (`.md`) files instead of raw HTML. Hugo processes these Markdown files and converts them into static HTML pages during the build process. This allows for easier content creation and management. You can find examples of various content elements and their Markdown syntax in:
    *   `content/english/pages/elements.md`
    *   `content/english/blog/post-1.md`
*   **Site Configuration:** Main site settings are in `hugo.toml`.
*   **Site Parameters:** Customizable parameters (logo, favicon, SEO, etc.) are in `config/_default/params.toml`.
*   **Menu Configuration:** Navigation menus are defined in `config/_default/menus.en.toml` (for English).
*   **Styling:** Tailwind CSS is used for styling. The theme's colors and fonts are configured in `data/theme.json`, and processed by `tailwind-plugin/tw-theme.js`.
*   **Code Formatting:** `prettier` is used for code formatting.
