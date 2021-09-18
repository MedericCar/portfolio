import './navArrows.scss'

const Left = ({ activePage, setActivePage }) => {
  let idx = 0
  for (let i = 0; i < activePage.length; i++) {
    if (activePage[i]) {
      idx = i
    }
  }
  
  let href = ''
  switch (idx) {
    case 0:
      return null
    case 1:
      href = '#intro'
      break
    case 2:
      href = '#experience'
      break
    case 3:
      href = '#projects'
      break
    default:
      console.log('Should not be happening')
  }
  console.log('left', href)

  const newActivePage = [false, false, false, false]
  newActivePage[idx-1] = true

  return (
    <div className='left'>
      <a href={href} onClick={() => setTimeout(() => setActivePage(newActivePage), 100)}>
        <i class="fas fa-chevron-left"></i>
      </a>
    </div>
  )
}

const Right = ({ activePage, setActivePage }) => {
  let idx = 0
  for (let i = 0; i < activePage.length; i++) {
    if (activePage[i]) {
      idx = i
    }
  }

  console.log(activePage)
  let href = ''
  switch (idx) {
    case 0:
      return null
    case 1:
      href = '#projects'
      break
    case 2:
      href = '#contact'
      break
    case 3:
      return null
    default:
      console.log('Should not be happening')
  }

  console.log('right', href)
  const newActivePage = [false, false, false, false]
  newActivePage[idx+1] = true

  return (
    <div className='right'>
      <a href={href} onClick={() => setTimeout(() => setActivePage(newActivePage), 100)}>
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  )

}

export default function NavArrows({ activePage, setActivePage, isPhone }) {
  if (isPhone) return null

  return (
    <div className='nav-arrows'>
      <Left activePage={activePage} setActivePage={setActivePage}/>
      <Right activePage={activePage} setActivePage={setActivePage}/>
    </div>
  )
}