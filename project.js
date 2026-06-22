// Project data structure
const projectsData = {
    // Game Projects
    'unity-2d-platformer': {
        type: 'game',
        title: 'Unity 2D Platformer',
        subtitle: 'A dynamic 2D platformer with challenging mechanics and smooth controls',
        meta: 'Game Development | Unity | C#',
        overview: 'A 2D platformer game built in Unity featuring dynamic level design with progressive difficulty, challenging mechanics, and smooth player controls. The game includes enemy AI pathfinding, collectible systems, and multiple level variations. Players can interact with various environmental elements and unlock achievements through skilled gameplay.',
        features: [
            'Dynamic level design with multiple difficulty tiers',
            'Advanced enemy AI with pathfinding algorithms',
            'Collectible system with scoring mechanics',
            'Smooth physics-based player movement',
            'Multiple themed environments',
            'Achievement and progress tracking'
        ],
        challenges: [
            {
                title: 'AI Pathfinding',
                challenge: 'Implementing intelligent enemy behavior that felt responsive yet challenging.',
                solution: 'Utilized A* pathfinding algorithm with dynamic waypoints and behavior trees for diverse enemy types.'
            },
            {
                title: 'Level Design Balance',
                challenge: 'Creating levels that were challenging without being frustrating.',
                solution: 'Implemented difficulty curves, playtesting feedback loops, and dynamic difficulty adjustment.'
            },
            {
                title: 'Performance Optimization',
                challenge: 'Maintaining 60 FPS across different devices and level complexity.',
                solution: 'Object pooling, spatial partitioning, and efficient collision detection optimization.'
            }
        ],
        techs: ['Unity', 'C#', 'C++', 'HLSL Shaders', 'Physics Engine'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'unreal-3d-action': {
        type: 'game',
        title: 'Unreal Engine 3D Action Game',
        subtitle: 'Advanced 3D action game with destructible environments and dynamic combat',
        meta: 'Game Development | Unreal Engine | C++',
        overview: 'A 3D action game built with Unreal Engine 5 featuring advanced physics simulations, real-time destruction systems, and complex combat mechanics. The game showcases environmental interactions, dynamic NPC behavior with state machines, and a sophisticated loot system. Players experience immersive combat with multiple weapon types and enemy variety.',
        features: [
            'Real-time destruction and environmental deformation',
            'Advanced physics simulation with ragdoll mechanics',
            'Complex combat system with multiple weapon types',
            'Dynamic NPC behavior and AI schedules',
            'Loot system with procedural item generation',
            'Particle effects and visual feedback systems'
        ],
        challenges: [
            {
                title: 'Physics Performance',
                challenge: 'Balancing destruction physics with frame rate stability.',
                solution: 'Implemented level-of-detail physics, destruction event batching, and optimized collision detection.'
            },
            {
                title: 'Combat Feel',
                challenge: 'Creating responsive and satisfying combat mechanics.',
                solution: 'Detailed animation blending, input buffering, and comprehensive feedback systems.'
            },
            {
                title: 'NPC AI Complexity',
                challenge: 'Managing complex behaviors across multiple NPCs without performance degradation.',
                solution: 'Behavior trees, task scheduling, and behavior pooling with priority systems.'
            }
        ],
        techs: ['Unreal Engine 5', 'C++', 'Blueprint Visual Scripting', 'Niagara FX', 'MetaHuman'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'godot-puzzle': {
        type: 'game',
        title: 'Godot Puzzle Game',
        subtitle: 'Innovative puzzle game with intuitive mechanics and level editor',
        meta: 'Game Development | Godot | GDScript',
        overview: 'An innovative puzzle game developed in Godot featuring intuitive mechanics that are easy to learn but challenging to master. The game includes progressive difficulty levels and a built-in level editor that allows players to create and share custom puzzles. The minimalist art style emphasizes core gameplay mechanics.',
        features: [
            'Progressive difficulty system with 50+ levels',
            'Built-in level editor for custom puzzle creation',
            'Cloud save system for progress tracking',
            'Minimalist aesthetic with responsive UI',
            'Hint system with varying difficulty levels',
            'Social sharing of custom puzzles'
        ],
        challenges: [
            {
                title: 'Puzzle Design',
                challenge: 'Ensuring each puzzle was solvable while remaining challenging.',
                solution: 'Implemented constraint satisfaction algorithms and extensive playtesting.'
            },
            {
                title: 'Level Editor Usability',
                challenge: 'Creating an intuitive editor within the game.',
                solution: 'Iterative UI/UX design with user testing and simplified creation workflow.'
            },
            {
                title: 'Procedural Generation',
                challenge: 'Generating valid puzzle variations.',
                solution: 'Custom algorithm for constraint-based generation with validation.'
            }
        ],
        techs: ['Godot Engine', 'GDScript', 'SQL (for saves)', 'REST API'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'gamemaker-roguelike': {
        type: 'game',
        title: 'GameMaker Studio - Roguelike',
        subtitle: 'Procedurally generated roguelike with pixel art and chiptune soundtrack',
        meta: 'Game Development | GameMaker Studio | GML',
        overview: 'A procedurally generated roguelike game with varied enemy types, diverse weapon systems, and persistent progression mechanics. The game features retro pixel art aesthetics paired with chiptune soundtrack integration. Players progress through randomly generated dungeons, unlocking permanent upgrades across playthroughs.',
        features: [
            'Procedural dungeon generation algorithm',
            'Diverse weapon and item pool with stat variations',
            'Multiple enemy types with unique behaviors',
            'Persistent progression and meta-upgrades',
            'Dynamic music system with composition layers',
            'Chiptune soundtrack by original composer'
        ],
        challenges: [
            {
                title: 'Procedural Balance',
                challenge: 'Ensuring generated content was always playable and fun.',
                solution: 'Implemented constraints system and difficulty scaling per depth.'
            },
            {
                title: 'Performance with Particles',
                challenge: 'Managing performance with extensive pixel particle effects.',
                solution: 'Custom particle pooling and efficient sprite rendering.'
            },
            {
                title: 'Audio Integration',
                challenge: 'Dynamic music composition while maintaining performance.',
                solution: 'Streaming audio with carefully timed composition layers.'
            }
        ],
        techs: ['GameMaker Studio 2', 'GML', 'FMOD Audio', 'Pixel Art Tools'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },

    // Software Projects
    'interactive-dashboard': {
        type: 'software',
        title: 'Interactive Data Dashboard',
        subtitle: 'Real-time analytics dashboard with interactive visualizations',
        meta: 'Web Development | React | JavaScript | Tableau',
        overview: 'A comprehensive data visualization dashboard built with React that displays real-time analytics from multiple data sources. The application features interactive charts, advanced filtering capabilities, and is fully responsive across devices. Users can customize views, export reports, and set up automated data alerts.',
        features: [
            'Real-time data synchronization with WebSocket',
            'Interactive charts with drill-down capabilities',
            'Advanced filtering and search functionality',
            'Responsive design for desktop, tablet, and mobile',
            'Custom dashboard creation and sharing',
            'Automated report generation and scheduling'
        ],
        challenges: [
            {
                title: 'Real-time Data Handling',
                challenge: 'Processing and rendering large datasets without lag.',
                solution: 'Implemented virtual scrolling, data windowing, and efficient state management.'
            },
            {
                title: 'Chart Interactivity',
                challenge: 'Creating smooth interactions with thousands of data points.',
                solution: 'Used WebGL-based charting library with optimized rendering pipeline.'
            },
            {
                title: 'Responsive Design',
                challenge: 'Maintaining functionality across all screen sizes.',
                solution: 'Mobile-first design approach with CSS Grid and careful testing.'
            }
        ],
        techs: ['React', 'D3.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'ecommerce-app': {
        type: 'software',
        title: 'E-Commerce Web Application',
        subtitle: 'Full-stack platform with authentication and payment integration',
        meta: 'Full-Stack Development | Node.js | Express | MongoDB',
        overview: 'A complete full-stack e-commerce platform featuring user authentication, comprehensive product catalog management, shopping cart functionality, and secure payment integration. The application implements RESTful APIs, role-based access control, and includes an admin dashboard for inventory management.',
        features: [
            'User authentication with JWT and OAuth integration',
            'Product catalog with search and filtering',
            'Shopping cart with persistent storage',
            'Secure payment processing with Stripe',
            'Order tracking and history',
            'Admin dashboard for inventory management'
        ],
        challenges: [
            {
                title: 'Payment Security',
                challenge: 'Implementing secure payment processing while maintaining PCI compliance.',
                solution: 'Used tokenization, encrypted storage, and regular security audits.'
            },
            {
                title: 'Scalability',
                challenge: 'Handling concurrent users and high transaction volume.',
                solution: 'Database indexing, caching with Redis, and load balancing.'
            },
            {
                title: 'User Experience',
                challenge: 'Creating smooth checkout flow without security compromises.',
                solution: 'Progressive form validation, real-time feedback, and guest checkout option.'
            }
        ],
        techs: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT', 'Docker'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'task-manager': {
        type: 'software',
        title: 'Task Management System',
        subtitle: 'Collaborative task management with real-time updates',
        meta: 'Full-Stack Development | JavaScript | HTML/CSS | SQL',
        overview: 'A collaborative task management web application with real-time updates, advanced user roles, and sophisticated project organization features. The system includes data persistence with comprehensive databases, notification systems, and team collaboration tools.',
        features: [
            'Real-time task updates and notifications',
            'User roles and permission management',
            'Project and team organization',
            'Task dependencies and critical path analysis',
            'File attachment and comment system',
            'Activity timeline and audit logs'
        ],
        challenges: [
            {
                title: 'Real-time Synchronization',
                challenge: 'Keeping all users synchronized across updates.',
                solution: 'WebSocket implementation with operational transformation for conflict resolution.'
            },
            {
                title: 'Permission System',
                challenge: 'Implementing complex role-based access control.',
                solution: 'Attribute-based access control (ABAC) with fine-grained permissions.'
            },
            {
                title: 'Performance at Scale',
                challenge: 'Handling thousands of tasks across large organizations.',
                solution: 'Query optimization, database indexing, and caching strategies.'
            }
        ],
        techs: ['JavaScript', 'Node.js', 'PostgreSQL', 'WebSocket', 'Redis', 'Docker Compose'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'data-analysis-tool': {
        type: 'software',
        title: 'Data Analysis & Reporting Tool',
        subtitle: 'Automated data processing with comprehensive visualizations',
        meta: 'Data Analysis | Python | SQL | PowerBI',
        overview: 'An automated data analysis and reporting tool that processes large datasets using Python and optimized SQL queries. The system generates comprehensive reports with advanced visualizations using PowerBI. It supports multiple data sources and includes scheduling for automated report generation.',
        features: [
            'Multi-source data integration',
            'Advanced SQL query optimization',
            'Automated ETL pipeline',
            'Report scheduling and distribution',
            'PowerBI dashboard integration',
            'Data quality monitoring and validation'
        ],
        challenges: [
            {
                title: 'Data Processing Performance',
                challenge: 'Processing gigabytes of data within acceptable timeframes.',
                solution: 'Vectorized operations with NumPy/Pandas and parallel processing.'
            },
            {
                title: 'Data Quality',
                challenge: 'Ensuring accuracy across diverse data sources.',
                solution: 'Comprehensive validation rules and anomaly detection algorithms.'
            },
            {
                title: 'Scalability',
                challenge: 'Handling growth in data volume and complexity.',
                solution: 'Incremental processing, partitioning strategies, and cloud infrastructure.'
            }
        ],
        techs: ['Python', 'Pandas', 'NumPy', 'SQL', 'PowerBI', 'Apache Airflow'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'finance-tracker': {
        type: 'software',
        title: 'Personal Finance Tracker',
        subtitle: 'Budget management with visual analytics and insights',
        meta: 'Web Development | JavaScript | HTML/CSS | Local Storage',
        overview: 'A personal finance tracking application with budget management, intelligent expense categorization, and visual analytics. The application uses local storage for data persistence and provides insightful financial summaries and predictions.',
        features: [
            'Transaction tracking and categorization',
            'Budget setting and monitoring',
            'Visual expense analytics and charts',
            'Monthly and annual reports',
            'Savings goal tracking',
            'Data export to CSV/PDF'
        ],
        challenges: [
            {
                title: 'Data Persistence',
                challenge: 'Managing local data efficiently without external server.',
                solution: 'IndexedDB for larger datasets with fallback to localStorage.'
            },
            {
                title: 'Visualizations',
                challenge: 'Creating responsive, interactive charts in the browser.',
                solution: 'Chart.js with custom configuration for real-time updates.'
            },
            {
                title: 'User Privacy',
                challenge: 'Keeping sensitive financial data secure locally.',
                solution: 'Encryption of sensitive data and local-only processing.'
            }
        ],
        techs: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'IndexedDB'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
    'api-integration': {
        type: 'software',
        title: 'API Integration Portfolio',
        subtitle: 'Multi-API integration with error handling and async patterns',
        meta: 'Web Development | JavaScript | REST APIs | Fetch',
        overview: 'A web application showcasing integration with multiple third-party APIs, demonstrating advanced error handling, data transformation techniques, and asynchronous programming best practices. The project includes examples with weather, maps, social media, and payment APIs.',
        features: [
            'Multiple third-party API integrations',
            'Comprehensive error handling and retry logic',
            'Rate limiting and request queuing',
            'Data transformation and aggregation',
            'Caching strategy implementation',
            'API request monitoring and logging'
        ],
        challenges: [
            {
                title: 'Error Handling',
                challenge: 'Managing different error formats and rate limits across APIs.',
                solution: 'Unified error handling layer with retry strategies and exponential backoff.'
            },
            {
                title: 'Data Transformation',
                challenge: 'Normalizing data from diverse API formats.',
                solution: 'Custom mapper functions and schema validation with Zod.'
            },
            {
                title: 'Performance Optimization',
                challenge: 'Reducing latency with multiple API calls.',
                solution: 'Parallel requests, caching, and request batching where possible.'
            }
        ],
        techs: ['JavaScript', 'Async/Await', 'REST APIs', 'Express.js', 'Axios', 'Zod'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    }
};

// Get project from URL parameter
function getProjectFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load and display project
function loadProject() {
    const projectId = getProjectFromURL();
    
    if (!projectId || !projectsData[projectId]) {
        document.body.innerHTML = '<div style="text-align: center; padding: 100px; color: #e0e0e0;"><h1>Project not found</h1><p><a href="index.html" style="color: #667eea;">Back to Portfolio</a></p></div>';
        return;
    }

    const project = projectsData[projectId];
    
    // Apply project type theme
    if (project.type === 'game') {
        document.body.classList.add('project-type-game');
    } else if (project.type === 'software') {
        document.body.classList.add('project-type-software');
    }

    // Update header
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectType').textContent = project.meta;
    document.getElementById('projectSubtitle').textContent = project.subtitle;
    document.title = `${project.title} - Dzuhair Hakimi`;

    // Update overview
    document.getElementById('projectOverview').textContent = project.overview;

    // Update features
    const featuresList = document.getElementById('projectFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update challenges
    const challengesContainer = document.getElementById('projectChallenges');
    challengesContainer.innerHTML = '';
    project.challenges.forEach(challenge => {
        const div = document.createElement('div');
        div.className = 'challenge-item';
        div.innerHTML = `
            <h3>${challenge.title}</h3>
            <p><strong>Challenge:</strong> ${challenge.challenge}</p>
            <p><strong>Solution:</strong> ${challenge.solution}</p>
        `;
        challengesContainer.appendChild(div);
    });

    // Update tech stack
    const techStack = document.getElementById('projectTechs');
    techStack.innerHTML = '';
    project.techs.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techStack.appendChild(span);
    });

    // Update links
    const linksContainer = document.getElementById('projectLinks');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const a = document.createElement('a');
        a.className = 'project-link-btn';
        a.href = link.url;
        a.textContent = link.text;
        a.target = '_blank';
        linksContainer.appendChild(a);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProject);
