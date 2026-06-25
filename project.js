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
            { src: 'Images/Screenshot 2026-03-30 200407.png', alt: 'Battle Builders - Main Menu' },
            { src: 'Images/Screenshot 2026-03-30 135006.png', alt: 'Battle Builders - Combat Phase' },
            { src: 'Images/Screenshot 2026-03-30 200529.png', alt: 'Battle Builders - Select Phase' }
        ],
        video: null, //Add video here
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
            'Rigidbody-based player movement',
            'Pick-up and throw physics for taming items',
            'Unity AI Navigation (NavMesh) for animal movement',
            'Confined roaming logic for distinct animal zones',
            'Boids/Flocking algorithm for sheep pack movement',
            'Complex 4-state AI machine for bears (roam, chase, attack, follow)',
            'UI integration using Unity UI Toolkit'
        ],
        challenges: [
            {
                title: 'Flocking control for sheeps',
                challenge: '16 sheeps need to move together to look like a flock.',
                solution: 'Implemented a boids-based flocking control system for the sheep, allowing them to move as a cohesive pack without colliding, and individually break off to follow the player when tamed.'
            },
            {
                title: 'Designing bear AI',
                challenge: 'Bear needs to be aggressive and territorial to the player and sheep.',
                solution: 'Engineered a precise multi-state system for the bear, establishing strict transition requirements between roaming, chasing, attacking, and following.'
            },
            {
                title: 'Controlling environment navigation',
                challenge: 'Animals need to know how to move around the map.',
                solution: 'Utilized Unity NavMesh system to confine all animals to mathematically designated zones, preventing them from wandering out of bounds or getting stuck on farm geometry.'
            },
            {
                title: 'Player movement',
                challenge: 'Player needs to move around the map',
                solution: 'Use Unity rigidbody physics to move player and added first-person camera movement to allow the player to navigate around the map'
            },
            {
                title: 'Item holding system',
                challenge: 'Player required to pick uo and throw meat and apples to animals',
                solution: 'Have a game object and collider to for player to pick up item and see what they picked up. Then have items be rigidbody and when throw button is pressed, add an impulse to rigidbody'
            },
            {
                title: 'Win condition',
                challenge: 'Need to have a way for players to win',
                solution: 'Made it so that players have to tame 3 sheeps and the bear to tame them, and cannot have the number of sheeps be lower than 3.'
            }

        ],
        images: [
            { src: 'Images/Screenshot 2026-03-06 155652.png', alt: 'Animal Farm - Gameplay' },
            { src: 'Images/Screenshot 2026-06-24 224031.png', alt: 'Unreal 3D Action - Rigidbody Physics' },
            { src: 'Images/Screenshot 2026-06-24 224050.png', alt: 'Unreal 3D Action - AI navigation' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
        techs: ['Unity', 'C#', 'Unity NavMesh', 'Rigidbody Physics', 'Casual'],
        links: [
            { text: 'View Repository', url: 'https://github.com/Dzuujects/F20GP_CW1-AnimalFarm' },
            { text: 'View Live Demo', url: 'https://dzuu.itch.io/animal-farm' }
        ]
    },

    // Software Projects
    'interactive-data-story': {
        type: 'software',
        title: 'Interactive Data Story',
        subtitle: 'East Asia & Pacific Demographic and Economic Dashboard',
        meta: 'Web Development | Data Analysis | JavaScript | D3 | Tableau | WorldBank Dataset',
        overview: 'A comprehensive data visualization dashboard built with React that displays real-time analytics from multiple data sources. The application features interactive charts, advanced filtering capabilities, and is fully responsive across devices. Users can customize views, export reports, and set up automated data alerts.',
        features: [
            'Regional GDP Stacked Area Chart with hover isolation',
            'Interactive Choropleth map with 12 switchable indicators and zoom/pan',
            'Year slider with play/pause temporal animation',
            'Bidirectionally synced Connected Scatter plots tracing country trajectories',
            'Dynamic summary and "about" panels reflecting user choices',
            'Extensive Exploratory Data Analysis (EDA) on World Bank data'
        ],
        challenges: [
            {
                title: 'Linking datasets',
                challenge: 'Required a way to show dataset connection visually',
                solution: ' Engineered bidirectional sync via vanilla JavaScript so that selecting a country in the Demographic scatter plot simultaneously updated the Social scatter plot.'
            },
            {
                title: 'Handling temporal animation',
                challenge: 'Wanted to show the changes in indicators throughout time.',
                solution: 'Utilized D3.js transitions linked to an interactive year slider to smoothly interpolate and animate data changes across an 18-year period on the Choropleth map.'
            },
            {
                title: 'Preparing raw data',
                challenge: 'Data was picked from WorldBank datasets and required preparation',
                solution: 'Performed extensive data cleaning, transformation, and analysis on raw World Bank datasets to ensure seamless ingestion by the D3.js frontend logic.'
            }
        ],
        images: [
            { src: 'Images/Screenshot 2026-04-18 141658.png', alt: 'Data Dashboard - Introduction' },
            { src: 'Images/Screenshot 2026-04-18 141838.png', alt: 'Data Dashboard - Chloropleth' },
            { src: 'Images/Screenshot 2026-04-18 142403.png', alt: 'Data Dashboard - Bidirectional Charts' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
        techs: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'Tableau', 'WorldBank Dataset'],
        links: [
            { text: 'View Repository', url: 'https://github.com/Dzuujects/f-20-dv-ed-group-4-main' }
        ]
    },
    'smart-home-system': {
        type: 'software',
        title: 'Smart Home System',
        subtitle: 'Full-stack platform with authentication and payment integration',
        meta: 'Full-Stack Development | Node.js | ChartJS | Database Systems',
        overview: 'A complete full-stack e-commerce platform featuring user authentication, comprehensive product catalog management, shopping cart functionality, and secure payment integration. The application implements RESTful APIs, role-based access control, and includes an admin dashboard for inventory management.',
        features: [
            'Real-time energy usage and generation monitoring',
            'Remote control interface for household electronics',
            'Database-to-frontend connectivity',
            'Data visualization via interactive graphs',
            'Responsive frontend UI dashboard'
        ],
        challenges: [
            {
                title: 'Visualizing complex data',
                challenge: 'Energy usage and generation needed to be shown in real time.',
                solution: 'Integrated ChartJS to translate raw database outputs into clean, easily readable graphs for the end-user..'
            },
            {
                title: 'Team coordination and communication',
                challenge: 'Team required a communication point between members and line manager.',
                solution: 'Acted as a central liaison between the 8-person development team and the line manager, streamlining the software engineering process.'
            },
            {
                title: 'Bridging frontend and backend',
                challenge: 'Data needed to be funnelled from database to the charts',
                solution: ' Developed strict data formatting protocols to ensure the database fed information seamlessly to the frontend visualization components without lag.'
            }
        ],
        images: [
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Homepage', alt: 'Smart Home System - Home Page' },
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Product+Page', alt: 'Smart Home System - Device Control' },
            { src: 'https://via.placeholder.com/400x300?text=E-Commerce+Checkout', alt: 'Smart Home System - Multi user access' }
        ],
        video: null, // Replace with: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
        techs: ['Full-Stack Development', 'Node.js', 'ChartJS', 'Database Systems'],
        links: [
            { text: 'View Repository', url: 'https://github.com/iamreallyacar/Software-Engineering-SEM-2-Smart-Home-System' }
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