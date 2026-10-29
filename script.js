// 1. ТЕКУЩИЙ ГОД ВНИЗУ САЙТА
const yearEl = document.querySelector('#year');
yearEl.textContent = new Date().getFullYear();

// 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ)
// Русские тексты уже есть в HTML; здесь храним их английский перевод.
const englishTexts = {
    skip: 'Skip to content', navAbout: 'About', navSkills: 'Skills',
    navEducation: 'Education', navProjects: 'Projects', navContacts: 'Contacts',
    hello: 'Hi! Welcome to my portfolio 👋', name: 'Yumzhitov Solbon', subtitle: 'Programming student',
    heroText: 'I am learning web development and working on my first projects.',
    heroProjects: 'My projects', aboutTitle: 'About me',
    aboutText: 'Hi! My name is Solbon. I study programming at Buryat State University College in Ulan-Ude. I am interested in websites and applications. I am currently learning HTML, CSS and JavaScript and trying to make pages clear and easy to use.',
    aboutText2: 'This is my student portfolio with my skills, practice projects and contact information.',
    skillsTitle: 'My skills', skillPython: 'Simple programs and data processing',
    skillCppTitle: 'C# and C++', skillSqlTitle: 'SQL and PHP',
    skillCpp: 'Programming fundamentals', skillSql: 'Basic queries and web applications',
    skillWeb: 'Learning user interface development',
    skillsNote: 'My skill level ranges from beginner to intermediate. I keep learning and practicing.',
    educationTitle: 'Education', collegeTitle: 'BSU College',
    collegeText: 'Ulan-Ude. Studying in a programming-related program.',
    timelineTitle: 'My coding journey', step1Title: 'College education',
    step1Text: 'Studying programming at BSU College.',
    step2Title: 'Programming languages', step2Text: 'Getting familiar with Python, C#, C++, SQL and PHP.',
    step3Title: 'Web development', step3Text: 'Learning HTML, CSS and JavaScript in class.',
    step4Title: 'My first portfolio', step4Text: 'Using what I learned to create this website.',
    projectsTitle: 'Study projects',
    projectsIntro: 'A few examples of what I am learning. You can search, filter and open project details.',
    searchLabel: 'Search projects', filterAll: 'All',
    project1Title: 'Personal portfolio',
    project1Text: 'This responsive resume website has a dark mode and a contact form.',
    project2Title: 'HTML and CSS practice',
    project2Text: 'Practice pages with headings, images, links and cards.',
    project3Title: 'Working with the GitHub API',
    project3Text: 'Using fetch() to retrieve GitHub profile data. Try it below.',
    details: 'Learn more', noProjects: 'No projects match your search.',
    sliderTitle: 'Interface examples',
    sliderIntro: 'Simple illustrations of elements from this study website. The slider uses plain JavaScript.',
    slide1Title: 'Home page', slide1Text: 'HTML markup and responsive CSS styling.',
    slide2Title: 'Skill cards', slide2Text: 'CSS Grid, Flexbox, colors and spacing.',
    slide3Title: 'Getting data', slide3Text: 'An example of fetch(), API and JSON from class.',
    apiTitle: 'A little API practice',
    apiText: 'Two examples from class: loading a GitHub profile and a random fact from an API.',
    githubTitle: '💻 My GitHub',
    githubText: 'My username is chewyki. Data loads without refreshing the page.',
    githubLabel: 'GitHub username', githubButton: 'Find profile',
    githubWaiting: 'Profile information will appear here.',
    factTitle: '🐱 Random fact',
    factIntro: 'An example using catfact.ninja from class. If the API is unavailable, a local fact is shown.',
    factWaiting: 'Click the button to load a fact.', factButton: 'New fact',
    reposTitle: 'My public repositories',
    reposText: 'Loaded from GitHub using its API. If the network is unavailable, follow the link to GitHub.',
    contactTitle: 'Get in touch',
    contactIntro: 'You can message me on social media or by email.',
    copyEmail: 'Copy email', formTitle: 'Contact form',
    formIntro: 'Use the form below to prepare a message in your email application.',
    nameLabel: 'Your name', emailLabel: 'Your email', messageLabel: 'Message',
    sendButton: 'Write an email',
    footer: 'Yumzhitov Solbon. A student project made with HTML, CSS and JavaScript.'
};

