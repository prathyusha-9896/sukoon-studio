import './index.css';
import Hero from './components/Hero'
import SafeSpace from './components/safespace';
import FeelingsMatter from './components/FeelingsMatter';
import HowItWorks from './components/HowItWorks';
import PeopleBehind from './components/PeopleBehind';
import Benefits from './components/Benefits';
import RealStories from './components/RealStories';
import LearnGerman from './components/learngerman/LearnGerman';

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
    </>
  )
}

export default App
