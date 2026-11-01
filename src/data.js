// Update links and bibliographic details here. The initial content is based on the supplied CV.
export const profile = {
  name: 'Vedanta Hazra',
  email: 'vedantahazra2004@gmail.com',
  phone: '+91 9674344831',
  location: 'Bengaluru, India',
  cv: '/CV_Vedanta_Hazra.pdf',
  // Add your portrait at public/assets/profile/vedanta-hazra.jpg.
  photo: '/assets/profile/vedanta-hazra.jpg',
  links: {
    github: 'https://github.com/vedantahazra',
    linkedin: 'https://linkedin.com/in/vedantahazra',
    scholar: '', // Add your Google Scholar profile URL if you have one.
    email: 'mailto:vedantahazra2004@gmail.com',
  },
  intro: 'I work at the intersection of artificial intelligence, human-computer interaction, and immersive computing. My research explores how intelligent systems can interpret human intent from multimodal signals and provide timely, context-aware support.',
}

export const researchInterests = [
  { n: '01', title: 'Human–computer interaction', text: 'Designing interactive systems that understand people, adapt to context, and support human goals.', tags: ['HCI', 'Adaptive interfaces'] },
  { n: '02', title: 'Virtual & spatial computing', text: 'Building immersive experiences with natural interaction, spatial interfaces, and intelligent assistance.', tags: ['VR / XR', 'Spatial interaction'] },
  { n: '03', title: 'Multimodal & embodied AI', text: 'Connecting speech, gaze, motion, and physiological signals to infer intent and anticipate behavior.', tags: ['Multimodal learning', 'Embodied AI'] },
  { n: '04', title: 'AI safety & privacy', text: 'Studying model vulnerabilities, adversarial behavior, and techniques that improve the robustness of learning systems.', tags: ['Privacy', 'Robust ML'] },
]

export const publications = [
  {
    n: 'P01', authors: 'Vedanta Hazra, Kaushal Kumar Bhagat',
    title: 'Liquid-Gait: Bio-Adaptive AI for Mitigating Virtual Reality Cybersickness',
    venue: 'IEEE VR 2026 · Poster · Daegu, South Korea',
    description: 'Designed a bio-adaptive controller using Liquid Neural Networks to modulate translation gain in real time by fusing high-frequency ocular telemetry with irregular heart-rate variability. Reported a 46.8% reduction in accumulated vestibular error and a 62.3% reduction in saccadic jitter compared with static mitigation baselines.',
    doi: 'https://doi.org/10.1109/VRW70859.2026.00206',
    // Add an authorised/open paper PDF at public/assets/papers/liquid-gait.pdf.
    pdf: '/assets/papers/liquid-gait.pdf',
    presentationUrl: '',
    contribution: 'First author',
  },
  {
    n: 'P02', authors: 'Vedanta Hazra, Kaushal Kumar Bhagat',
    title: 'Semantic Dissonance Detection: A Contrastive Kinematic Transformer for Predictive Support',
    venue: 'IEEE ISMAR 2026 · Accepted poster presentation',
    description: 'Developed a cross-modal safety framework that projects spoken user intent and raw OpenXR kinematic trajectories into a shared CLIP embedding space. The system achieved a 750 ms predictive safety buffer and reduced completed motor errors by 95.3%, with a 1.2% false-positive intervention rate.',
    doi: '',
    // Example PDF path: '/assets/papers/ismar-paper.pdf'
    pdf: '/assets/papers/ismar-paper.pdf',
    presentationUrl: '',
    contribution: 'First author',
  },
  {
    n: 'P03', authors: 'Vedanta Hazra, Kaushal Kumar Bhagat, et al.',
    title: 'Gamified Virtual Tourism: Integrating Embodied AI and Spatial Play to Enhance Engagement',
    venue: 'IEEE ISEMV 2026 · Accepted full paper',
    description: 'Engineered a gaze-grounded Retrieval-Augmented Generation architecture and asynchronous WebSocket streaming for an embodied conversational AI guide in standalone VR. Designed a heuristic dynamic difficulty adjustment engine for spatial physics puzzles, with reported knowledge recall of 79.4% versus 54.2%.',
    doi: '',
    // Example PDF path: '/assets/papers/isemv-paper.pdf'
    pdf: '/assets/papers/isemv-paper.pdf',
    presentationUrl: '',
    contribution: 'First author',
  },
  {
  n: 'P04',
  authors: 'Vedanta Hazra',
  title: 'Multi-Layer Spectral Ablation: Mapping and Mitigating Harmful Feature Restoration in Large Language Models',
  venue: '2025 · Unpublished Manuscript',
  description: 'Investigated how harmful representations can re-emerge across model layers after targeted feature ablation, identifying layer-specific behavior and the evolution of harmful feature restoration in large language models. Proposed a multi-layer spectral intervention that tracks changes in harmful feature subspaces and applies inference-time steering to improve the stability and effectiveness of model safety controls.',
  doi: '',
  pdf: '/assets/papers/multi-layer.pdf',
  presentationUrl: '',
  contribution: 'Sole author',
},
]

