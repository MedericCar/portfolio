import epita from './assets/epita.png'
import ens from './assets/ens.png'
import factonics from './assets/factonics.png'
import siemens from './assets/siemens.png'

const experienceData = [
  {
    company: 'EPITA',
    logo: epita,
    title: 'Bachelor in Computer Science',
    startDate: new Date(2017, 9),
    endDate: new Date(2020, 7),
    description: 'bla bla bla',
    color: '#0000ff',
    position: 'center'
  },
  {
    company: 'EPITA',
    logo: epita,
    title: 'Master in Image Processing',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2022, 7),
    description: 'bla bla bla',
    color: '#0000ff',
    position: 'center'
  },
  {
    company: 'Concordia',
    logo: ens,
    title: 'Volunteering',
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2018, 8, 31),
    description: 'bla bla bla',
    color: '#ffaa00',
    position: 'bottom'
  },
  {
    company: 'ENS - PSL',
    logo: ens,
    title: 'Internship',
    startDate: new Date(2019, 5, 1),
    endDate: new Date(2019, 8, 31),
    description: 'bla bla bla',
    color: '#ff0000',
    position: 'bottom'
  },
  {
    company: 'Factonics',
    logo: factonics,
    title: 'Internship',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2021, 2, 31),
    description: 'bla bla bla',
    color: '#ffff00',
    position: 'bottom'
  },
  {
    company: 'Siemens Healthineers',
    logo: siemens,
    title: 'Software Engineer',
    startDate: new Date(2021, 3, 15),
    endDate: new Date(2022, 2, 31),
    description: 'bla bla bla',
    color: '#00ff00',
    position: 'bottom'
  },
]

export default experienceData