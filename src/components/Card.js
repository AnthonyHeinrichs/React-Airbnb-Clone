import style from './card.module.css'

export default function Card({img, rating, reviewCount, location, title, price}) {
  return (
    <div className='card'>
      <img src={img} alt='Card' className={style.cardImg} />
      <div className={style.cardStats}>
        <img src='/images/star.png' alt='star' className={style.cardStar} />
        <span>{rating}</span>
        <span className={style.gray}>({reviewCount}) • </span>
        <span className={style.gray}>{location}</span>
      </div>
      <p>{title}</p>
      <p><span className={style.bold}>From ${price}</span> / person</p>
    </div>
  )
}
