import epita from './assets/epita.png'
import ens from './assets/ens.png'
import factonics from './assets/factonics.png'
import siemens from './assets/siemens.png'
import concordia from './assets/concordia.png'
import pathtracer from './assets/pathtracer.png'

const experienceData = [
  {
    company: 'EPITA',
    logo: epita,
    title: 'Bachelor in Computer Science',
    startDate: new Date(2017, 9),
    endDate: new Date(2020, 7),
    description: [
      <p>Courses in programming, mathematics, algorithmics, computer architecture.</p>,
      <p>Tags : <b>OCaml, Python, C, C++, Unix</b></p>
    ],
    color: 'var(--blue)',
    position: 'center'
  },
  {
    company: 'Concordia',
    logo: concordia,
    title: 'Volunteering',
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2018, 8, 31),
    description: [
      <p>Renovation of Latresnes' church with 10 other international students.</p>
    ],
    color: 'var(--red)',
    position: 'bottom'
  },
  {
    company: 'Tampere University',
    logo: epita,
    title: 'Exchange semester',
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 5),
    description: [
      <p>Courses in Machine Learning, Signal Compression and Software Engineering.</p>,
      <p><b>3rd out of 105 teams</b> at the university's <u><a href='https://www.kaggle.com/c/robotsurface/overview'>Kaggle competition</a></u>.</p>
    ],
    color: 'var(--purple)',
    position: 'top'
  },
  {
    company: 'ENS - PSL',
    logo: ens,
    title: 'Internship',
    startDate: new Date(2019, 5, 1),
    endDate: new Date(2019, 8, 31),
    description: [
      <p>Benchmarking of the <u><a href='https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime'>DiViMe</a></u> speech processing tool.</p>,
      <p>Implementation of the <u><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></u> (Räsänen, Okko, et al., 2019).</p>,
      <p>Tags: <b>MATLAB, Python, Docker</b></p>
    ],
    color: 'var(--yellow)',
    position: 'bottom'
  },
  {
    company: 'EPITA',
    logo: epita,
    title: 'Master in Image Processing and Computer Graphics',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2022, 7),
    description: [
      <p>Courses in Image Processing, Computer Vision and Computer Graphics.</p>,
      <p>Tags: <b>C++, Python, OpenGL, CUDA</b></p>
    ],
    color: 'var(--blue)',
    position: 'center'
  },
  {
    company: 'Factonics',
    logo: factonics,
    title: 'Internship',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2021, 2, 31),
    description: [
      <p>Improvement of Factonics' <b>ML deployment</b> platform.</p>,
      <p>Development of a <b>Named-entity recognition </b>program specific to the French health system.</p>,
      <p>PoC for a <b>newsletter recommendation</b> system on behalf of <i>BPI France</i>.</p>,
      <p>Tags: <b>Python, AWS, Docker</b></p>
    ],
    color: 'var(--orange)',
    position: 'bottom'
  },
  {
    company: 'Siemens Healthineers',
    logo: siemens,
    title: 'End-of-study project',
    startDate: new Date(2021, 3, 15),
    endDate: new Date(2022, 2, 31),
    description: [
      <p>Research of a web based solution for <b>real-time transparency</b>.</p>,
      <p>Implementation of <u><a href='https://luebke.us/publications/StochasticTransparency_I3D2010.pdf'>Stochastic Transparency</a></u> (Enderton, Eric, et al., 2010) with ThreeJS.</p>,
      <p>Tags: <b>Typescript, GLSL, ThreeJS</b></p>
    ],
    color: 'var(--green)',
    position: 'bottom'
  },
]

const projectsData = [
  {
    title: 'Path tracer',
    image: pathtracer,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering.
        Parallelized on CPU and optimized with Bounding Volume Hierarchy.
      </p>
    ),
    tags: [
      {
        text: 'C++',
        color: 'var(--blue)',
        bgColor: 'var(--bg-blue)',
      },
    ]
  },
  {
    title: 'Path tracer',
    image: pathtracer,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering.
        Parallelized on CPU and optimized with Bounding Volume Hierarchy.
      </p>
    ),
    tags: [
      {
        text: 'C++',
        color: 'var(--blue)',
        bgColor: 'var(--bg-blue)',
      },
    ]
  }
]

export { experienceData, projectsData }