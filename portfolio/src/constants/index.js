/* Text and elements for the page */

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    carrent,
    jobit,
    tripguide,
    threejs,
    bama,
    hmkg,
    farder,
    hvl,
    drikkelek,
    sketchsauce,
    exchangebuddy,
    laddergame,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      projectsource: "https://drikkelek-db.web.app",
      text: "Simple questions app designed for mobile.",
      title: "My first React project",
      icon: web,
    },
    {
      projectsource: "https://sketchsauce-ca191.web.app/",
      text: "A gallery of their pictures.",
      title: "Sketchsauce homepage",
      icon: mobile,
    },
    {
      projectsource: "https://drikkelek-db.web.app",
      text: "Webapp for swapping rooms with another exchange student.",
      title: "Exchange-buddy",
      icon: backend,
    },
    {
      projectsource: "https://drikkelek-db.web.app",
      text: "The known wordle game in a Java desktop app.",
      title: "Wordle",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
    /**
     * Legg til mer info her, Java, Python, Spring boot etc.
     */
  ];
  
  const experiences = [
    {
      title: "Bama lagerarbeider",
      company_name: "BAMA",
      icon: bama,
      iconBg: "#383E56",
      date: "Sep 2017 - Jan 2023",
      points: [
        "Erfaring med å arbeide i et travelt og dynamisk miljø hos BAMA Larvik, og bidratt til effektiv varepåfylling og vareutlevering gjennom god organisering og prioritering av oppgaver.",
        "Samarbeidet tett med kolleger for å sikre en smidig og effektiv arbeidsflyt, og utviklet gode kommunikasjonsevner for å koordinere aktiviteter og løse problemer i fellesskap.",
        "Behersket bruk av teknisk utstyr som truck og palleløfter for å transportere varer, og kan raskt tilegne seg nye ferdigheter og teknikker ved behov.",
        "Opprettholdt høye standarder for hygiene og renhold i lagerområdet, og overholdt BAMA Larviks sikkerhetsrutiner og retningslinjer for å ivareta egen og andres sikkerhet.",
      ],
    },
    {
      title: "Gardist",
      company_name: "HMKG",
      icon: hmkg,
      iconBg: "black",
      date: "Apr 2019 - Apr 2020",
      points: [
        "Tjenestegjort i Hans Majestet Kongens Garde (HMKG) som gardist og lagfører, og opparbeidet disiplin, pålitelighet og ansvarlighet gjennom tjenesten i en høyt ansett militær enhet.",
        "Utviklet ferdigheter i kommunikasjon, samarbeid og problemløsning under utfordrende og stressende situasjoner, noe som er verdifullt i mange arbeidsmiljøer.",
        "Utført vakttjeneste og seremonielle oppdrag ved slottet, Akershus festning og andre offisielle arrangementer, og vist profesjonalitet og respekt for tradisjoner og etikette.",
        "Styrket fysisk form og utholdenhet gjennom regelmessig trening og militære øvelser, noe som kan være en fordel i stillinger som krever fysisk arbeid eller evnen til å håndtere stressende situasjoner.",
      ],
    },
    {
      title: "Ringevikar",
      company_name: "Færder",
      icon: farder,
      iconBg: "white",
      date: "Feb 2019 - Apr2019/Apr 2020 - November 2021",
      points: [
        "Erfaring som ringevikar i barnehager i Færder kommune, med evnen til å raskt tilpasse seg ulike situasjoner og arbeidsmiljøer.",
        "Utviklet gode relasjoner med barn, kolleger og foresatte gjennom aktiv kommunikasjon og samarbeid, noe som er avgjørende for et vellykket arbeidsforhold.",
        "Bidratt i den daglige driften av barnehagen, inkludert planlegging og gjennomføring av aktiviteter, og støttet pedagoger og annet personale i deres arbeid.",
        "Engasjert i å skape et trygt og inkluderende miljø for barna, ved å observere og støtte deres utvikling og trivsel, og ivareta deres sikkerhet gjennom overholdelse av kommunens retningslinjer og rutiner.",
      ],
    },
    {
      title: "Dataingeniør",
      company_name: "HVL",
      icon: hvl,
      iconBg: "white",
      date: "Aug 2021 - Present",
      points: [
        "Pågående utdanning som dataingeniør ved Høgskulen på Vestlandet (HVL), med fokus på programmering, databaser, nettverk og systemutvikling.",
        "Erfaring med å anvende teknisk kunnskap og analytiske ferdigheter for å løse komplekse problemer og utvikle innovative løsninger innen IT og dataingeniørfaget.",
        "Samarbeidet med medstudenter på prosjekter og oppgaver, og utviklet gode kommunikasjonsevner for å presentere tekniske konsepter og ideer på en klar og forståelig måte.",
        "Deltatt i praktiske laboratorieøvelser og prosjekter som gir hands-on erfaring med relevante verktøy, teknologier og teknikker innen dataingeniørfaget, og som forbereder for en karriere i bransjen.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Drikkelek",
      description:
        "Mitt aller første React prosjekt. En enkel drikkelek som baseres på å legge inn spørsmål som blir lagt inn i en database og trukket tilfeldig ut.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: drikkelek,
      source_code_link: "https://github.com/Amund-Fremming/drikkelek",
      live_demo_link: "https://drikkelek-db.web.app/",
    },
    {
      name: "Sketchsauce",
      description:
        "Lagde en hjemmeside for sketchsauce. Sketchsauce lager kunst av ikoniske bilder, med en liten morro tvist. Dette er også mitt andre React prosjekt.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sketchsauce,
      source_code_link: "https://github.com/Amund-Fremming/sketchhouse-ts",
      live_demo_link: "https://sketchsauce-ca191.web.app/",
    },
    {
      name: "Exchange-buddy",
      description:
        "En web-app for utvekslingsstudenter. Formålet med appen skulle være å hjelp utvekslingsstudenter med å få leid ut rommet sitt i det halve året de er borte, og også mulighet for å finne et rom i utlandet de bare trenger å leie selve semesteret de er borte.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "Sprin-boot",
          color: "pink-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
      ],
      image: exchangebuddy,
      source_code_link: "!!",
      live_demo_link: "!!",
    },
    {
      name: "Stigespill Backend",
      description:
        "Min første prosjektoppgave på skolen. Prosjektet gitt ut på å planlegge og lage ett stigespill steg for steg som det ville bli gjort i en stor bedrift.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
      ],
      image: laddergame,
      source_code_link: "https://github.com/Amund-Fremming/drikkelek",
      live_demo_link: "https://drikkelek-db.web.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };