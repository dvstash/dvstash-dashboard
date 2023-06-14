type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-od_black">
      {children}
    </div>
  )
}

export default Layout