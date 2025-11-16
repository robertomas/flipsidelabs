// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// ============================================
// LANGUAGE SWITCHER
// ============================================

const languageSwitcher = document.querySelector('.language-switcher');
const langBtn = document.querySelector('.lang-btn');

if (langBtn && languageSwitcher) {
    // Toggle dropdown on button click
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSwitcher.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageSwitcher.contains(e.target)) {
            languageSwitcher.classList.remove('active');
        }
    });

    // Close dropdown when selecting a language
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            languageSwitcher.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// GHL Form is now embedded via iframe - no form handling needed
// All submissions go directly to GoHighLevel CRM

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.problem-card, .service-card, .package-card, .why-card, .use-case-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 968px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(10, 14, 39, 0.98);
            flex-direction: column;
            padding: 2rem;
            transition: left 0.3s ease;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('%')) {
                    const num = parseInt(text);
                    animateCounter(stat, num);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 2000);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Matomo Goal Tracking
// Make sure _paq is available
var _paq = window._paq = window._paq || [];

// Goal 1: Track Free Consultation Bookings
document.querySelectorAll('a[href*="bookings/roberto-mas"]').forEach(link => {
    link.addEventListener('click', () => {
        _paq.push(['trackEvent', 'Conversion', 'Book Consultation', 'Free 30min Consultation']);
        _paq.push(['trackGoal', 1]); // Goal ID 1: Book Consultation
    });
});

// Goal 2: Track CTA Button Clicks (Get Started)
document.querySelectorAll('.btn-primary, .btn-primary-small').forEach(button => {
    button.addEventListener('click', () => {
        _paq.push(['trackEvent', 'CTA', 'Click', button.textContent.trim()]);
        _paq.push(['trackGoal', 2]); // Goal ID 2: CTA Click
    });
});

// Goal 3: Track Package Selection
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
        const packageName = card.querySelector('.package-name')?.textContent.trim();
        _paq.push(['trackEvent', 'Package', 'View', packageName]);
        _paq.push(['trackGoal', 3]); // Goal ID 3: Package Interest
    });
});

// Goal 4: Track Email Clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        _paq.push(['trackEvent', 'Contact', 'Email Click', link.href]);
        _paq.push(['trackGoal', 4]); // Goal ID 4: Email Click
    });
});

// Goal 5: Track Phone Clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        _paq.push(['trackEvent', 'Contact', 'Phone Click', link.href]);
        _paq.push(['trackGoal', 5]); // Goal ID 5: Phone Click
    });
});

// Goal 6: Track Scroll Depth
let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollPercent >= 25 && !scrollTracked['25']) {
        _paq.push(['trackEvent', 'Engagement', 'Scroll Depth', '25%']);
        scrollTracked['25'] = true;
    }
    if (scrollPercent >= 50 && !scrollTracked['50']) {
        _paq.push(['trackEvent', 'Engagement', 'Scroll Depth', '50%']);
        scrollTracked['50'] = true;
    }
    if (scrollPercent >= 75 && !scrollTracked['75']) {
        _paq.push(['trackEvent', 'Engagement', 'Scroll Depth', '75%']);
        _paq.push(['trackGoal', 6]); // Goal ID 6: Engaged User (75% scroll)
        scrollTracked['75'] = true;
    }
    if (scrollPercent >= 100 && !scrollTracked['100']) {
        _paq.push(['trackEvent', 'Engagement', 'Scroll Depth', '100%']);
        scrollTracked['100'] = true;
    }
});

// Goal 7: Track Time on Page (engaged users > 2 minutes)
setTimeout(() => {
    _paq.push(['trackEvent', 'Engagement', 'Time on Page', '2+ minutes']);
    _paq.push(['trackGoal', 7]); // Goal ID 7: Engaged User (2min+)
}, 120000); // 2 minutes

// Goal 8: Track Navigation Link Clicks
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('href');
        _paq.push(['trackEvent', 'Navigation', 'Section Click', section]);
    });
});

// Goal 9: Track FAQ Interactions
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const question = item.querySelector('.faq-question')?.textContent.trim();
        _paq.push(['trackEvent', 'FAQ', 'Question Click', question]);
    });
});

// Goal 10: Track Social Proof Engagement (Testimonials)
const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('matomo-tracked')) {
            entry.target.classList.add('matomo-tracked');
            _paq.push(['trackEvent', 'Engagement', 'Testimonials Viewed', 'Social Proof']);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.testimonial-card').forEach(card => {
    testimonialsObserver.observe(card);
});

// Goal 11: Track GHL Form Load (iframe)
const ghlForm = document.querySelector('iframe[id*="inline-"]');
if (ghlForm) {
    ghlForm.addEventListener('load', () => {
        _paq.push(['trackEvent', 'Form', 'GHL Form Loaded', 'Contact Form']);
    });
}

// ============================================
// TEMPLATES SECTION ANIMATIONS
// ============================================

// Animate template cards on scroll
const templateCards = document.querySelectorAll('.template-card');

if (templateCards.length > 0) {
    // Set initial state
    templateCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });

    // Intersection Observer for staggered animation
    const templateObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation with delay
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // 150ms delay between each card
                
                // Track template view
                const templateTitle = entry.target.querySelector('.template-title')?.textContent.trim();
                if (templateTitle) {
                    _paq.push(['trackEvent', 'Templates', 'Template Viewed', templateTitle]);
                }
                
                templateObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    templateCards.forEach(card => {
        templateObserver.observe(card);
    });
}

// Track template demo clicks
document.querySelectorAll('.btn-preview, .btn-template-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const templateCard = btn.closest('.template-card');
        const templateTitle = templateCard?.querySelector('.template-title')?.textContent.trim() || 'Unknown';
        _paq.push(['trackEvent', 'Templates', 'Demo Click', templateTitle]);
    });
});

// Track documentation clicks
document.querySelectorAll('.btn-template-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const templateCard = btn.closest('.template-card');
        const templateTitle = templateCard?.querySelector('.template-title')?.textContent.trim() || 'Unknown';
        _paq.push(['trackEvent', 'Templates', 'Documentation Click', templateTitle]);
    });
});

// Animate coming soon items
const comingSoonItems = document.querySelectorAll('.coming-soon-item');

if (comingSoonItems.length > 0) {
    comingSoonItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
    });

    const comingSoonObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.4s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 80); // 80ms delay
                
                comingSoonObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    comingSoonItems.forEach(item => {
        comingSoonObserver.observe(item);
    });
}

console.log('FlipSideLabs - Ready 🚀 | Matomo Tracking Active | 3 Templates Live ⚡');