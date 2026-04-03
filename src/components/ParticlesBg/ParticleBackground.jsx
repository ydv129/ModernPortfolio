import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./particle-config"

export default function ParticleBackground() {
    const particlesInit = useCallback(async (main) => {
        await loadFull(main);
    }, []);

    return (
        <Particles id="particles" className="particles-css" init={particlesInit} options={ParticleConfig}></Particles>
    );
}