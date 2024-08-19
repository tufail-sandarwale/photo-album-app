# Photo Album App

A simple React application that allows users to browse and search through a list of photos. The app fetches data from a public API, displays thumbnails with titles, and includes a search feature that highlights matching words in photo titles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)


## Features

- **Photo List**: Displays a list of photos with thumbnails, titles, and links to the larger version of the photo.
- **Search Functionality**: Allows users to search for specific words in photo titles. The matching word in the title is italicized.
- **Responsive Design**: The application is responsive and works on different screen sizes.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/tufail-sandarwale/photo-album-app.git
    cd photo-album-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

- Once the application is running, you will see a list of photos fetched from a public API.
- Use the search box to filter photos by their title. The matching words in the title will be italicized.

## Testing

This project uses Jest and React Testing Library for unit testing.

### Setting Up Testing Environment

1. **Ensure dependencies are installed**:
   
    If you haven't installed Jest and React Testing Library, you can do so by running:

    ```bash
    npm install --save-dev @testing-library/react @testing-library/jest-dom jest
    ```

2. **Running Tests**:

    To run the test cases, use the following command:

    ```bash
    npm test
    ```

    This will start Jest, and it will run all the test cases in the project.


