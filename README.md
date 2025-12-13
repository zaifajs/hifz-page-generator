# Random Quran Page Generator

A React-based web application designed to help students of Hifz (Quran memorization) practice by generating random page numbers from different sections (Ajza) of the Quran. The application provides an interactive, animated interface for selecting categories and generating random page numbers for study sessions.

## 📋 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Categories](#available-categories)
- [Development](#development)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## ✨ Features

- **Category Selection**: Choose from multiple predefined categories based on different Ajza (parts) of the Quran
- **Multiple Page Generation**: Generate 1-5 random page numbers per session
- **Smart Distribution**: Pages are evenly distributed across the selected range to ensure fair coverage
- **Animated Display**: Engaging animation effect when generating random numbers
- **Persistent Storage**: Generated page numbers are saved in browser localStorage to prevent duplicates
- **History Tracking**: View all previously generated page numbers
- **Responsive Design**: Modern, clean UI with smooth animations
- **Reset Functionality**: Clear all generated numbers to start fresh

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd random-qus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## 📖 Usage

1. **Select a Category**: Choose a category from the dropdown menu (e.g., A28, A29, A30, B1, B2, etc.)
2. **Choose Number of Pages**: Select how many random pages you want to generate (1-5)
3. **Generate Pages**: Click the "Start" button to begin the random page generation
4. **View Results**: The generated page numbers will be displayed after the animation completes
5. **View History**: Click "List" to see all previously generated page numbers
6. **Reset**: Click "Reset all" to clear the history and start fresh

### How It Works

- The application divides the selected page range into equal segments based on the number of pages requested
- One random page is selected from each segment to ensure even distribution
- Generated pages are tracked to avoid duplicates
- When all available pages in a category have been generated, the system will notify you to reset

## 📁 Project Structure

```
random-qus/
├── public/                 # Static assets
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/        # React components
│   │   ├── CategorySelector.js
│   │   ├── ControlButtons.js
│   │   ├── GeneratedNumbersList.js
│   │   └── PageNumberDisplay.js
│   ├── hooks/             # Custom React hooks
│   │   ├── useAnimation.js
│   │   ├── useLocalStorage.js
│   │   └── usePageNumberGenerator.js
│   ├── constants.js       # Application constants and sets
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   ├── style.css          # Main stylesheet
│   └── index.css          # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yaml    # CI/CD deployment workflow
├── package.json
└── README.md
```

## 📚 Available Categories

The application includes the following predefined categories (configured for Fundação Islâmica de Palmela - FIP):

| Category | Description | Page Range |
|----------|-------------|------------|
| **A28** | 1 Juz (28) | 542 - 561 |
| **A29** | 1 Juz (29) | 562 - 581 |
| **A30** | 1 Juz (30) | 582 - 604 |
| **B1** | 3 Ajza (1 - 3) | 3 - 61 |
| **B2** | 3 Ajza (28 - 30) | 542 - 604 |
| **C1** | 6 Ajza (1 - 6) | 3 - 101 |
| **C2** | 6 Ajza (25 - 30) | 482 - 604 |
| **D1** | 15 Ajza (1 - 15) | 3 - 281 |
| **D2** | 15 Ajza (16 - 30) | 302 - 604 |
| **E** | Whole Quran | 3 - 604 |

> **Note**: Categories can be customized in `src/constants.js`

## 🛠️ Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

### Code Architecture

The application follows a modular architecture:

- **Components**: Reusable UI components separated by functionality
- **Custom Hooks**: Business logic extracted into reusable hooks
  - `useLocalStorage`: Manages browser localStorage with error handling
  - `useAnimation`: Handles the random number animation effect
  - `usePageNumberGenerator`: Core logic for generating and distributing page numbers
- **Constants**: Centralized configuration for sets, animation settings, and storage keys

### Key Features Implementation

- **Even Distribution Algorithm**: Pages are divided into equal segments, ensuring fair coverage across the entire range
- **Duplicate Prevention**: Generated pages are tracked in localStorage to prevent repetition
- **Error Handling**: Robust error handling for localStorage operations
- **Performance Optimization**: Animation interval optimized for smooth performance

## 🚢 Deployment

### Automated Deployment

The project uses GitHub Actions for automated deployment via SFTP:

1. Push to the `fip` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the production bundle
   - Deploys to the remote server via SFTP

### Manual Deployment

1. Build the production bundle:
```bash
npm run build
```

2. Deploy the `build` folder contents to your web server

### Environment Configuration

The deployment workflow requires the following GitHub Secrets:
- `SFTP_SERVER`: SFTP server address
- `SFTP_USERNAME`: SFTP username
- `SFTP_PASSWORD`: SFTP password
- `SFTP_PORT`: SFTP port number

## 💻 Technologies Used

- **React 18.2.0**: UI library
- **React DOM 18.2.0**: DOM rendering
- **React Scripts 5.0.1**: Build tooling
- **CSS3**: Styling and animations
- **LocalStorage API**: Client-side data persistence
- **GitHub Actions**: CI/CD pipeline

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow React best practices
- Use functional components with hooks
- Maintain component modularity
- Add comments for complex logic
- Ensure error handling

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built for **Fundação Islâmica de Palmela** (FIP - Islamic Foundation of Palmela)
- Designed to support Hifz students in their memorization journey

---

**Version**: 0.2.0
**Last Updated**: 2024
