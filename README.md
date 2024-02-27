# Developers Hub

This repository is dedicated to building the Developers Hub.

## Requirements

Ensure you have the following prerequisites installed:

- Node.js version 21.6
- Next.js version 14
- Docker (if you prefer to run the project in a container)

## Running Locally

To run the project locally, follow these steps:

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to access the server.

## Running Local End-to-End (E2E) Tests:

Follow these steps to run E2E tests locally for the project:

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Set up the CYPRESS local variable:

   - Add `CYPRESS` to the `ENV.local` file.
   - For GitHub Actions: Update the repository's GitHub settings by navigating to "Secrets and Variables" under the Actions tab.

3. Start the server:

   ```bash
   npx cypress open
   ```

Ensure you have completed the necessary configurations for both local and GitHub Actions to enable smooth execution of the E2E tests.

## Running as a Docker Container

Alternatively, you can run this project within a Docker container. Follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t developer_hub .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 --rm developer_hub
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to access the server.

Now you can explore the Developers Hub on port 3000, either locally or within a Docker container.

## Deployment

After a commit is pushed to the main branch, the Gitflow process will be initiated. Tests will be run, and if they pass, automatic deployment will be triggered on Vercel. 