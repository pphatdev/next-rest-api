"use client"

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


export const StarBoard = ({ children,}: Readonly<{ children: React.ReactNode; }>) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {};

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#000",
                repeat: "no-repeat",
                size: "20%",
                position: "50% 50%"
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble"
                    }
                },
                modes: {
                    bubble: {
                        distance: 200,
                        duration: 2,
                        opacity: 0,
                        size: 0,
                        speed: 3
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: { value: "#ffffff" },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: true,
                    speed: 0.3
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 600
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 5
                    },
                    value: { min: 0.3, max: 0.6 }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 1
                }
            }
        }),
        [],
    );

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticles"
                    className="fixed -z-10 inset-0"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
                {children}
            </>
        );
    }

    return <>{children}</>;
}
