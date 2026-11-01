import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import { AuthProvider, RequireAdmin } from './admin/auth'
import AdminLayout from './admin/AdminLayout'
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'
import About from './pages/About'
import Agenda from './pages/Agenda'
import Awards from './pages/Awards'
import Blog from './pages/Blog'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Exhibitors from './pages/Exhibitors'
import Faq from './pages/Faq'
import Floorplan from './pages/Floorplan'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Portal from './pages/Portal'
import Privacy from './pages/Privacy'
import Register from './pages/Register'
import Speakers from './pages/Speakers'
import Sponsors from './pages/Sponsors'
import Terms from './pages/Terms'
import Tickets from './pages/Tickets'
import Travel from './pages/Travel'
import Venue from './pages/Venue'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="awards" element={<Awards />} />
        <Route path="blog" element={<Blog />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="exhibitors" element={<Exhibitors />} />
        <Route path="faq" element={<Faq />} />
        <Route path="floorplan" element={<Floorplan />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="login" element={<Login />} />
        <Route path="portal" element={<Portal />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="register" element={<Register />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="terms" element={<Terms />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="travel" element={<Travel />} />
        <Route path="venue" element={<Venue />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="admin/*" element={<AuthProvider><AdminRoutes /></AuthProvider>} />
    </Routes>
  )
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route element={<RequireAdmin />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}
