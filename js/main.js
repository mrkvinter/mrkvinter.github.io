// --- Data Storage ---

// Experience Data (Quest Log)
const experienceData = [
    {
        id: 'perfectplay',
        role: 'Senior Unity Developer',
        company: 'Perfect Play',
        date: 'Apr 2024 - Present',
        summary: 'Full-cycle feature development and CI/CD stabilization.',
        tasks: [
            'Implemented key systems: Battle Route, MVP & Battle Stats (UI/Animations).',
            'Conducted Code/Lead Reviews and task decomposition.',
            'Developed internal tools: cheat panels, MessagePack Viewer.',
            'Optimized scripting, timers, and the build process.',
            'Resolved critical bugs (NREs, freezes, crashes).'
        ],
        stack: ['Unity', 'C#', 'TeamCity', 'UniTask', 'FMOD', 'Addressables']
    },
    {
        id: 'colossi',
        role: 'Senior Unity C# Developer',
        company: 'Colossi Games',
        date: 'Sep 2022 - Nov 2023',
        summary: 'Development of Action RPG mechanics and engagement systems.',
        tasks: [
            'Ranking System: Developed a competitive ranking system.',
            'Battle Pass: Implemented the Battle Pass system and its UI.',
            'Perks & Attributes: Created a flexible perk system to deepen gameplay.',
            'Game Events: Developed a dynamic event system for player retention.',
            'Developed UI, player abilities, and editor tools.'
        ],
        stack: ['Action RPG', 'UI Systems', 'Ranking', 'Battle Pass']
    },
    {
        id: 'owlcat',
        role: 'Senior Unity Developer',
        company: 'Owlcat Games',
        date: 'Oct 2021 - Jan 2022',
        summary: 'Worked on the large-scale CRPG Warhammer 40,000: Rogue Trader.',
        tasks: [
            'Developed console game systems in Unity.',
            'Designed application architecture.',
            'Wrote a testing framework.',
            'Conducted technical interviews.'
        ],
        stack: ['CRPG', 'Architecture', 'Testing Framework', 'Console Dev']
    },
    {
        id: 'tinybuild',
        role: 'Senior Unity C# Developer',
        company: 'tinyBuild',
        date: 'Jan 2020 - Oct 2021',
        summary: 'Hello Engineer. Refactoring and implementation of industry standards.',
        tasks: [
            'Rewrote the architecture, decoupling "spaghetti code" into independent modules.',
            'Implemented Gitflow, Code Review, and CI practices.',
            'Developed core mechanics (player state machine, network synchronization, UI).',
            'Managed a sub-team (task decomposition, estimation).'
        ],
        stack: ['Refactoring', 'Networking', 'Architecture', 'Mentoring']
    },
    {
        id: 'skb-kontur',
        role: 'C# Developer',
        company: 'SKB Kontur',
        date: 'Jul 2016 - Jun 2019',
        summary: 'Developed desktop and cloud applications for user data migration.',
        tasks: [
            'Developed desktop applications (WinForms and WPF) with intuitive interfaces.',
            'Implemented cloud applications on ASP.NET for user data synchronization.',
            'Frontend development using React for web interfaces.',
            'Integrated various components to ensure reliable data migration.'
        ],
        stack: ['C#', 'WinForms', 'WPF', 'ASP.NET', 'React']
    }
];

