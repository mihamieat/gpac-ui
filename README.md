[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# G-Pac UI

G-Pac UI is a web-based user interface designed to visualize servers GPU performance and analytic data and interact with [G-Pac API](https://github.com/mihamieat/gpac-api). G-Pac UI belongs to the G-Pac project.

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- npm (comes with Node.js)

### Install Dependencies

To install the required dependencies, run the following command:

```sh
npm install
```

### Build the Project

To generate the production-ready build, use:

```sh
npm run build
```

### Start the Application

To start the application in production mode, run:

```sh
npm start
```

## Development

### Run the Development Server

For local development, start the server in watch mode:

```sh
npm run dev
```

This will launch the application at [http://localhost:3000](http://localhost:3000).

## Contribution Guidelines

We welcome contributions to improve G-Pac UI. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Submit a pull request for review.

## GitHub Actions Configuration

To ensure seamless CI/CD integration, set the following variables in your GitHub Actions configuration:

| Key                  | Description                       |
| -------------------- | --------------------------------- |
| `REMOTE_HOST`        | Target server IP for deployment   |
| `REMOTE_USER`        | SSH user for the target server    |
| `SSH_PRIVATE_KEY`    | Private SSH key for deployment    |
| `SSH_PUBLIC_KEY`     | Public SSH key for authentication |
| `DOCKERHUB_USERNAME` | Docker Hub username               |
| `DOCKERHUB_TOKEN`    | Docker Hub access token           |
| `API_USER`           | API authentication username       |
| `API_PASSWORD`       | API authentication password       |
| `API_URL`            | API endpoint URL                  |

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
