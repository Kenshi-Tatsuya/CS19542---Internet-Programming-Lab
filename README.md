# Fervis Horizon

Fervis Horizon is an innovative web application that integrates AI-powered emotional recognition using the EVI model from Hume AI. The project leverages Hume's capabilities to analyze and interact with users in real-time, providing a unique experience in the fitness or interaction domain.

## Features

- **AI Integration**: Powered by **Fervis**, an AI built using Hume AI's **EVI model**, Fervis Horizon can recognize and respond to users' emotions dynamically.
- **Interactive User Experience**: The project focuses on making the interactions as natural as possible using advanced emotional analysis.
- **Seamless Integration**: The AI is integrated into the system with real-time feedback, leveraging Hume AI’s powerful APIs.

## Technologies Used

- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Node.js, Express
- **AI Model**: **EVI** by Hume AI
- **AI Integration**: Hume AI’s emotional analysis APIs
- **Database**: MongoDB / MySQL (based on your backend)

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (for running JavaScript on the backend)
- **Git** (for version control)
- **React.js** (for the frontend)
- **Next.js** (for server-side rendering and routing)
- **MongoDB** or **MySQL** (for database management)
- An account with **Hume AI** (to generate API keys)

### Steps to Set Up the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-github-username/Fervis-Horizon.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Fervis-Horizon
   ```

3. **Install the dependencies**:
   Run the following command to install the required packages for React and Next.js:
   ```bash
   npm install
   ```

4. **Create an `.env` file**:
   In the root of the project directory, create an `.env` file with the following environment variables:

   ```bash
   HUME_API_KEY=<your-hume-ai-key>
   ```

   You need to obtain your API key from [Hume AI](https://hume.ai/). Follow the instructions below to get your key.

5. **Generate Hume AI API Key**:
   - Sign up or log in to [Hume AI](https://hume.ai/).
   - Navigate to the **API Keys** section in your account dashboard.
   - Generate a new API key, and copy it.
   - Paste the key into your `.env` file under `HUME_API_KEY`.

6. **Run the Project**:
   Start the development server with Next.js:

   ```bash
   npm run dev
   ```

7. **Access the App**:
   Once the server is running, you can access the app at:
   ```
   http://localhost:3000
   ```

### Project Structure

- `/Next/`: Contains the Next.js files for the frontend.
- `/src/components/`: React components used across the application.
- `/src/assets/`: Images, videos, and fonts used in the project.
- `.env`: Contains your API keys and environment variables.
- `/utils/`: Contains utility functions for interacting with the Hume AI API.

### Using Fervis

Once the setup is complete, **Fervis**, the AI, will be ready to interact with users. The EVI model, provided by Hume AI, allows Fervis to recognize emotions from input data (voice, facial expressions, etc.) and respond accordingly.

Fervis can perform tasks such as:
- Analyzing user emotions in real-time.
- Responding with appropriate actions based on emotion recognition.
- Providing a seamless and intelligent interaction layer for the users.

### Contribution Guidelines

If you would like to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
