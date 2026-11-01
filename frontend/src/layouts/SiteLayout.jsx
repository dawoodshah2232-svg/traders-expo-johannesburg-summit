import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import SiteHeader from '../components/SiteHeader'
import Newsletter from '../components/Newsletter'
import SiteFooter from '../components/SiteFooter'
import FloatButtons from '../components/FloatButtons'
import PageEffects from '../components/PageEffects'

export default function SiteLayout() {
  return (
    <>
      <Topbar />
      <SiteHeader />
      <Outlet />
      <Newsletter />
      <SiteFooter />
      <FloatButtons />
      <PageEffects />
    </>
  )
}
