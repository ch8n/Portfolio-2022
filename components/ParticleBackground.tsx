import { Children } from "react";
import Particles from "react-tsparticles";

const ParticleBackground: React.FC<{}> = () => (
  <Particles
    options={{
      background: {
        color: {
          value: "#020202",
        },
      },
      fullScreen: {
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 20,
          },
          grab: {
            distance: 200,
          },
          repulse: {
            distance: 200,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: {
            value: "#ffffff",
          },
          distance: 150,
          opacity: 0.4,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 600,
            },
          },
          enable: true,
          path: {},
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: true,
          speed: 1,
          spin: {},
        },
        number: {
          density: {
            enable: true,
          },
          value: 160,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: {
            min: 0,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0,
          },
        },
        shape: {
          type: "triangle",
        },
        size: {
          random: {
            enable: true,
          },
          value: {
            min: 1,
            max: 5,
          },
          animation: {
            speed: 4,
            minimumValue: 0.3,
          },
        },
      },
    }}
  />
);

export default ParticleBackground;
