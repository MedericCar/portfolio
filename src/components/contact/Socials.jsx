import './socials.scss'

export default function Socials({ isPhone }) {
  if (isPhone) return null

  return (
    <div className='socials'>
      <a href='https://github.com/MedericCar' title='Github'>
        <i class="fab fa-github"></i>
      </a>
      <a href='mailto: carriatmederic@gmail.com' title='Mail'>
        <i class="far fa-envelope"></i>
      </a>
      <a href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'>
        <i class="fab fa-linkedin"></i>
      </a>
      <a href='https://resume.medericcarriat.com' title='Resume'>
        <i class="far fa-id-card"></i>
      </a>
    </div>
  )
}