const placeholdersEn = {
    searchPlaceholder: 'For example, GitHub or HTML',
    namePlaceholder: 'What is your name?',
    messagePlaceholder: 'Write your message...'
};

const messages = {
    ru: {
        projectCount: 'Найдено проектов: ', tech: 'Технологии: ',
        githubLoading: 'Загружаю профиль...', githubRepos: ' · репозиториев: ',
        githubOpen: 'Открыть GitHub', githubError: 'Данные через API сейчас недоступны. ',
        githubFallback: 'Открыть профиль на GitHub',
        repoLoading: 'Загружаю репозитории...', repoEmpty: 'Публичных репозиториев пока нет.',
        repoError: 'Не удалось загрузить репозитории. ', repoFallback: 'Посмотреть на GitHub',
        repoNoDescription: 'Описание не добавлено',
        repoLanguage: 'Язык: ',
        factLoading: 'Загружаю факт...',
        facts: ['Кошки могут проводить во сне большую часть суток.', 'У каждой кошки свой рисунок на носу.', 'Усы помогают кошкам ориентироваться в пространстве.'],
        formRequired: 'Заполните все поля формы.', formSending: 'Отправляю сообщение...',
        formSent: 'Сообщение отправлено!', formError: 'Не удалось отправить сообщение. Попробуйте позже.',
        mailReady: 'Откроется почтовая программа. Проверьте письмо перед отправкой.',
        formNoEndpoint: 'Форма готова, но адрес получателя пока не указан.',
        mailSubject: 'Сообщение с сайта от ', copied: 'Почта скопирована!',
        copyFallback: 'Скопируйте адрес вручную: zxcgoul67@mail.ru'
    },
    en: {
        projectCount: 'Projects found: ', tech: 'Technologies: ',
        githubLoading: 'Loading profile...', githubRepos: ' · repositories: ',
        githubOpen: 'Open GitHub', githubError: 'The GitHub API is currently unavailable. ',
        githubFallback: 'Open profile on GitHub',
        repoLoading: 'Loading repositories...', repoEmpty: 'No public repositories yet.',
        repoError: 'Unable to load repositories. ', repoFallback: 'View on GitHub',
        repoNoDescription: 'No description', repoLanguage: 'Language: ',
        factLoading: 'Loading a fact...',
        facts: ['Cats can spend much of the day sleeping.', 'Each cat has a unique nose pattern.', 'Whiskers help cats navigate their surroundings.'],
        formRequired: 'Please complete all fields.', formSending: 'Sending message...',
        formSent: 'Message sent!', formError: 'Could not send the message. Please try again.',
        mailReady: 'Your email app will open. Please review the email before sending.',
        formNoEndpoint: 'The form is ready, but no recipient was configured.',
        mailSubject: 'Message from the website by ', copied: 'Email copied!',
        copyFallback: 'Copy this address manually: zxcgoul67@mail.ru'
    }
};

let currentLanguage = localStorage.getItem('language') === 'en' ? 'en' : 'ru';
const originalTexts = {};
document.querySelectorAll('[data-i18n]').forEach((item) => {
    originalTexts[item.dataset.i18n] = item.textContent;
});
const originalPlaceholders = {};
document.querySelectorAll('[data-placeholder]').forEach((item) => {
    originalPlaceholders[item.dataset.placeholder] = item.placeholder;
});

