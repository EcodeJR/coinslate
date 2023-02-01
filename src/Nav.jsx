const Nav = () => {
    return ( 
        <nav className="w-full h-fit flex items-center justify-between lg:px-10 py-5">
            <div className="flex items-center justify-around w-[40%] font-bold">
                <h1 className="text-2xl font-bold mx-5">COINSLATE<span className="text-red-500">!</span></h1>
                <a href="/">Explore</a>
                <a href="/">Trending</a>
                <a href="/">Price</a>
                <a href="/">Current</a>
            </div>
            <hr className="w-[50vw] border-none bg-gray-300/50 h-[2px]" />
        </nav>
     );
}
 
export default Nav;