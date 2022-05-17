import HeroPhoto from '../images/group-77.png'

export default function Hero() {
  return (
    <div className='hero--main'>
      <img src={HeroPhoto} alt='Hero Group' className='hero--img' />
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--body'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
