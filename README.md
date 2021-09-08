<div align="center">
  <img alt="Logo" src="src/assets/logo-round.png" width="100" />
</div>
<h1 align="center">
  medericcarriat.com
</h1>
<p align="center">Simple yet fully featured portfolio website.</p>

## ⭐ Features
- Single page app with snap-scroll effect
- 3D animation as homepage
- Timeline to display experiences
- Projects table with tags and filters
- Fully responsive
- Made only with React and Sass, no library

## Getting started

### Requirements
To try the website on your own machine you will need both [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/).

### Setup

In a terminal :
```bash

# Clone the repository
$ git clone https://github.com/MedericCar/portfolio.git
$ cd portfolio

# Install the dependencies
$ npm install

# Launch the development server
$ npm start
```

From there the website should be accessible through http://localhost:3000/.

### Edition

Should one want to modify the data and colors of the website : 
- colors for both light and dark themes are in `src/app.scss`
- data for the timeline and the projects table are stored in separate objects in `src/data.js` (colors used there should be defined in the aforementioned palettes)

## Acknowledgments
Special thanks to [Lama Dev](https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg) for a great [tutorial](https://www.youtube.com/watch?v=7WwtzsSHdpI) which I used as a basis for this project.
