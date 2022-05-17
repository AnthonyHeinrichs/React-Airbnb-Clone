import StarImg from '../images/star.png'

export default function Card({img, rating, reviewCount, country, title, price}) {
  return (
    <div className='card'>
      <img src={img} alt='Card' className='card--img' />
      <div className='card--stats'>
        <img src={StarImg} alt='star' className='card--star' />
        <span>{rating}</span>
        <span className='gray'>({reviewCount}) • </span>
        <span className='gray'>{country}</span>
      </div>
      <p>{title}</p>
      <p><span className='card--bold'>From ${price}</span> / person</p>
    </div>
  )
}
