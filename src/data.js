import epita from './assets/epita.png'
import ens from './assets/ens.png'
import factonics from './assets/factonics.png'
import siemens from './assets/siemens.png'
import concordia from './assets/concordia.png'

const experienceData = [
  {
    company: 'EPITA',
    logo: epita,
    title: 'Bachelor in Computer Science',
    startDate: new Date(2017, 9),
    endDate: new Date(2020, 7),
    description: [
      'Courses in programming, mathematics, algorithmics, computer architecture.',
      'Tags : OCaml, Python, C, C++, Unix'
    ],
    color: '#0000ff',
    position: 'center'
  },
  {
    company: 'EPITA',
    logo: epita,
    title: 'Master in Image Processing and Computer Graphics',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2022, 7),
    description: [
      'Courses in ',
      'Tags: C++, Python, OpenGL'
    ],
    color: '#0000ff',
    position: 'center'
  },
  {
    company: 'Concordia',
    logo: concordia,
    title: 'Volunteering',
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2018, 8, 31),
    description: [
      'Renovation of Latresnes\' church with 10 other international students.'
    ],
    color: '#ffaa00',
    position: 'bottom'
  },
  {
    company: 'Tampere University',
    logo: epita,
    title: 'Exchange semester',
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 5),
    description: [
      'Courses in Machine Learning, signal compression and Software Engineering.',
      '3rd out of 105 teams at the university\'s Kaggle competition.'
    ],
    color: '#aa00ff',
    position: 'top'
  },
  {
    company: 'ENS - PSL',
    logo: ens,
    title: 'Internship',
    startDate: new Date(2019, 5, 1),
    endDate: new Date(2019, 8, 31),
    description: [
      'Benchmarking of the DiViMe speech processing tool.',
      'Implementation of the automation word count estimation algorithm (Räsänen, Okko, et al., 2019).',
      'Tags: MATLAB, Python, Docker'
    ],
    color: '#ff0000',
    position: 'bottom'
  },
  {
    company: 'Factonics',
    logo: factonics,
    title: 'Internship',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2021, 2, 31),
    description: [
      'Improvement of Factonics\' ML deployment platform.',
      'Development of a Named-entity recognition program specific to the French health system.',
      'PoC for a newsletter recommendation system on behalf of BPI France.',
      'Tags: Python, AWS, Docker'
    ],
    color: '#ffff00',
    position: 'bottom'
  },
  {
    company: 'Siemens Healthineers',
    logo: siemens,
    title: 'Software Engineer',
    startDate: new Date(2021, 3, 15),
    endDate: new Date(2022, 2, 31),
    description: [
      'bla bla bla',
      ''
    ],
    color: '#00ff00',
    position: 'bottom'
  },
]

export default experienceData