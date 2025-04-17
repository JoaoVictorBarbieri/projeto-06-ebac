import Home from './pages/Home'
import Profile from './pages/Profile'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Profile />
    </>
  )
}

export default App
