# 📖 Documentation Technique - Portfolio React

**Auteur :**   
**Date :** Décembre 2025  
**Technologies :** React, Vite, Three.js, Tailwind CSS, Framer Motion

---

## 📌 Table des Matières

1. [Présentation du Projet](#1-présentation-du-projet)
2. [Stack Technique](#2-stack-technique)
3. [Architecture du Projet](#3-architecture-du-projet)
4. [Structure des Fichiers](#4-structure-des-fichiers)
5. [Les Sections du Site](#5-les-sections-du-site)
6. [Composants Clés - Analyse Technique](#6-composants-clés---analyse-technique)
7. [Gestion des Données](#7-gestion-des-données)
8. [Animations et Effets Visuels](#8-animations-et-effets-visuels)
9. [Intégration 3D avec Three.js](#9-intégration-3d-avec-threejs)
10. [Flux RSS - Veille Technologique](#10-flux-rss---veille-technologique)
11. [Formulaire de Contact avec EmailJS](#11-formulaire-de-contact-avec-emailjs)
12. [Configuration Tailwind CSS](#12-configuration-tailwind-css)
13. [Optimisation des Performances](#13-optimisation-des-performances)
14. [Déploiement](#14-déploiement)
15. [Commandes Utiles](#15-commandes-utiles)

---

## 1. Présentation du Projet

### 1.1 Qu'est-ce que c'est ?

Ce projet est un **portfolio personnel interactif** développé avec les technologies web modernes. Il sert de CV en ligne pour présenter :

- Les informations personnelles et le profil professionnel
- Les compétences techniques (DevOps, Systèmes, Développement)
- Les expériences et formations
- Les projets réalisés
- Une veille technologique automatisée
- Un formulaire de contact fonctionnel

### 1.2 Objectifs

- **Impressionner les recruteurs** avec une interface moderne et animée
- **Démontrer les compétences techniques** à travers le site lui-même
- **Centraliser les informations** professionnelles en un seul endroit
- **Faciliter le contact** avec les employeurs potentiels

---

## 2. Stack Technique

### 2.1 Technologies Principales

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 18+ | Framework UI, composants réutilisables |
| **Vite** | 5+ | Bundler et serveur de développement |
| **Tailwind CSS** | 3+ | Framework CSS utility-first |
| **Three.js** | - | Moteur de rendu 3D WebGL |
| **Framer Motion** | - | Bibliothèque d'animations |

### 2.2 Dépendances Détaillées

```json
{
  "dependencies": {
    "react": "Framework principal",
    "react-dom": "Rendu DOM",
    "@react-three/fiber": "React renderer pour Three.js",
    "@react-three/drei": "Helpers et composants Three.js",
    "three": "Moteur 3D WebGL",
    "framer-motion": "Animations déclaratives",
    "motion": "Alias de framer-motion",
    "cobe": "Globe WebGL minimaliste",
    "tailwind-merge": "Fusion de classes Tailwind",
    "@emailjs/browser": "Envoi d'emails côté client",
    "maath": "Utilitaires mathématiques pour 3D",
    "react-responsive": "Media queries React"
  }
}
```

---

## 3. Architecture du Projet

### 3.1 Pattern Architectural

Le projet suit une architecture **Component-Based** avec séparation des responsabilités :

```
┌─────────────────────────────────────────────────┐
│                    App.jsx                       │
│              (Composition Root)                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │  sections/  │  │ components/ │  │constants│ │
│  │  (Smart)    │  │   (Dumb)    │  │ (Data)  │ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
│                                                  │
└─────────────────────────────────────────────────┘
```

### 3.2 Flux de Données

```
constants/index.js (Source de données)
         │
         ▼
    App.jsx (Assemblage)
         │
         ▼
  sections/*.jsx (Logique + Rendu)
         │
         ▼
 components/*.jsx (UI Pure)
```

---

## 4. Structure des Fichiers

```
Portfolio-main/
│
├── public/                          # Assets statiques
│   ├── assets/
│   │   ├── logos/                   # Icônes technologies (SVG)
│   │   │   ├── react.svg
│   │   │   ├── docker.svg
│   │   │   ├── linux.svg
│   │   │   └── ...
│   │   │
│   │   ├── projects/                # Images des projets
│   │   │   ├── portfolio-3d.jpg
│   │   │   ├── infrastructure-de-monitoring.png
│   │   │   └── ...
│   │   │
│   │   ├── socials/                 # Icônes réseaux sociaux
│   │   │   ├── linkedIn.svg
│   │   │   └── github-mark-white.svg
│   │   │
│   │   ├── sky.jpg                  # Fond parallaxe
│   │   ├── mountain-1.png           # Couche parallaxe 1
│   │   ├── mountain-2.png           # Couche parallaxe 2
│   │   ├── mountain-3.png           # Couche parallaxe 3
│   │   ├── planets.png              # Couche parallaxe planètes
│   │   └── coding-pov.png           # Image section About
│   │
│   └── models/
│       └── tenhun_falling_spaceman_fanart.glb  # Modèle 3D astronaute
│
├── src/                             # Code source
│   │
│   ├── sections/                    # Sections principales (Smart Components)
│   │   ├── Navbar.jsx               # Navigation fixe
│   │   ├── Hero.jsx                 # Page d'accueil + 3D
│   │   ├── About.jsx                # Présentation + Globe
│   │   ├── Experiences.jsx          # Timeline formations/stages
│   │   ├── Projects.jsx             # Liste des projets
│   │   ├── VeilleTechno.jsx         # Flux RSS actualités
│   │   ├── Contact.jsx              # Formulaire + EmailJS
│   │   └── Footer.jsx               # Pied de page
│   │
│   ├── components/                  # Composants réutilisables (Dumb Components)
│   │   ├── Astronaut.jsx            # Modèle 3D chargé avec useGLTF
│   │   ├── ParallaxBackground.jsx   # Effet parallaxe au scroll
│   │   ├── HeroText.jsx             # Texte animé d'accueil
│   │   ├── FlipWords.jsx            # Mots qui changent en boucle
│   │   ├── Globe.jsx                # Globe terrestre COBE
│   │   ├── Card.jsx                 # Cartes draggables
│   │   ├── Frameworks.jsx           # Cercles orbitaux de logos
│   │   ├── OrbitingCircles.jsx      # Animation circulaire
│   │   ├── Timeline.jsx             # Frise chronologique
│   │   ├── Marquee.jsx              # Défilement infini
│   │   ├── Project.jsx              # Carte projet individuelle
│   │   ├── ProjectDetails.jsx       # Modal détails projet
│   │   ├── CopyEmailButton.jsx      # Bouton copier email
│   │   ├── Particles.jsx            # Particules animées Canvas
│   │   ├── Alert.jsx                # Notifications toast
│   │   └── Loader.jsx               # Loader 3D
│   │
│   ├── constants/
│   │   └── index.js                 # DONNÉES : projets, expériences, liens
│   │
│   ├── App.jsx                      # Composant racine
│   ├── main.jsx                     # Point d'entrée React
│   └── index.css                    # Styles globaux + Tailwind
│
├── index.html                       # Template HTML
├── package.json                     # Dépendances NPM
├── tailwind.config.js               # Configuration Tailwind
├── vite.config.js                   # Configuration Vite
└── eslint.config.js                 # Configuration ESLint
```

---

## 5. Les Sections du Site

### 5.1 Navbar (`sections/Navbar.jsx`)

**Fonctionnalités :**
- Navigation fixe en haut de page
- Menu responsive (hamburger sur mobile)
- Animation d'ouverture avec Framer Motion
- Liens d'ancrage vers les sections

**Code clé :**
```jsx
// Navigation avec ancres
<a href="#home">Accueil</a>
<a href="#about">À Propos</a>
<a href="#work">Projets</a>
<a href="#veille">Veille</a>
<a href="#contact">Contact</a>
```

### 5.2 Hero (`sections/Hero.jsx`)

**Fonctionnalités :**
- Texte animé avec le nom et le slogan
- Mots qui changent automatiquement (FlipWords)
- Fond parallaxe multi-couches
- Modèle 3D d'astronaute interactif
- Caméra qui suit la souris

**Technologies utilisées :**
- React Three Fiber (Canvas 3D)
- Drei (Float, useGLTF)
- Framer Motion (animations texte)

### 5.3 About (`sections/About.jsx`)

**Fonctionnalités :**
- Grille CSS responsive (6 colonnes)
- Cartes draggables avec compétences
- Globe terrestre interactif (COBE)
- Bouton copier email
- Logos de technologies en orbite

### 5.4 Experiences (`sections/Experiences.jsx`)

**Fonctionnalités :**
- Timeline verticale animée au scroll
- Ligne de progression qui se remplit
- Affichage des formations et stages
- Animation d'apparition progressive

### 5.5 Projects (`sections/Projects.jsx`)

**Fonctionnalités :**
- Liste des projets avec preview au survol
- Image qui suit le curseur
- Modal de détails expandable
- Tags des technologies utilisées

### 5.6 VeilleTechno (`sections/VeilleTechno.jsx`)

**Fonctionnalités :**
- Flux RSS de Tom's Hardware et AI News
- Défilement automatique (Marquee)
- Rafraîchissement toutes les 5 minutes
- Liens vers les articles originaux
- État de chargement animé

### 5.7 Contact (`sections/Contact.jsx`)

**Fonctionnalités :**
- Formulaire avec validation
- Envoi d'email via EmailJS
- Particules animées en arrière-plan
- Notifications de succès/erreur

### 5.8 Footer (`sections/Footer.jsx`)

**Fonctionnalités :**
- Liens réseaux sociaux
- Copyright
- Mentions légales

---

## 6. Composants Clés - Analyse Technique

### 6.1 Astronaut.jsx - Modèle 3D

```jsx
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";

export function Astronaut(props) {
  const group = useRef();
  
  // Chargement du modèle GLTF
  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  );
  
  // Lecture des animations du modèle
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Animation d'entrée avec spring physics
  const yPosition = useMotionValue(5);  // Démarre haut
  const ySpring = useSpring(yPosition, { damping: 30 });
  
  useEffect(() => {
    ySpring.set(-1);  // Descend à la position finale
  }, [ySpring]);
  
  // Mise à jour à chaque frame (60fps)
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });

  return (
    <group ref={group} {...props}>
      {/* Meshes du modèle 3D */}
    </group>
  );
}

// Préchargement pour optimisation
useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
```

### 6.2 ParallaxBackground.jsx - Effet Parallaxe

```jsx
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  // Hook pour suivre le scroll (0 à 1)
  const { scrollYProgress } = useScroll();

  // Transformation : scroll → translation Y
  // Chaque couche a une vitesse différente
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);

  // Spring pour fluidité (inertie)
  const smoothY1 = useSpring(y1, { damping: 50 });
  const smoothY2 = useSpring(y2, { damping: 50 });
  const smoothY3 = useSpring(y3, { damping: 50 });
  const smoothY4 = useSpring(y4, { damping: 50 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Couche 1 : Ciel (fixe) */}
      <div style={{ backgroundImage: "url(/assets/sky.jpg)" }} />
      
      {/* Couche 2 : Montagnes arrière (lent) */}
      <motion.div style={{ y: smoothY1, backgroundImage: "url(/assets/mountain-3.png)" }} />
      
      {/* Couche 3 : Planètes */}
      <motion.div style={{ y: smoothY2, backgroundImage: "url(/assets/planets.png)" }} />
      
      {/* Couche 4 : Montagnes milieu */}
      <motion.div style={{ y: smoothY3, backgroundImage: "url(/assets/mountain-2.png)" }} />
      
      {/* Couche 5 : Montagnes avant (rapide) */}
      <motion.div style={{ y: smoothY4, backgroundImage: "url(/assets/mountain-1.png)" }} />
    </div>
  );
};
```

### 6.3 Globe.jsx - Globe Terrestre COBE

```jsx
import createGlobe from "cobe";

export function Globe({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,              // Rotation initiale
      theta: 0.3,          // Inclinaison
      dark: 1,             // Mode sombre
      diffuse: 3,          // Lumière diffuse
      mapSamples: 16000,   // Points sur le globe
      mapBrightness: 1.2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.5, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [
        { location: [48.65, 2.37], size: 0.1 }  // Ris-Orangis
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;  // Auto-rotation
      }
    });

    return () => globe.destroy();
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
```

### 6.4 Timeline.jsx - Frise Chronologique

```jsx
import { useScroll, useTransform, motion } from "framer-motion";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Calcul de la hauteur totale
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  // Scroll progress dans le conteneur
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  // La ligne se remplit selon le scroll
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef}>
      <div ref={ref}>
        {data.map((item, index) => (
          <div key={index}>
            {/* Point sur la timeline */}
            <div className="timeline-dot" />
            {/* Contenu */}
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      
      {/* Ligne de progression */}
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="timeline-line"
      />
    </div>
  );
};
```

### 6.5 Marquee.jsx - Défilement Infini

```jsx
export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  repeat = 4,
}) {
  return (
    <div className="group flex overflow-hidden [--duration:40s] [--gap:1rem]">
      {/* Duplication du contenu pour effet infini */}
      {Array(repeat).fill(0).map((_, i) => (
        <div
          key={i}
          className={twMerge(
            "flex shrink-0 animate-marquee",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
```

**Animation CSS correspondante :**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}
```

### 6.6 FlipWords.jsx - Mots Animés

```jsx
export const FlipWords = ({ words, duration = 3000 }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => {
        const idx = words.indexOf(prev);
        return words[(idx + 1) % words.length];
      });
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
      >
        {/* Animation lettre par lettre */}
        {currentWord.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}  // Stagger
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};
```

---

## 7. Gestion des Données

### 7.1 Fichier `constants/index.js`

Ce fichier centralise toutes les données personnalisables :

```javascript
// PROJETS
export const myProjects = [
  {
    id: 1,
    title: "Portfolio 3D Interactif",
    description: "Description courte...",
    subDescription: [
      "Point détaillé 1",
      "Point détaillé 2",
    ],
    href: "https://github.com/...",
    image: "/assets/projects/portfolio-3d.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Three.js", path: "/assets/logos/threejs.svg" },
    ],
  },
  // ... autres projets
];

// RÉSEAUX SOCIAUX
export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Noblesse18",
    icon: "/assets/socials/github-mark-white.svg",
  },
];

// EXPÉRIENCES
export const experiences = [
  {
    title: "Stage - Inside Runway",
    job: "Développeur / Administration Système",
    date: "15/12/2025 - En cours (4 semaines)",
    contents: [
      "Stage de deuxième année BTS SIO option SLAM.",
      "Participation à des projets de développement et d'infrastructure.",
    ],
  },
  // ... autres expériences
];
```

---

## 8. Animations et Effets Visuels

### 8.1 Framer Motion - Patterns Utilisés

**Variants pour animations réutilisables :**
```jsx
const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.5 }}
/>
```

**AnimatePresence pour les transitions :**
```jsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key="unique"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

**useMotionValue pour éviter les re-renders :**
```jsx
const x = useMotionValue(0);
const springX = useSpring(x, { damping: 10 });

// Mise à jour directe sans re-render React
x.set(newValue);
```

### 8.2 CSS Animations (Tailwind)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "marquee": "marquee var(--duration) linear infinite",
        "orbit": "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateY(calc(var(--radius) * -1px)) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateY(calc(var(--radius) * -1px)) rotate(-360deg)" },
        },
      },
    },
  },
};
```

---

## 9. Intégration 3D avec Three.js

### 9.1 React Three Fiber

React Three Fiber est un renderer React pour Three.js qui permet d'utiliser Three.js de manière déclarative.

**Structure de base :**
```jsx
import { Canvas } from "@react-three/fiber";

<Canvas camera={{ position: [0, 1, 3] }}>
  <ambientLight />
  <pointLight position={[10, 10, 10]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial color="orange" />
  </mesh>
</Canvas>
```

### 9.2 Drei - Helpers

```jsx
import { Float, useGLTF, Html, useProgress } from "@react-three/drei";

// Float : animation flottante automatique
<Float speed={1} rotationIntensity={1} floatIntensity={2}>
  <mesh />
</Float>

// useGLTF : chargement de modèles
const { nodes, materials } = useGLTF("/model.glb");

// Html : éléments HTML dans la scène 3D
<Html center>
  <div>Loading...</div>
</Html>

// useProgress : progression du chargement
const { progress } = useProgress();
```

### 9.3 Camera Rig (Suivi Souris)

```jsx
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function Rig() {
  return useFrame((state, delta) => {
    // Déplace la caméra vers la position de la souris avec easing
    easing.damp3(
      state.camera.position,
      [
        state.mouse.x / 10,      // X suit la souris
        1 + state.mouse.y / 10,  // Y suit la souris
        3                         // Z fixe
      ],
      0.5,   // Smoothing
      delta  // Delta time
    );
  });
}
```

---

## 10. Flux RSS - Veille Technologique

### 10.1 Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│  RSS Feeds      │────▶│  rss2json    │────▶│  React App  │
│  (Tom's HW, AI) │     │  (Proxy API) │     │  (Marquee)  │
└─────────────────┘     └──────────────┘     └─────────────┘
```

### 10.2 Implémentation

```jsx
const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";

const RSS_FEEDS = [
  { url: "https://www.tomshardware.fr/feed/", name: "Tom's Hardware", icon: "🖥️" },
  { url: "https://artificialintelligence-news.com/feed/", name: "AI News", icon: "🤖" },
];

useEffect(() => {
  const fetchAllFeeds = async () => {
    const allNews = [];
    
    for (const feed of RSS_FEEDS) {
      try {
        const response = await fetch(
          `${RSS_PROXY}${encodeURIComponent(feed.url)}`
        );
        const data = await response.json();
        
        if (data.status === "ok" && data.items) {
          const feedNews = data.items.slice(0, 5).map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description,
            source: feed.name,
            icon: feed.icon,
          }));
          allNews.push(...feedNews);
        }
      } catch (error) {
        console.error(`Erreur ${feed.name}:`, error);
      }
    }
    
    // Mélange aléatoire
    setNews(allNews.sort(() => Math.random() - 0.5));
  };

  fetchAllFeeds();
  
  // Rafraîchissement toutes les 5 minutes
  const interval = setInterval(fetchAllFeeds, 5 * 60 * 1000);
  return () => clearInterval(interval);
}, []);
```

### 10.3 Pourquoi un Proxy ?

Les navigateurs bloquent les requêtes vers d'autres domaines (CORS). Le service `rss2json.com` :
- Récupère le flux RSS côté serveur
- Le convertit en JSON
- Le renvoie avec les bons headers CORS

---

## 11. Formulaire de Contact avec EmailJS

### 11.1 Configuration EmailJS

EmailJS permet d'envoyer des emails depuis JavaScript sans backend.

**Étapes de configuration :**
1. Créer un compte sur emailjs.com
2. Configurer un service email (Gmail, Outlook...)
3. Créer un template d'email
4. Récupérer les identifiants (Service ID, Template ID, Public Key)

### 11.2 Implémentation

```jsx
import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await emailjs.send(
      "service_xxxxx",      // Service ID
      "template_xxxxx",     // Template ID
      {
        from_name: formData.name,
        to_name: "Narayanasamy",
        from_email: formData.email,
        to_email: "comaravel.narayanasamy@gmail.com",
        message: formData.message,
      },
      "public_key_xxxxx"    // Public Key
    );
    
    showAlertMessage("success", "Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    showAlertMessage("danger", "Erreur lors de l'envoi");
  }
  
  setIsLoading(false);
};
```

---

## 12. Configuration Tailwind CSS

### 12.1 Couleurs Personnalisées

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",      // Fond principal
        indigo: "#1a1a2e",       // Fond secondaire
        storm: "#16213e",        // Fond alternatif
        royal: "#4a3f8c",        // Accent
        lavender: "#7c3aed",     // Accent clair
      },
    },
  },
};
```

### 12.2 Classes Utilitaires Custom

```css
/* index.css */
@layer utilities {
  .c-space {
    @apply px-5 md:px-10;
  }
  
  .text-heading {
    @apply text-3xl md:text-5xl font-bold;
  }
  
  .hover-animation {
    @apply transition-all duration-300 ease-in-out;
  }
  
  .field-input {
    @apply w-full px-4 py-2 bg-transparent border border-white/10 rounded-lg;
  }
}
```

---

## 13. Optimisation des Performances

### 13.1 Techniques Utilisées

| Technique | Implémentation |
|-----------|----------------|
| **Preloading 3D** | `useGLTF.preload("/model.glb")` |
| **Lazy Loading** | `<Suspense>` pour le Canvas 3D |
| **Motion Values** | Évite les re-renders React |
| **CSS Animations** | Plus performant que JS pour les boucles infinies |
| **Tree Shaking** | Vite élimine le code non utilisé |

### 13.2 Suspense et Loader

```jsx
<Canvas>
  <Suspense fallback={<Loader />}>
    <Astronaut />
  </Suspense>
