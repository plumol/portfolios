"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    const fillerRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const delay = 0.1;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const shrinkCursor = () => {
            if (outlineRef.current) {
                outlineRef.current.classList.remove('w-8', 'h-8');
                outlineRef.current.classList.add('w-4', 'h-4')
            }
            if (fillerRef.current) {
                fillerRef.current.classList.remove("opacity-0", "scale-0");
                fillerRef.current.classList.add("opacity-100", "scale-100");
            }
        }

        const expandCursor = () => {
            if (outlineRef.current) {
                outlineRef.current.classList.remove('w-4', 'h-4');
                outlineRef.current.classList.add('w-8', 'h-8')
            }
            if (fillerRef.current) {
                fillerRef.current.classList.remove("opacity-100", "scale-100");
                fillerRef.current.classList.add("opacity-0", "scale-0");
            }
        }

        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
                shrinkCursor();
            }
            // if (outlineRef.current) {
            //     outlineRef.current.classList.remove("border-red-600");
            //     outlineRef.current.classList.add("border-emerald-700");
            // }
            // if (fillerRef.current) {
            //     fillerRef.current.classList.remove("bg-red-600");
            //     fillerRef.current.classList.add("bg-emerald-700");
            // }
            
        }

        const handleMouseOut = (e: MouseEvent) => {
            console.log(e.target)
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
                expandCursor();
                // if (outlineRef.current) {
                //     outlineRef.current.classList.remove("border-emerald-700");
                //     outlineRef.current.classList.add("border-red-600");
                // }
                // if (fillerRef.current) {
                //     fillerRef.current.classList.remove("bg-emerald-700");
                //     fillerRef.current.classList.add("bg-red-600");
                // }
            }
            
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", shrinkCursor);
        document.addEventListener("mouseup", expandCursor);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        const animate = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * delay;
            pos.current.y += (mouse.current.y - pos.current.y) * delay;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }

            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", shrinkCursor);
            document.removeEventListener("mouseup", expandCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9999] w-1 h-1 bg-red-600 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={outlineRef}
                className="fixed top-0 left-0 z-[9998] w-8 h-8 border-1 border-red-600 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
            >
                <div 
                    ref={fillerRef}
                    className="w-full h-full bg-red-600  opacity-0 scale-0 rounded-full transition-all duration-200 ease-out"
                />
            </div>
        </>
    );
}
