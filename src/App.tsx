import './i18n/i18n'
import './assets/scss/style.scss'
import Footer from './components/Footer'
import HomeScreen from './screens/Home'
import { Route, Routes } from 'react-router-dom'
import ProjectScreen from './screens/Project'
import ExpertiseScreen from './screens/Expertise'
import { routes } from './routes'
import SponsorScreen from './screens/Sponsor'
import TeamScreen from './screens/Team'

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<HomeScreen />} />
        <Route path={routes.project} element={<ProjectScreen />} />
        <Route path={routes.expertise} element={<ExpertiseScreen />} />
        <Route path={routes.sponsor} element={<SponsorScreen />} />
        <Route path={routes.team} element={<TeamScreen />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
