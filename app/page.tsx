import { Projects } from './(pages)/home/components'
import Hero from './(pages)/home/components/Hero'
import Profile from './(pages)/home/components/Profile'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Profile />
    </div>
  )
}
