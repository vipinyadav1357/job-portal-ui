import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const CursorFollower: React.FC = () => {
    const dotRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        const moveDot = (e: MouseEvent) => {
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                smoothOrigin: true,
                ease: "back.out",
            });
            createSmokeTrail(e.clientX, e.clientY); // Create smoke trail on mouse move
        };
        window.addEventListener("mousemove", moveDot);
        return () => window.removeEventListener("mousemove", moveDot);
    }, []);
    // Create smoke trail effect
    // This function creates a smoke trail effect at the given coordinates
    // It creates a div element, animates it, and removes it after the animation is complete
    // The smoke trail is a small circle that expands and fades out
    // The smoke trail is created using GSAP for animation
    // The smoke trail is styled with a mix-blend mode to create a unique effect
    // The smoke trail is positioned absolutely on the screen
    // The smoke trail is created at the mouse coordinates

    const createSmokeTrail = (x: number, y: number) => {
        const smoke = document.createElement("div");
        smoke.className = "w-1 h-1 bg-white rounded-full fixed pointer-events-none mix-blend-difference opacity-60";
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        smoke.style.zIndex = "49"; // Just behind the main dot
        document.body.appendChild(smoke);

        gsap.to(smoke, {
            x: gsap.utils.random(-10, 10),
            y: gsap.utils.random(-10, 10),
            scale: gsap.utils.random(1, 2),
            opacity: 0,
            duration: 0.5,
            ease: "bounce",
            smoothOrigin: true,
            onComplete: () => smoke.remove(),
        });
    };
    return (
        <div
            ref={dotRef}
            className="w-2 h-2 bg-bright-sun-400 fixed top-0 left-0 pointer-events-none rounded-full z-50 mix-blend-difference shadow-[0_0_15px_5px_rgba(255,223,0,0.6)]"
        />
    );
};
export default CursorFollower;
