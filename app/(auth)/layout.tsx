const Layout=({children} : {children: React.ReactNode})=>{
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-patter bg-center bg-cover bg-fixed">
            {children}
        </div>
    )
}

export default Layout