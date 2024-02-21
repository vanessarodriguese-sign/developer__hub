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