import './index.css';
import './fonts.css'
import Hero from './components/Hero'
import SafeSpace from './components/safespace';
import FeelingsMatter from './components/FeelingsMatter';
import HowItWorks from './components/HowItWorks';
import PeopleBehind from './components/PeopleBehind';
import Benefits from './components/Benefits';
import RealStories from './components/RealStories';
import LearnGerman from './components/learngerman/LearnGerman';
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Hero/>
    <SafeSpace/>
    <FeelingsMatter />
    <LearnGerman/>
    <HowItWorks/>
    <PeopleBehind/>
    <Benefits/>
    <RealStories/>
    <Footer/>
    </>
  )
}

export default App