</Canvas>

// Loader avec progression
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <p>{progress.toFixed(0)}% chargé</p>
    </Html>
  );
};
```

---

## 14. Déploiement

### 14.1 Build de Production

```bash
# Génère les fichiers optimisés dans dist/
npm run build
```

**Contenu du dossier `dist/` :**
```
dist/
├── index.html           # HTML minifié
├── assets/
│   ├── index-[hash].js  # JS bundlé et minifié
│   ├── index-[hash].css # CSS purgé
│   └── ...              # Assets copiés
└── models/              # Modèles 3D
```

### 14.2 Plateformes de Déploiement

| Plateforme | Commande/Méthode |
|------------|------------------|
| **Vercel** | `vercel deploy` ou import GitHub |
| **Netlify** | Drag & drop du dossier `dist/` |
| **GitHub Pages** | Push sur branche `gh-pages` |

### 14.3 Variables d'Environnement

Pour les clés sensibles (EmailJS), utiliser un fichier `.env` :

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

```jsx
// Utilisation dans le code
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { ... },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

---

## 15. Commandes Utiles

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

---

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Three.js](https://threejs.org)
- [EmailJS](https://www.emailjs.com)
- [COBE Globe](https://github.com/shuding/cobe)

---

**Document généré le :** Décembre 2025  
**Version du projet :** 1.0.0