function tr(key) {
    return messages[currentLanguage][key];
}

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((item) => {
        const key = item.dataset.i18n;
        item.textContent = language === 'en' ? englishTexts[key] : originalTexts[key];
    });

    document.querySelectorAll('[data-placeholder]').forEach((item) => {
        const key = item.dataset.placeholder;
        item.placeholder = language === 'en' ? placeholdersEn[key] : originalPlaceholders[key];
    });

    const langBtn = document.querySelector('#lang-toggle');
    langBtn.textContent = language === 'en' ? 'RU' : 'EN';
    langBtn.setAttribute('aria-label', language === 'en' ? 'Переключить на русский' : 'Switch to English');
    document.querySelector('nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Основное меню');
    document.querySelector('.avatar').alt = language === 'en' ? 'Solbon’s illustrated avatar' : 'Рисованный аватар Солбона';
    document.querySelector('#slide-prev').setAttribute('aria-label', language === 'en' ? 'Previous slide' : 'Предыдущий слайд');
    document.querySelector('#slide-next').setAttribute('aria-label', language === 'en' ? 'Next slide' : 'Следующий слайд');
    document.querySelector('.slider-dots').setAttribute('aria-label', language === 'en' ? 'Choose a slide' : 'Выбор слайда');
    sliderDots.forEach((dot, index) => {
        dot.setAttribute('aria-label', (language === 'en' ? 'Slide ' : 'Слайд ') + (index + 1));
    });
    updateThemeButton();
    filterProjects();
    document.querySelector('#copy-status').textContent = '';
    // Динамические данные тоже обновятся на выбранном языке.
    loadGitHub(githubInput.value.trim() || 'chewyki');
    loadRepositories(githubInput.value.trim() || 'chewyki');
}

document.querySelector('#lang-toggle').addEventListener('click', () => {
    setLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
});

// 3. НОЧНОЙ РЕЖИМ
const themeBtn = document.querySelector('#theme-toggle');

// Графитовая тема включена по умолчанию, но выбор посетителя запоминается.
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    document.documentElement.classList.add('dark');
}

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    const label = currentLanguage === 'en'
        ? (isDark ? 'Switch to light mode' : 'Switch to dark mode')
        : (isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
    themeBtn.setAttribute('aria-label', label);
    themeBtn.title = currentLanguage === 'en' ? 'Change theme' : 'Сменить тему';
    themeBtn.setAttribute('aria-pressed', String(isDark));
}

updateThemeButton();

themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton();
});

// 4. КНОПКА «НАВЕРХ»
const upBtn = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    upBtn.classList.toggle('visible', window.scrollY > 400);
});

upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. ПОИСК И ФИЛЬТРАЦИЯ ПРОЕКТОВ
const projectCards = document.querySelectorAll('.project-card');
const projectSearch = document.querySelector('#project-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsCount = document.querySelector('#projects-count');
const noProjects = document.querySelector('#no-projects');
let currentFilter = 'all';

function filterProjects() {
    const searchText = projectSearch.value.trim().toLowerCase();
    let count = 0;

    projectCards.forEach((card) => {
        const matchesFilter = currentFilter === 'all' || card.dataset.tech.includes(currentFilter);
        const matchesSearch = card.textContent.toLowerCase().includes(searchText);
        card.hidden = !(matchesFilter && matchesSearch);
        if (!card.hidden) count++;
    });

    projectsCount.textContent = tr('projectCount') + count;
    noProjects.hidden = count !== 0;
}

projectSearch.addEventListener('input', filterProjects);

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        filterButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle('active', active);
            item.setAttribute('aria-pressed', String(active));
        });
        filterProjects();
    });
});

// 6. МОДАЛЬНОЕ ОКНО С ПОДРОБНОСТЯМИ
// Используем объект с текстами, как в лекции про типы данных.
const projectInfo = {
    portfolio: {
        title: 'Личное портфолио',
        description: 'Мой сайт-резюме. Здесь использованы HTML-разметка, CSS Grid и Flexbox, форма, переключение темы и JavaScript-события.',
        technologies: 'HTML, CSS, JavaScript'
    },
    html: {
        title: 'Практика HTML и CSS',
        description: 'Небольшие учебные примеры: заголовки, списки, ссылки, изображения и оформление карточек с помощью CSS.',
        technologies: 'HTML, CSS'
    },
    github: {
        title: 'Работа с GitHub API',
        description: 'При вводе логина сайт делает запрос fetch, получает JSON и показывает открытые данные профиля. Ошибки обрабатываются через try/catch.',
        technologies: 'JavaScript, fetch, API, JSON'
    }
};