export const projects = [
  {
    n: '01', type: 'IMMERSIVE LEARNING · UNITY', title: 'EduScape XR',
    award: 'First Prize · IEEE Metaverse Grand Challenge 2025',
    description: 'A modular VR framework for interactive STEM experiments. Students manipulate 3D objects and explore physical or molecular interactions through hand-tracked interfaces, spatial UI, and an AI-driven pedagogical agent that adapts simulation difficulty based on learner performance.',
    tools: ['Unity', 'C#', 'Meta Quest', 'Hand tracking', 'AI tutor'],
    // Add screenshots under public/assets/projects/eduscape/ and list paths here, e.g.
    // ['/assets/projects/eduscape/screenshot-01.jpg', '/assets/projects/eduscape/screenshot-02.jpg']
    images: [],
    demoUrl: '',
  },
  {
    n: '02', type: 'LLM SAFETY · RESEARCH', title: 'Multi-Layer Spectral Ablation',
    award: 'Unpublished manuscript · 2026',
    description: 'Investigated how harmful representations can re-emerge across model layers after targeted feature ablation. Proposed a multi-layer spectral intervention to track harmful feature subspaces and apply inference-time steering to improve the stability of model safety controls.',
    tools: ['LLMs', 'Representation analysis', 'Spectral methods'],
    images: [],
    demoUrl: '',
  },
  {
    n: '03', type: 'AUGMENTED REALITY · MULTIPLAYER', title: 'GameArt Nexus',
    award: 'Finalist · JitHack Hackathon, Bangalore',
    description: 'A multiplayer AR battle environment built with Niantic Lightship SDK and Unity, enabling shared AR experiences across devices. Integrated blockchain protocols for transparent asset transactions between graphic designers and gamers.',
    tools: ['Unity', 'Niantic Lightship', 'AR', 'Blockchain'],
    images: [],
    demoUrl: '',
  },
  {
    n: '04', type: 'COMPUTER VISION · INTERACTIVE SYSTEMS', title: 'BodySync Rush',
    award: 'Computer vision game · 2024',
    description: 'An immersive endless-runner game in Unity 3D controlled by real-time body movement. Used OpenCV and MediaPipe for low-latency pose estimation and skeletal tracking through standard webcams, without specialized hardware.',
    tools: ['Unity 3D', 'OpenCV', 'MediaPipe', 'Pose estimation'],
    images: [],
    demoUrl: '',
  },
]

export const experience = [
  { date: 'JUL 2026 — PRESENT', role: 'Member of Technical Staff', org: 'Oracle · Bengaluru', details: ['Engineering a Redis-compliant server architecture backed by Oracle Database.', 'Developing integrations for True Cache and Data Guard, alongside SQL parsing optimizations for high availability and low query latency.'] },
  { date: 'MAY 2025 — JUL 2025', role: 'Software Developer Intern (Research)', org: 'Oracle · Bengaluru', details: ['Built a real-time deadlock detection system using Apache Kafka and Oracle PGX to monitor database process-latch interactions.', 'Deployed a Kafka Streams pipeline and multithreaded processing solution that reduced graph analytics latency by 43%.'] },
  { date: 'MAY 2024 — SEP 2024', role: 'Junior Researcher (Remote)', org: 'Deakin University · Australia', details: ['Investigated privacy vulnerabilities in deep reinforcement learning, including adversarial manipulation, model inversion, and membership inference.', 'Developed attack methodologies and adversarial training protocols to improve DRL policy resilience against data poisoning.'] },
  { date: 'JUN 2024 — JUL 2024', role: 'XR Developer', org: 'Evermorrow Labs · Pune', details: ['Developed mixed-reality applications featuring precision gesture recognition and spatial audio.', 'Optimized 3D assets and hardware interaction layers for standalone VR headsets.'] },
  {
  date: 'MAR 2024 — MAY 2024',
  role: 'Data Analyst Intern',
  org: 'Judge Business School · University of Cambridge',
  details: [
    'Analyzed management journals using Python and Selenium-based web scraping to extract actionable insights and improve administrative processes.',
    'Enhanced resource allocation and streamlined operations, resulting in optimized productivity and increased organizational efficiency.'
  ]
},
]

export const awards = [
  { title: '1st Prize · IEEE Metaverse Grand Challenge 2025', detail: 'EduScape XR · Presented at IEEE ISEMV, Hawaii' },
  { title: '1st Prize · XR Creator Hackathon', detail: 'World Audio Visual and Entertainment Summit (WAVES) 2025' },
  { title: 'Junior & Senior Scholar', detail: 'Jagadish Bose National Science Talent Search (JBNSTS)' },
  { title: 'JEE Advanced · AIR 1210', detail: '2022 · Top 0.7% among 172,000 candidates' },
  { title: 'JEE Main · AIR 2909', detail: '2022 · Top 0.2% among 1.2 million candidates' },
]

export const leadership = {
  role: 'Research and Development Head',
  organization: 'Computer Graphics Society, IIT Kharagpur',
  period: 'May 2024 — Present',
  details: 'Mentored student teams working on Computer Vision and Reinforcement Learning, guided technical development and research direction, and led teams in national VR Game Jams and the XR Creator Hackathon.',
}

export const education = {
  degree: 'B.S. in Mathematics and Computing',
  institute: 'Indian Institute of Technology Kharagpur',
  period: '2022 — 2026',
  cgpa: '8.48 / 10',
  school: 'St. Xavier’s Collegiate School',
  classXII: 'ISC · 96.7% · 2022',
  classX: 'ICSE · 98.2% · 2020',
}
