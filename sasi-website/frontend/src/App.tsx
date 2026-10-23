import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Approach from './pages/Approach'
import Founder from './pages/Founder'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'

import { usePath } from './router'

function Page() {
  const path = usePath()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }, [path])

  if (path === '/') {
    return <Home />
  }

  if (path === '/about') {
    return <About />
  }

  if (path === '/services') {
    return <Services />
  }

  if (path === '/approach') {
    return <Approach />
  }

  if (path === '/founder') {
    return <Founder />
  }

  if (path === '/insights') {
    return <Insights />
  }

  if (path.startsWith('/insights/')) {
    return <InsightDetail />
  }

  if (path === '/contact') {
    return <Contact />
  }
if (path.startsWith('/services/')) {
  return <ServiceDetail />
}
  return <Home />
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Page />
      </main>

      <Footer />
    </>
  )
}