const projectInfoEn = {
    portfolio: {
        title: 'Personal portfolio',
        description: 'My resume website uses semantic HTML, CSS Grid, Flexbox, a form, theme switching and JavaScript events.',
        technologies: 'HTML, CSS, JavaScript'
    },
    html: {
        title: 'HTML and CSS practice',
        description: 'Small examples with headings, lists, links, images and CSS cards.',
        technologies: 'HTML, CSS'
    },
    github: {
        title: 'GitHub API practice',
        description: 'Enter a GitHub username to send a fetch request, read JSON and display public profile data. Errors are handled with try/catch.',
        technologies: 'JavaScript, fetch, API, JSON'
    }
};

const projectDialog = document.querySelector('#project-dialog');
const closeDialog = document.querySelector('#close-dialog');

document.querySelectorAll('.details-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const project = (currentLanguage === 'en' ? projectInfoEn : projectInfo)[button.dataset.project];
        document.querySelector('#dialog-title').textContent = project.title;
        document.querySelector('#dialog-description').textContent = project.description;
        document.querySelector('#dialog-technologies').textContent = tr('tech') + project.technologies;
        projectDialog.showModal();
    });
});

closeDialog.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', (event) => {
    if (event.target === projectDialog) projectDialog.close();
});

// 7. ПОЯВЛЕНИЕ КАРТОЧЕК ПРИ ПРОКРУТКЕ
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('shown');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach((card) => {
        card.classList.add('reveal');
        observer.observe(card);
    });
}

// 8. СЛАЙДЕР БЕЗ БИБЛИОТЕК
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, number) => {
        const active = number === currentSlide;
        slide.hidden = !active;
        slide.classList.toggle('active', active);
    });
    sliderDots.forEach((dot, number) => {
        const active = number === currentSlide;
        dot.classList.toggle('active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
    });
}

document.querySelector('#slide-prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('#slide-next').addEventListener('click', () => showSlide(currentSlide + 1));
sliderDots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.slideTo)));
});
showSlide(0);

// 9. ЗАГРУЗКА ПРОФИЛЯ GITHUB ЧЕРЕЗ API
const githubForm = document.querySelector('#github-form');
const githubInput = document.querySelector('#github-login');
const githubBtn = document.querySelector('#github-btn');
const githubBox = document.querySelector('#github-box');

githubForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const login = githubInput.value.trim();
    if (login) {
        localStorage.setItem('githubLogin', login);
        loadGitHub(login);
        loadRepositories(login);
    }
});

async function loadGitHub(login) {
    githubBtn.disabled = true;
    githubBox.textContent = tr('githubLoading');

    try {
        const response = await fetch('https://api.github.com/users/' + encodeURIComponent(login));

        // fetch не считает ответ 404 ошибкой, поэтому проверяем отдельно.
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }

        const user = await response.json();
        githubBox.innerHTML = '';

        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.alt = 'Аватар пользователя ' + user.login;
        img.width = 64;
        img.height = 64;

        const info = document.createElement('p');
        info.textContent = (user.name || user.login) + tr('githubRepos') + user.public_repos;

        const link = document.createElement('a');
        link.href = user.html_url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = tr('githubOpen');

        githubBox.append(img, info, link);
    } catch (error) {
        githubBox.textContent = tr('githubError');

        const link = document.createElement('a');
        link.href = 'https://github.com/' + encodeURIComponent(login);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = tr('githubFallback');
        githubBox.append(link);
        console.error(error);
    } finally {
        githubBtn.disabled = false;
    }
}

// 10. ПУБЛИЧНЫЕ РЕПОЗИТОРИИ — ТОЖЕ ПРИМЕР FETCH + JSON
const repoList = document.querySelector('#repo-list');

