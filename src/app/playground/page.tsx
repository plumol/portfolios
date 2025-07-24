'use client'
import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'

import Header from "@/components/header";

function Setup() {
    const containerRef = useRef<HTMLDivElement>(null);

    const xSpeed = 0.05;
    const ySpeed = 0.01;
    let xPos = 0;
    let yPos = 0;
    
    useEffect(() => {
        if (typeof window !== 'undefined') { // allows the document to render first with html before rendering
            // scene setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setAnimationLoop( animate );
            document.body.appendChild( renderer.domElement );

            // object intitalization
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );

            scene.add( cube );

            camera.position.z = 10;

            function animate() {
                cube.position.x = xPos;
                cube.position.y = yPos;

                cube.rotation.x += xSpeed;
                cube.rotation.y += ySpeed;

                renderer.render( scene, camera );
            }

            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            const handleMove = (e: KeyboardEvent) => {
                
                switch (e.key) {
                    case "w": 
                        yPos += 0.1;
                        break;
                    
                    case "s": 
                        yPos -= 0.1;
                        break;
                    
                    case "a": 
                        xPos -= 0.1;
                        break;
                    
                    case "d": 
                        xPos += 0.1;
                        break;
                    
                }
                console.log(e)
                
            }

            window.addEventListener('resize', handleResize);
            document.addEventListener('keydown', handleMove)

            return () => { // cleanup to prevent double renders
                window.removeEventListener('resize', handleResize);
                document.removeEventListener('keydown', handleMove)
                document.body.removeChild( renderer.domElement);
                renderer.dispose();
            }
        }

    }, [xSpeed, ySpeed, xPos, yPos]);

    return <div ref={containerRef}></div>
}

export default function Page() {
    Setup();
    return (
        <div id=''>
            <Header/>
            <div id='info' className='absolute top-25 w-[100%] text-center z-10 block text-blue-200'>Description</div>
        </div>
    )
}

