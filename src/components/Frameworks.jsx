import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Compétences principales - DevOps & Systèmes
  const mainSkills = [
    "linux",
    "docker",
    "ansible",
    "grafana",
    "prometheus",
    "azure",
    "github",
    "git",
  ];
  
  // Compétences secondaires - Développement & Outils
  const secondarySkills = [
    "html5",
    "css3",
    "javascript",
    "php",
    "react",
    "microsoftsqlserver",
    "virtualbox",
    "visualstudiocode",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {mainSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {secondarySkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
