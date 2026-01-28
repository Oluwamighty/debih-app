'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal = ({
    children,
    width = 'fit-content',
    delay = 0,
    className,
    direction = 'up'
}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Copy the current ref to a variable to ensure cleanup uses the same element
        const element = ref.current;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Only animate once
            }
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
        });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(75px)';
                case 'down': return 'translateY(-75px)';
                case 'left': return 'translateX(75px)';
                case 'right': return 'translateX(-75px)';
                default: return 'translateY(75px)';
            }
        }
        return 'translate(0)';
    };

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
            <div
                style={{
                    transform: getTransform(),
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
                }}
            >
                {children}
            </div>
        </div>
    );
};
