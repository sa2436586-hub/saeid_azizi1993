document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach((span, i) => {
            if (navMenu.classList.contains('active')) {
                if (i === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (i === 1) span.style.opacity = '0';
                if (i === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // Articles Data
    const articles = [
        { title: "هوش مصنوعی در آموزش: فرصت‌ها و چالش‌ها", summary: "بررسی تأثیر هوش مصنوعی بر سیستم آموزشی و روش‌های تدریس", img: "https://picsum.photos/id/1015/600/300" },
        { title: "ChatGPT برای معلمان: راهنمای عملی", summary: "چگونه معلمان می‌توانند از ChatGPT برای افزایش بهره‌وری استفاده کنند", img: "https://picsum.photos/id/201/600/300" },
        { title: "بهترین ابزارهای هوش مصنوعی ۱۴۰۵", summary: "معرفی کاربردی‌ترین ابزارهای AI برای آموزش و تولید محتوا", img: "https://picsum.photos/id/237/600/300" },
        { title: "Prompt Engineering حرفه‌ای", summary: "تکنیک‌های پیشرفته نوشتن پرامپت برای نتایج بهتر", img: "https://picsum.photos/id/180/600/300" },
        { title: "آینده آموزش در عصر هوش مصنوعی", summary: "پیش‌بینی روندهای آموزشی تا سال ۲۰۳۰", img: "https://picsum.photos/id/251/600/300" },
        { title: "روش‌های نوین تدریس با AI", summary: "استراتژی‌های تدریس شخصی‌سازی شده با کمک هوش مصنوعی", img: "https://picsum.photos/id/133/600/300" },
        { title: "اخلاق در استفاده از هوش مصنوعی", summary: "ملاحظات اخلاقی در کاربرد AI در محیط آموزشی", img: "https://picsum.photos/id/201/600/300" },
        { title: "تولید محتوای آموزشی با هوش مصنوعی", summary: "راهنمای سریع تولید درس و تمرین با ابزارهای AI", img: "https://picsum.photos/id/1016/600/300" },
        { title: "یادگیری شخصی‌سازی‌شده", summary: "چگونه AI می‌تواند آموزش را برای هر دانش‌آموز شخصی کند", img: "https://picsum.photos/id/870/600/300" },
        { title: "فناوری آموزشی و تحول دیجیتال", summary: "نقش ابزارهای نوین در مدارس و دانشگاه‌ها", img: "https://picsum.photos/id/133/600/300" }
    ];

    // Populate Articles
    const articlesGrid = document.getElementById('articlesGrid');
    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card fade-in';
        card.innerHTML = `
            <img src="${article.img}" alt="${article.title}" loading="lazy">
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="#" class="btn btn-primary">مطالعه مقاله</a>
            </div>
        `;
        articlesGrid.appendChild(card);
    });

    // Counter Animation
    function animateCounter(id, target, duration = 2000) {
        const element = document.getElementById(id);
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                if (id === 'students') element.textContent = target + '+';
                else element.textContent = target + (id === 'hours' ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + (id === 'students' ? '+' : '');
            }
        }, 16);
    }

    // Trigger counters
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('hours', 200);
                animateCounter('projects', 50);
                animateCounter('students', 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);

    // Fade in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Back to top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});