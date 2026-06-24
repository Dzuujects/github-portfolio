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
        images: [
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Gameplay', alt: 'Unity 2D Platformer - Gameplay Screenshot' },
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Level+Design', alt: 'Unity 2D Platformer - Level Design' },
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Enemy+AI', alt: 'Unity 2D Platformer - Enemy AI System' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
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
        images: [
            { src: 'https://via.placeholder.com/400x300?text=UE5+Action+Gameplay', alt: 'Unreal 3D Action - Gameplay Screenshot' },
            { src: 'https://via.placeholder.com/400x300?text=UE5+Destruction+Physics', alt: 'Unreal 3D Action - Destruction Physics' },
            { src: 'https://via.placeholder.com/400x300?text=UE5+Combat+System', alt: 'Unreal 3D Action - Combat System' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
        techs: ['Unreal Engine 5', 'C++', 'Blueprint Visual Scripting', 'Niagara FX', 'MetaHuman'],
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
        images: [
            { src: 'https://via.placeholder.com/400x300?text=Dashboard+Overview', alt: 'Data Dashboard - Overview' },
            { src: 'https://via.placeholder.com/400x300?text=Dashboard+Charts', alt: 'Data Dashboard - Interactive Charts' },
            { src: 'https://via.placeholder.com/400x300?text=Dashboard+Filters', alt: 'Data Dashboard - Filter System' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
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
        images: [
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Homepage', alt: 'E-Commerce App - Homepage' },
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Product+Page', alt: 'E-Commerce App - Product Page' },
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Checkout', alt: 'E-Commerce App - Checkout Flow' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
        techs: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT', 'Docker'],
        links: [
            { text: 'View Repository', url: '#' },
            { text: 'View Live Demo', url: '#' }
        ]
    },
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

    // Update images gallery
    const imagesGallery = document.getElementById('projectImages');
    imagesGallery.innerHTML = '';
    if (project.images && project.images.length > 0) {
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            imagesGallery.appendChild(img);
        });
    }

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

    // Update video — hide the entire section if no URL is provided
    const videoSection = document.getElementById('videoSection');
    const videoIframe = document.getElementById('projectVideo');
    if (project.video) {
        videoIframe.src = project.video;
        videoSection.style.display = '';
    } else {
        videoSection.style.display = 'none';
    }

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