// Project Data (Inventory)
const projectsData = [
    {
        title: 'Warhammer 40k: Rogue Trader',
        type: 'AAA/CRPG',
        role: 'Senior Dev',
        desc: 'A large-scale classic RPG. Contributed to the development of core architecture and systems.',
        link: 'https://store.steampowered.com/app/2186680/Warhammer_40000_Rogue_Trader/',
        icon: '⚔️',
        tags: ['game', 'work']
    },
    {
        title: 'Die to Play',
        type: 'Indie Roguelike',
        role: 'Lead/Solo',
        desc: 'A 2D game inside a 3D world — dice-based roguelike with horror elements. Managing the full development cycle solo, from concept to Steam launch.',
        link: 'https://store.steampowered.com/app/3784360/Die_to_Play/',
        icon: '🎲',
        tags: ['game', 'indie']
    },
    {
        title: 'Sharp Compose',
        type: 'Open Source',
        role: 'Author',
        desc: 'High-performance C# UI framework utilizing the MVU pattern. Custom UI system focused on performance and flexibility.',
        link: 'https://github.com/mrkvinter/sharp.compose',
        icon: '🛠️',
        tags: ['tool']
    },
    {
        title: 'Hello Engineer',
        type: 'Construction/Action',
        role: 'Senior Dev',
        desc: 'A machinery construction game. Performed a complete refactoring of the netcode and UI.',
        link: 'https://store.steampowered.com/app/1856190/Hello_Engineer/',
        icon: '⚙️',
        tags: ['game', 'work']
    },
    {
        title: 'Itch.io Tag Explorer',
        type: 'Developer Tool',
        role: 'Author',
        desc: 'Public web tool for researching itch.io tag rankings and game discoverability. Helps developers analyze visibility across tags with cached updates.',
        link: 'https://kvinter.games/dev/tag-explorer',
        icon: '🔍',
        tags: ['tool']
    },
    {
        title: 'Gladiators: Survival in Rome',
        type: 'Action RPG',
        role: 'Senior Dev',
        desc: 'Developed meta-gameplay, Battle Pass systems, and inventory mechanics.',
        link: 'https://store.steampowered.com/app/2295520/Gladiators_Survival_in_Rome/',
        icon: '🏛️',
        tags: ['game', 'work']
    },
    {
        title: 'Daisho: Survival of a Samurai',
        type: 'Action RPG',
        role: 'Senior Dev',
        desc: 'Action RPG set in a Japanese setting. Developed UI systems and in-game events.',
        link: 'https://store.steampowered.com/app/2502650/Daisho_Survival_of_a_Samurai/',
        icon: '👹',
        tags: ['game', 'work']
    },
    {
        title: 'TextAnimations',
        type: 'Unity Library',
        role: 'Author',
        desc: 'Library for fast, "juicy" text animations in Unity with a focus on Game Feel.',
        link: 'https://github.com/mrkvinter/KvinterGames.TextAnimations',
        icon: '🖋️',
        tags: ['tool']
    },
    {
        title: 'KingdomOS',
        type: 'Game Jam (48h)',
        role: 'Solo Dev',
        desc: '8th place in Ludum Dare 56 Compo. Solo Unity game built from scratch in 48 hours — rapid prototyping at its best.',
        link: 'https://github.com/mrkvinter/LD-56',
        icon: '👑',
        tags: ['game', 'indie']
    },
    {
        title: 'Divide By Sheep 2',
        type: 'Puzzle',
        role: 'Developer',
        desc: 'Mathematical puzzle game. Developed UI and core level logic.',
        link: 'https://store.steampowered.com/app/2678960/Divide_By_Sheep_2/',
        icon: '🐑',
        tags: ['game', 'work']
    }
];

// --- Logic ---

// 1. Initialize Radar Chart
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Unity UI (Toolkit/uGUI)', 'C# Architecture', 'Optimization & Memory', 'Gameplay Systems', 'Team Leadership', 'Networking'],
            datasets: [{
                label: 'Skill Level',
                data: [98, 93, 89, 84, 78, 84],
                fill: true,
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                borderColor: 'rgb(217, 119, 6)',
                pointBackgroundColor: 'rgb(68, 64, 60)', 
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(217, 119, 6)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    pointLabels: {
                        font: { size: 12, family: 'sans-serif' },
                        color: '#44403c'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 25, 23, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fbbf24'
                }
            }
        }
    });

    // Init Components
    renderExperienceList();
    renderProjects('all');
    
    // Auto-select first job
    selectExperience(experienceData[0].id);
});

