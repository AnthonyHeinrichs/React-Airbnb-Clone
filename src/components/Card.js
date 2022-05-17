import style from './card.module.css'

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className={style.card}>
      { badgeText && <div className={style.cardBadge}>{badgeText}</div> }
      <img src={props.coverImg} alt='Card' className={style.cardImg} />
      <div className={style.cardStats}>
        <img src='/images/star.png' alt='star' className={style.cardStar} />
        <span>{props.stats.rating}</span>
        <span className={style.gray}>({props.stats.reviewCount}) • </span>
        <span className={style.gray}>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className={style.bold}>From ${props.price}</span> / person</p>
    </div>
  )
}
