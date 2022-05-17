import style from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={style.nav}>
      <img src='/images/airbnb-logo.png' alt='Airbnb Icon' className={style.navIcon} />
    </div>
  )
}
