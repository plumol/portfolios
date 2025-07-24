export default function Header() {
    return (
        <nav className='flex justify-around items-center w-[100%] min-h-24 top-0 fixed bg-white z-20'>
            <div className="min-w-1/2 flex items-center text-xl inter-font">
                <div className='ml-8 pl-8'>Kyle Lam</div>
            </div>
    
            <div className='flex min-w-1/2 justify-end items-center mr-8 pr-12 gap-20 text-xl inter-font'>
                <a href="#about">about</a>
                <a href="#experience">experience</a>
                <a href="#projects">projects</a>
                <a href="playground">fun</a>
            </div>
        </nav>
    )
}