// 2. Navigation Scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({
            top: el.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// 3. Experience Logic
function renderExperienceList() {
    const container = document.getElementById('exp-list');
    container.innerHTML = experienceData.map((job, index) => `
        <div onclick="selectExperience('${job.id}')" 
             id="exp-item-${job.id}"
             class="cursor-pointer p-4 border-b border-stone-100 hover:bg-stone-50 transition-colors ${index === 0 ? 'bg-amber-50 border-l-4 border-l-amber-500' : 'border-l-4 border-l-transparent'}">
            <h4 class="font-bold text-stone-800">${job.role}</h4>
            <div class="flex justify-between items-center mt-1">
                <span class="text-sm text-stone-600">${job.company}</span>
                <span class="text-xs text-stone-400">${job.date.split(' - ')[0]}</span>
            </div>
        </div>
    `).join('');
}

function selectExperience(id) {
    // Update List Styles
    experienceData.forEach(job => {
        const el = document.getElementById(`exp-item-${job.id}`);
        if (job.id === id) {
            el.className = "cursor-pointer p-4 border-b border-stone-200 bg-amber-50 border-l-4 border-l-amber-500 transition-colors";
        } else {
            el.className = "cursor-pointer p-4 border-b border-stone-100 hover:bg-stone-50 border-l-4 border-l-transparent transition-colors";
        }
    });

    // Update Detail Content
    const job = experienceData.find(j => j.id === id);
    
    document.getElementById('exp-placeholder').classList.add('hidden');
    const content = document.getElementById('exp-content');
    content.classList.remove('hidden');
    
    // Add animation class
    content.classList.remove('fade-in');
    void content.offsetWidth; // trigger reflow
    content.classList.add('fade-in');

    document.getElementById('detail-role').textContent = job.role;
    document.getElementById('detail-company').textContent = job.company;
    document.getElementById('detail-date').textContent = job.date;
    document.getElementById('detail-summary').textContent = job.summary;
    
    document.getElementById('detail-tasks').innerHTML = job.tasks.map(task => `<li>${task}</li>`).join('');
    
    document.getElementById('detail-stack').innerHTML = job.stack.map(tech => `
        <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-stone-200 text-stone-800">
            ${tech}
        </span>
    `).join('');
}

// 4. Projects Logic
function renderProjects(filter) {
    const grid = document.getElementById('projects-grid');
    const filtered = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.tags.includes(filter));
    
    grid.innerHTML = filtered.map(p => {
        const isGithub = p.link.includes('github.com');
        const isSteam = p.link.includes('steampowered.com');
        const buttonText = isGithub ? 'View on GitHub' : isSteam ? 'View in Store' : 'Open Project';
        return `
        <a href="${p.link}" target="_blank" class="block bg-white rounded-xl shadow-sm border border-stone-200 p-6 card-hover transition-transform duration-200 group h-full flex flex-col">
            <div class="flex justify-between items-start mb-4">
                <span class="text-4xl group-hover:scale-110 transition-transform">${p.icon}</span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-stone-100 text-stone-500 uppercase tracking-wide">
                    ${p.type}
                </span>
            </div>
            <h3 class="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">${p.title}</h3>
            <p class="text-stone-500 text-sm mb-4 flex-grow">${p.desc}</p>
            <div class="flex items-center text-amber-600 text-sm font-medium">
                ${buttonText}
                <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </a>
    `;
    }).join('');
}

function filterProjects(category) {
    // Update Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if(btn.dataset.filter === category) {
            btn.classList.remove('bg-stone-100', 'text-stone-600');
            btn.classList.add('bg-stone-800', 'text-white');
        } else {
            btn.classList.remove('bg-stone-800', 'text-white');
            btn.classList.add('text-stone-600'); // Base hover handled by CSS
        }
    });
    renderProjects(category);
}
