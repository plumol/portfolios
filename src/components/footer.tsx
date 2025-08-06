export default function Footer() {
    return (
        <div>
            <footer className="flex flex-col md:flex-row justify-between p-5 mt-auto min-h-50 border-t-2 mx-4 sm:mx-8 md:mx-16 inter-font text-center md:text-left">
                <div className='self-center mb-4 md:mb-0'>
                    <p>Made with six brain cells and lots of caffeine :)</p>
                </div>
                <div className='flex flex-col sm:flex-row sm:justify-around w-full md:w-1/2'>
                    <div className='flex flex-col mb-4 sm:mb-0'>
                        <span className="font-semibold text-2xl">contact me</span>
                        <a href="https://www.linkedin.com/in/kyle-lam76/" className="text-xl hover:underline">linkedin</a>
                        <a href='https://github.com/plumol' className="text-xl hover:underline">github</a>
                        <a className="text-xl hover:underline">email</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">navigation</span>
                        <a href="#experience" className="text-xl hover:underline">experience</a>
                        <a href='#projects' className="text-xl hover:underline">projects</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
