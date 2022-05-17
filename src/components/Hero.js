import style from './hero.module.css'

export default function Hero() {
  return (
    <div className={style.hero}>
      <img src='/images/photo-grid.png' alt='Hero Group' className={style.heroImg} />
      <h1 className={style.heroHeader}>Online Experiences</h1>
      <p className={style.heroText}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
