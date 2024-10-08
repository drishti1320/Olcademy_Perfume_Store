/* eslint-disable react/prop-types */
import HeroSection from "./subcomponents/HeroSection"
import Perfumes from "./subcomponents/Perfumes"

const Home = ({perfumes}) => {
  return (
    <>
     <HeroSection/>
     <Perfumes perfumes={perfumes}/>
    </>
  )
}

export default Home;
