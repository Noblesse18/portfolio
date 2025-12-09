export const myProjects = [
  {
    id: 1,
    title: "Portfolio 3D Interactif",
    description:
      "Portfolio personnel moderne avec des animations 3D et une interface interactive pour présenter mes compétences et projets.",
    subDescription: [
      "Développé avec React et Three.js pour des animations 3D immersives.",
      "Utilisé Vite.js pour des performances optimales et un build rapide.",
      "Interface responsive avec Tailwind CSS pour une expérience utilisateur fluide.",
      "Intégration d'un formulaire de contact avec EmailJS.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio-3d.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Site Web Événementiel - Evencia",
    description:
      "Site web de gestion d'événements permettant la création et la promotion d'événements en ligne.",
    subDescription: [
      "Développé en HTML, CSS et PHP pour le frontend et backend.",
      "Base de données MySQL pour la gestion des événements et utilisateurs.",
      "Interface utilisateur intuitive pour la création et la gestion d'événements.",
      "Système d'inscription et de réservation en ligne.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "PHP",
        path: "/assets/logos/php.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Infrastructure de Monitoring",
    description:
      "Mise en place d'un système de surveillance de serveurs avec Grafana, Prometheus et exporters.",
    subDescription: [
      "Déploiement de Prometheus pour la collecte de métriques.",
      "Configuration de Grafana pour la visualisation des données en temps réel.",
      "Installation de Node Exporter sur serveurs Linux.",
      "Installation de Windows Exporter sur serveurs Windows.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/infrastructure-de-monitoring.png",
    tags: [
      {
        id: 1,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 2,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 3,
        name: "Grafana",
        path: "/assets/logos/grafana.svg",
      },
      {
        id: 4,
        name: "Prometheus",
        path: "/assets/logos/prometheus.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Automatisation avec Ansible",
    description:
      "Automatisation du déploiement de logiciels et configurations sur plusieurs serveurs.",
    subDescription: [
      "Création de playbooks Ansible pour le déploiement automatisé.",
      "Configuration de serveurs Linux (Rocky Linux, Ubuntu, AlmaLinux).",
      "Gestion centralisée des configurations serveur.",
      "Réduction du temps de déploiement et des erreurs humaines.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ansible.png",
    tags: [
      {
        id: 1,
        name: "Ansible",
        path: "/assets/logos/ansible.svg",
      },
      {
        id: 2,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Agents Azure DevOps Self-Hosted",
    description:
      "Mise en place d'agents Azure DevOps auto-hébergés pour l'intégration continue.",
    subDescription: [
      "Configuration d'agents self-hosted sur serveurs locaux.",
      "Intégration avec les pipelines Azure DevOps.",
      "Optimisation des builds et déploiements automatisés.",
      "Gestion des environnements de développement et production.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/asure-self-host.jpg",
    tags: [
      {
        id: 1,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 2,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Infrastructure Réseau Virtuelle",
    description:
      "Création et administration de machines virtuelles avec configuration réseau complète.",
    subDescription: [
      "Déploiement de VMs sous VirtualBox et Hyper-V.",
      "Configuration de services réseau : SSH, FTP, DHCP.",
      "Installation et configuration de PfSense comme pare-feu.",
      "Administration système Linux et Windows Server.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
      {
        id: 2,
        name: "Windows",
        path: "/assets/logos/microsoft.svg",
      },
      {
        id: 3,
        name: "VirtualBox",
        path: "/assets/logos/virtualbox.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Noblesse18",
    icon: "/assets/socials/github-mark-white.svg",
  },
];

export const experiences = [
  {
    title: "Stage - Inside Runway",
    job: "Développeur / Administration Système",
    date: "15/12/2025 - En cours (4 semaines)",
    contents: [
      "Stage de deuxième année BTS SIO option SLAM.",
      "Participation à des projets de développement et d'infrastructure.",
      "Mise en pratique des compétences DevOps et développement.",
    ],
  },
  {
    title: "2ème année BTS SIO option SLAM",
    job: "Spécialisé en Développement Web",
    date: "2025 - 2026",
    contents: [
      "Approfondissement des compétences en développement d'applications.",
      "Formation en alternance au CFA ITIS, Évry-Courcouronnes.",
      "Spécialisation Solutions Logicielles et Applications Métiers.",
    ],
  },
  {
    title: "Stage - GUERFI SOUHILA SAS",
    job: "Création d'Application Mobile de Visite",
    date: "30/06/2025 - 04/08/2025 (6 semaines)",
    contents: [
      "Stage à la Villa Simon Dereure, Évry.",
      "Développement d'une application mobile pour les visites.",
      "Mise en pratique des compétences de développement mobile.",
    ],
  },
  {
    title: "1ère année BTS SIO",
    job: "Administrateur Systèmes et Réseaux & Développeur Web",
    date: "2024 - 2025",
    contents: [
      "Formation au CFA ITIS, Évry-Courcouronnes.",
      "Création de machines virtuelles (Rocky Linux, Ubuntu).",
      "Automatisation de déploiement avec Ansible.",
      "Mise en place de monitoring avec Grafana + Prometheus.",
      "Déploiement d'agents Azure DevOps self-hosted.",
    ],
  },
  {
    title: "Licence Physique-Chimie",
    job: "Université d'Évry Paris-Saclay",
    date: "2018 - 2020",
    contents: [
      "Formation universitaire en sciences.",
      "Développement de compétences analytiques et méthodologiques.",
    ],
  },
  {
    title: "Baccalauréat Scientifique",
    job: "Spécialité Sciences de l'Ingénieur",
    date: "2018 - 2019",
    contents: [
      "Lycée du Parc des Loges.",
      "Spécialisation en Sciences de l'Ingénieur.",
      "Acquisition des bases en mathématiques et physique.",
    ],
  },
];