async function loadRepositories(login) {
    repoList.textContent = tr('repoLoading');

    try {
        const url = 'https://api.github.com/users/' + encodeURIComponent(login) + '/repos?sort=updated&per_page=4';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }
        const repositories = await response.json();
        repoList.innerHTML = '';

        if (!repositories.length) {
            repoList.textContent = tr('repoEmpty');
            return;
        }

        repositories.forEach((repo) => {
            const card = document.createElement('article');
            card.className = 'repo-card';

            const link = document.createElement('a');
            link.href = repo.html_url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = repo.name + ' ↗';

            const description = document.createElement('p');
            description.textContent = repo.description || tr('repoNoDescription');

            const lang = document.createElement('small');
            lang.textContent = tr('repoLanguage') + (repo.language || '—');

            card.append(link, description, lang);
            repoList.append(card);
        });
    } catch (error) {
        repoList.textContent = tr('repoError');
        const link = document.createElement('a');
        link.href = 'https://github.com/' + encodeURIComponent(login) + '?tab=repositories';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = tr('repoFallback');
        repoList.append(link);
        console.error(error);
    }
}

// Если посетитель уже искал профиль, покажем его снова.
const savedLogin = localStorage.getItem('githubLogin') || 'chewyki';
githubInput.value = savedLogin;

// 11. СЛУЧАЙНЫЙ ФАКТ ИЗ API (ПРИМЕР ИЗ ЛЕКЦИИ)
const factBtn = document.querySelector('#fact-btn');
const factText = document.querySelector('#fact-text');

async function loadFact() {
    factBtn.disabled = true;
    factText.textContent = tr('factLoading');

    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }
        const data = await response.json();
        factText.textContent = data.fact;
    } catch (error) {
        const facts = tr('facts');
        const index = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[index];
        console.error(error);
    } finally {
        factBtn.disabled = false;
    }
}

factBtn.addEventListener('click', loadFact);

// 12. КОПИРОВАНИЕ ПОЧТЫ
document.querySelector('#copy-email').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
        let copied = false;
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText('zxcgoul67@mail.ru');
                copied = true;
            } catch (error) {
                // В некоторых браузерах доступ к буферу обмена запрещён.
            }
        }
        if (!copied) {
            // Запасной вариант для браузеров без Clipboard API.
            const field = document.createElement('textarea');
            field.value = 'zxcgoul67@mail.ru';
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.append(field);
            field.select();
            copied = document.execCommand('copy');
            field.remove();
            if (!copied) throw new Error('Copy failed');
        }
        status.textContent = tr('copied');
    } catch (error) {
        status.textContent = tr('copyFallback');
    }
});

// 13. ФОРМА ОБРАТНОЙ СВЯЗИ
// Адрес получателя письма (открывается почтовая программа).
const CONTACT_EMAIL = 'zxcgoul67@mail.ru';

// Необязательно: если настроите Formspree, впишите сюда адрес своей формы.
// Тогда сообщение будет отправляться через fetch, как в лекции про API.
const FORM_ENDPOINT = '';

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const sendBtn = document.querySelector('#send-btn');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        name: document.querySelector('#name').value.trim(),
        email: document.querySelector('#email').value.trim(),
        message: document.querySelector('#msg').value.trim()
    };

    if (!data.name || !data.email || !data.message) {
        formStatus.textContent = tr('formRequired');
        return;
    }

    if (FORM_ENDPOINT) {
        sendBtn.disabled = true;
        formStatus.textContent = tr('formSending');

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Ошибка сервера: ' + response.status);
            }

            formStatus.textContent = tr('formSent');
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = tr('formError');
            console.error(error);
        } finally {
            sendBtn.disabled = false;
        }
    } else if (CONTACT_EMAIL) {
        const subject = encodeURIComponent(tr('mailSubject') + data.name);
        const body = encodeURIComponent(data.message + '\n\nОт: ' + data.name + '\nE-mail: ' + data.email);
        window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
        formStatus.textContent = tr('mailReady');
    } else {
        formStatus.textContent = tr('formNoEndpoint');
    }
});

// После загрузки HTML применяем сохранённый язык.
setLanguage(currentLanguage);
