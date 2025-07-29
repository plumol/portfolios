export default function Footer() {
    return (
        <div>
            <footer className="flex justify-between p-5 mt-auto min-h-50 border-t-2 mx-16 inter-font">
                <div className='min-w-1/2 self-center'>
                    <p>Made with a six brain cells and lots of caffeine :)</p>
                </div>
                    <div className='flex min-w-1/2 justify-around '>
                    <div className='flex flex-col'>
                        <span className="font-semibold text-2xl mb-2">contact me</span>
                        <a href="https://www.linkedin.com/in/kyle-lam76/" className="text-xl">linkedin</a>
                        <a href='https://github.com/plumol' className="text-xl">github</a>
                        <a className="text-xl">email</a>
                    </div>
                    <div className="flex flex-col mb-2">
                        <span className="font-semibold text-2xl">navigation</span>
                        <a href="#experience" className="text-xl">experience</a>
                        <a href='#project' className="text-xl">projects</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
