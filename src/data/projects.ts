export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: 'Firefighting Drone Swarm Simulator',
    description: 'A fault-tolerant drone dispatch simulator coordinating three subsystems in real time over UDP.',
    tech: ['Java', 'Multithreading', 'UDP', 'Distributed Systems'],
    year: '2024',
  },
  {
    name: 'Sysc.ca',
    description: 'A centralized resource hub for Carleton Software Engineering students: class materials, a GPA calculator, and FAQs.',
    tech: ['React', 'JavaScript'],
    url: 'https://hajar-assim.github.io/sysc-site/',
    year: '2023',
  },
  {
    name: 'Fitness Club Ledger',
    description: 'A normalized PostgreSQL schema and query/trigger set modeling a health-and-fitness club end to end.',
    tech: ['PostgreSQL', 'SQL', 'Java'],
    github: 'https://github.com/HasibKhodayar/COMP_3005_ProjectV2',
    year: '2023',
  },
  {
    name: 'Uno Flip',
    description: 'An MVC Java desktop implementation of Uno Flip with a Swing interface and a full rule engine for both deck sides.',
    tech: ['Java', 'Swing', 'JUnit'],
    github: 'https://github.com/HasibKhodayar/Uno-Flip-Game',
    year: '2022',
  },
];
