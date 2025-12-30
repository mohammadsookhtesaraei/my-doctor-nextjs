
// components
import Header from "@/components/layout/Header"


interface LayoutProps {
    children:React.ReactNode
};


const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout