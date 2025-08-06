'use client'

import {useState, useEffect, useRef} from 'react';

interface TypeWriterProps {
    texts: Array<string>,
    typingSpeed?: number,
    deleteSpeed?: number,
    pauseBeforeDelete?: number,
    pauseBeforeRetype?: number
    loop?: boolean,
    cursor?: boolean
}

function useTypeWriter({
    texts, 
    typingSpeed = 50, 
    deleteSpeed = 50,
    pauseBeforeDelete = 3500, 
    pauseBeforeRetype = 1500,
    loop = true,
    cursor = true
    }: TypeWriterProps) {
        const [currentTextIndex, setCurrentTextIndex] = useState(0);
        const [displayText, setDisplayText] = useState('');
        const [isDeleting, setIsDeleting] = useState(false);
        const [charIndex, setCharIndex] = useState(0);
        const [blink, setBlink] = useState(true);

        const currentText = texts[currentTextIndex] || '';

        useEffect(() => {
            const typingInterval = setTimeout(() => {
                if (!isDeleting) {
                    if (charIndex < currentText.length) {
                        setDisplayText(currentText.substring(0, charIndex+1));
                        setCharIndex(charIndex + 1);
                    } else if (loop) {
                        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
                    }
                } else {
                    if (charIndex > 0) {
                        setDisplayText(currentText.substring(0, charIndex - 1));
                        setCharIndex(charIndex - 1);
                    } else {
                        setTimeout(() => {
                            setIsDeleting(false);
                            setCurrentTextIndex((prev) => 
                                loop ? (prev + 1) % texts.length : prev + 1
                            );
                        }, pauseBeforeRetype);
                        
                    }
                    clearTimeout(typingInterval);
                } 
            }, isDeleting ? deleteSpeed : typingSpeed);

            return () => {
                clearTimeout(typingInterval);
            };
        }, [currentText, currentTextIndex, typingSpeed, deleteSpeed, pauseBeforeDelete, pauseBeforeRetype, charIndex, isDeleting, loop]);
        
        useEffect(() => {
            if (!cursor) return;
            
            const interval = setInterval(() => {
                setBlink(prev => !prev);
            }, 500)

            return () => clearInterval(interval);
        }, [cursor])

        return {displayText, blink}
}

function TypeWriter(text: {texts: Array<string>, loop?: boolean}) {
    const {displayText, blink} = useTypeWriter(text);
    
    return (
        <span className='w-[100%]'>
            {displayText}
            <span className='inline-block w-[0.5ch]'> 
                {blink ? '|' : "\u00A0"}
            </span>
        </span>
    );
}

function Tracking() {
    const trackingRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({x: 0, y: 0});
    const pos = useRef({x: 0, y: 0});
    const timer = useRef({count: 0});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        }

        let interval: NodeJS.Timeout;

        const handleMouseDown = (e: MouseEvent) => {
            interval = setInterval(() => {
                timer.current.count += 1;
                console.log(pos.current.y, mouse.current.y)
                if (timer.current.count === 20) {
                    pos.current.y = mouse.current.y - document.getElementById('tracked')!.getBoundingClientRect().top ;
                    console.log(pos.current.y, mouse.current.y, document.getElementById('tracked')?.getBoundingClientRect().top)
                }
            }, 50);

            
            
        }

        const clearTimers = () => {
            clearInterval(interval);
            timer.current.count = 0;
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', clearTimers);

        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.01;
            pos.current.y -= (pos.current.y) * 0.01;

            if (trackingRef.current) {
                trackingRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
            }

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', clearTimers);
        }
    }, [])

    return (
        <>  
            <div className='relative w-full flex pt-32'>
                <div 
                    ref={trackingRef}
                    id='tracked'
                    className='absolute z-[9999] w-10 h-10 bg-red-600 rounded-full pointer-events-none'
                >
                    <div 
                        ref={barRef}
                        className='fixed left-[-6] w-2 h-10 border-2 '
                    />
                </div>
                
            </div>
            
        </>
    )
}

export default function IntroCard() {
    const items = ['things', 'research', 'analytics', 'infrastructure'];

    return(
        <>
            <div id='intro' className='flex flex-col justify-center items-center w-full h-[70vh] px-4 sm:px-6 lg:px-8'>
                <div id='intro-body' className='flex justify-center items-center max-w-[32rem]'>
                    <div className='text-center'>
                        <p className='text-2xl sm:text-3xl lg:text-3xl inter-font'>KYLE LAM</p>
                        <p className='text-xl sm:text-2xl lg:text-2xl inter-font tracking-tight'>is a software engineer focused on creating platforms that make <TypeWriter texts={items} loop={true}/> easier. </p>
                        <p className='text-base sm:text-lg inter-font'>CS & Biochemistry from Brown University</p>
                        
                    </div>
                </div>
                {/* <Tracking/> */}
                
            </div>
            
        </>

    )
}
