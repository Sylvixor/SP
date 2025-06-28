[![Tech used](https://skillicons.dev/icons?i=astro,js,ts,vercel)](https://skillicons.dev)

# SP Homebrew Guide

A homebrew guide for the **Nintendo Switch**

This project is built with [Starlight](https://github.com/withastro/starlight) documentation framework on top of [Astro](https://astro.build/) web framework.

## Table of Contents

- [SP Homebrew Guide](#sp-homebrew-guide)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Folder Structure](#folder-structure)
  - [Contributors](#contributors)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sylvixor/SP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SP
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

or

```bash
npm start
```

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Configuration

The project includes the following configuration files:

- **astro.config.mjs**: Configuration for the Astro project.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Lists the project's dependencies and scripts.
- **.gitignore**: Specifies which files and folders to ignore in version control.

You can modify these files as needed to fit the requirements of your project.

## Folder Structure

Here is an overview of the project structure:

```bash
/
├── public/              # Static assets
├── src/                 # Source files for the website
│   ├── assets/          # Documentation assets
│   ├── content/         # Documentation content
│   │   └── docs/        # Documentation pages
│   ├── fonts/           # Documentation fonts
│   ├── pages/           # Other pages (HTML)
│   └── styles/          # Documentation custom CSS
├── astro.config.mjs     # Astro configuration file
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Lock file for package versions
├── tsconfig.json        # TypeScript configuration
└── .gitignore           # Files to ignore in Git
```

## Contributors
- Sylvixor ([@Sylvixor](https://github.com/Sylvixor)) - Project Owner, Logo, Content, Maintainer
- The Legendary John ([@thelegendaryjohn](https://github.com/thelegendaryjohn)) - Co-owner, Content, Styling, Maintainer

## License

SP © 2024 by Sylvixor is licensed under CC BY-NC-SA 4.0

## Acknowledgements

Special thanks to:

- The Astro team for developing such a great framework.
- All contributors of the [Starlight](https://github.com/withastro/starlight) framework.
- All contributors and libraries used in this project.
