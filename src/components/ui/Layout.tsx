
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"
import { ScrollToTop } from '../scroll'
import Nav from "./Nav"
import DropMenu from "./DropMenu"
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 font-sans max-w-3xl mx-auto">
      <Nav />
      <main className="max-w-4xl mx-auto mt-16 px-10 antialiased ">
        {children}
      </main>
      <div className="flex justify-center">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Layout