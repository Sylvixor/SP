![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

# SP Homebrew Guide

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

A homebrew guide for the **Nintendo Switch**

This project is built with [Starlight](https://github.com/withastro/starlight) documentation framework on top of [Astro](https://astro.build/) web framework.
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
│   ├── components/      # Astro components
│   ├── layouts/         # Layout templates
│   └── pages/           # Website pages
├── astro.config.mjs     # Astro configuration file
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Lock file for package versions
├── tsconfig.json        # TypeScript configuration
└── .gitignore           # Files to ignore in Git
```

## License

This project is licensed under the terms of the **MIT License**.

## Acknowledgements
Special thanks to:
- The Astro team for developing such a great framework.
- All contributors of the [Starlight](https://github.com/withastro/starlight) framework.
- All contributors and libraries used in this project.
