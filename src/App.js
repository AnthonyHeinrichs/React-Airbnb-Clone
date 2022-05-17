import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import CardImage from './images/image-12.png'

export default function App() {
  //<Hero />

  return (
      <>
        <Navbar />
        <Card
        img={CardImage}
        rating={5.0}
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136} />
      </>
    )
}
