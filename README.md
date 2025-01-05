# TGJU Price Scraper React App

## Overview
The **TGJU Price Scraper React App** is a clean, modular, and responsive React.js application designed to scrape and display real-time price data from [TGJU.org](https://www.tgju.org/). Built with **Tailwind CSS** for styling and **Framer Motion** for animations, the app provides an interactive and visually appealing experience.

## Features
- **Real-time Data Fetching:** Fetches price data for key items such as:
  - Dollar Price (\$)
  - Gold Mesghal Price (🏅)
  - 18K Gold Price (🥇)
- **Responsive Design:** Optimized for all screen sizes using Tailwind CSS.
- **Smooth Animations:** Powered by Framer Motion for hover and load animations.
- **CORS Handling:** Uses `cors-anywhere` to bypass CORS restrictions.

## Technology Stack
- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **HTTP Requests:** Axios
- **Build Tool:** Vite

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or above)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/aliakbar-zhour/tgju-react-app.git
cd tgju-react-app
```

### Install Dependencies
```bash
npm install
```

## Usage
### Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the app.

### Build for Production
```bash
npm run build
```
The production-ready files will be generated in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## File Structure
```
.
├── public/                 # Static files
├── src/
│   ├── components/
│   │   └── PriceList.jsx  # Component to fetch and display prices
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # Documentation
```

## Configuration
### CORS Handling
This app uses `cors-anywhere` to bypass CORS restrictions. Ensure that the `cors-anywhere` service is running or accessible.

Update the fetch URL in `PriceList.jsx` if you have a custom CORS proxy:
```javascript
const response = await axios.get("https://cors-anywhere.herokuapp.com/https://www.tgju.org/");
```

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Screenshots
### Loading State
Displays a smooth animated loading text while fetching data.

### Price List
Shows the latest prices with hover animations for better user experience.

---
Made with ❤️ using React, Tailwind CSS, and Framer Motion.

