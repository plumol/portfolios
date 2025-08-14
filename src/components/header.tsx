export default function Header() {
    return (        
        <nav className='flex justify-between items-center w-full min-h-24 top-0 fixed bg-white z-20 px-4 sm:px-8'>
            <div className="flex-1 flex items-center text-xl inter-font">
                <a href='#intro'>Kyle Lam</a>
            </div>
    
            <div className='flex-1 flex justify-end items-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 text-lg sm:text-xl inter-font'>
                <a href="#about" className='hover:underline'>about</a>
                <a href="#experience" className='hover:underline'>experience</a>
                <a href="#projects" className='hover:underline'>projects</a>
                {/* <a href="playground" className='hover:underline'>fun</a> */}
            </div>
        </nav>
    )
}
