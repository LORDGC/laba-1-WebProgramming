"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    // Ініціалізація двигуна один раз при завантаженні
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = {
        background: {
            color: { value: "#d5e5fc" }, // Твій фон зі скріншоту
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                grab: {
                    distance: 200,
                    links: { opacity: 0.8 },
                },
                push: { quantity: 4 },
            },
        },
        particles: {
            color: { value: "#4371e3" },
            links: {
                color: "#4371e3",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, area: 500 },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={particlesOptions}
            className="fixed inset-0 -z-10 h-full w-full"
        />
    );
};

export default ParticlesBg;