// Project data structure
const projectsData = {
    // Game Projects
    'battle-builders': {
        type: 'game',
        title: 'Battle Builders',
        subtitle: 'Physics-Based Multiplayer Combat Level Builder',
        meta: 'Game Development | Unity | C# | Local Multiplayer | Physics',
        overview: 'A mix of Ultimate Chicken Horse and Stick Fight, this is a 4-man collaborative Unity project combining the creative mechanics of a level-builder with the fast-paced action of physics-based combat.',
        features: [
            'In-game asset building system (blocks and traps)',
            'Physics-based combat loop',
            'Keyboard and controller setup',
            'Integrated User Interface (UI)',
            'Iterative game balancing based on data prototyping',
            'Paper prototype logic planning'
        ],
        challenges: [
            {
                title: 'Validating core mechanic',
                challenge: 'Had difficulty on whether combat should be moveset-based (Super Smash Bros) or ragdoll based (Stick Fight).',
                solution: 'Created a physical paper prototype to test the game flow and mechanics with audiences before committing to code, saving significant development time.'
            },
            {
                title: 'Developing the build system',
                challenge: 'The build system requires the player to know what block they are picking and where they are placing it.',
                solution: 'Implemented a pick phase using UnityUI Toolkit and then had a painter grid layer to show where the player would be placing it before placing the block'
            },
            {
                title: 'Local multiplayer controls',
                challenge: 'Needed to have a way for two players to play at once without both of them using the keyboard and mouse',
                solution: 'Made it so that one players uses the keyboard/mouse and the other uses a controller.'
            },
            {
                title: 'Controller player UI controls',
                challenge: 'Controller player could not choose a block inside the pick phase.',
                solution: 'Had a virtual mouse controlled by the controller player during the pick phase.'
            },
            {
                title: 'Trap design',
                challenge: 'Traps are blocks with actionable events when a player goes near it.',
                solution: 'Trap blocks spawn with a game object so that it can interact with the player.'
            },
            {
                title: 'Block rotation',
                challenge: 'Block/trap tiles need to be able to rotate',
                solution: 'The painter places tiles depending on which rotation it is (intervals of 90 degrees) and changes the tile palette accordingly.'
            },
        ],
        images: [
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Gameplay', alt: 'Unity 2D Platformer - Gameplay Screenshot' },
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Level+Design', alt: 'Unity 2D Platformer - Level Design' },
            { src: 'https://via.placeholder.com/400x300?text=Unity+Platformer+Enemy+AI', alt: 'Unity 2D Platformer - Enemy AI System' }
        ],
        video: 'https://youtu.be/NwvD8w5j_yA',
        techs: ['Unity', 'C#', 'Unity UI Toolkit', 'Grid Map', 'Physics', 'Local Multiplayer'],
        links: [
            { text: 'View Repository', url: 'https://github.com/Dzuujects/BattleBuilder-F20GP_CW2-' },
            { text: 'View Live Demo', url: 'https://dzuu.itch.io/battle-builders' }
        ]
    },
    'animal-farm': {
        type: 'game',
        title: 'Animal Farm',
        subtitle: 'Physics and AI-Driven Animal Taming Game',
        meta: 'Game Development | Unity | C# | Physics | AI Navigation',
        overview: 'A cooperative game development project where the player builds a farm by utilizing physics-based item throwing to tame various wild animals equipped with distinct AI behaviors.',
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