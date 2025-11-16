// ============================================
// ESTONIAN SAAS LANDING PAGE - JAVASCRIPT
// Modern SaaS Template (Wise/Bolt/Pipedrive Style)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVIGATION & MOBILE MENU
    // ============================================
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Create mobile menu button if it doesn't exist
    if (!mobileMenuBtn && window.innerWidth <= 768) {
        const nav = document.querySelector('.nav-container');
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        nav.appendChild(menuBtn);
        
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Close mobile menu if open
                if (navLinks) navLinks.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // PRICING TOGGLE (MONTHLY/ANNUAL)
    // ============================================
    
    const pricingToggle = document.querySelector('.pricing-toggle');
    const pricingCards = document.querySelectorAll('.pricing-card[data-monthly-price]');
    
    if (pricingToggle) {
        const monthlyBtn = pricingToggle.querySelector('[data-period="monthly"]');
        const annualBtn = pricingToggle.querySelector('[data-period="annual"]');
        
        function updatePricing(period) {
            // Update button states
            monthlyBtn.classList.toggle('active', period === 'monthly');
            annualBtn.classList.toggle('active', period === 'annual');
            
            // Update pricing display
            pricingCards.forEach(card => {
                const priceElement = card.querySelector('.price');
                const monthlyPrice = card.dataset.monthlyPrice;
                const annualPrice = card.dataset.annualPrice;
                const billingAnnual = card.querySelector('.billing-annual');
                const billingMonthly = card.querySelector('.billing-monthly');
                
                if (priceElement && monthlyPrice && annualPrice) {
                    if (period === 'monthly') {
                        priceElement.textContent = monthlyPrice;
                        
                        // Toggle billing info
                        if (billingAnnual) billingAnnual.style.display = 'none';
                        if (billingMonthly) billingMonthly.style.display = 'block';
                        
                        // Hide savings badge
                        const savingsBadge = card.querySelector('.savings-badge');
                        if (savingsBadge) savingsBadge.style.display = 'none';
                    } else {
                        priceElement.textContent = annualPrice;
                        
                        // Toggle billing info
                        if (billingAnnual) billingAnnual.style.display = 'block';
                        if (billingMonthly) billingMonthly.style.display = 'none';
                        
                        // Show savings badge
                        const savings = Math.round((1 - (parseFloat(annualPrice) / parseFloat(monthlyPrice))) * 100);
                        if (savings > 0) {
                            let savingsBadge = card.querySelector('.savings-badge');
                            if (!savingsBadge) {
                                savingsBadge = document.createElement('div');
                                savingsBadge.className = 'savings-badge';
                                card.querySelector('.pricing-header').appendChild(savingsBadge);
                            }
                            savingsBadge.textContent = `Save ${savings}%`;
                            savingsBadge.style.display = 'block';
                        }
                    }
                }
            });
        }
        
        monthlyBtn.addEventListener('click', () => updatePricing('monthly'));
        annualBtn.addEventListener('click', () => updatePricing('annual'));
        
        // Set initial state to annual (default)
        updatePricing('annual');
    }
    
    // ============================================
    // VIDEO PLAYER FUNCTIONALITY
    // ============================================
    
    const videoContainer = document.querySelector('.video-demo');
    const playButton = document.querySelector('.play-button');
    
    if (videoContainer && playButton) {
        playButton.addEventListener('click', function() {
            // Option 1: Open video in modal (recommended for demo videos)
            const videoUrl = videoContainer.dataset.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'video-modal';
            modal.innerHTML = `
                <div class="video-modal-content">
                    <button class="video-modal-close">&times;</button>
                    <iframe 
                        src="${videoUrl}?autoplay=1" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen
                    ></iframe>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeBtn = modal.querySelector('.video-modal-close');
            closeBtn.addEventListener('click', () => modal.remove());
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });
            
            // Option 2: Replace with iframe (inline video)
            // videoContainer.innerHTML = `
            //     <iframe 
            //         src="${videoUrl}?autoplay=1" 
            //         frameborder="0" 
            //         allow="autoplay; fullscreen" 
            //         allowfullscreen
            //     ></iframe>
            // `;
        });
    }
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add stagger effect for groups
                if (entry.target.classList.contains('feature-card') || 
                    entry.target.classList.contains('testimonial-card') ||
                    entry.target.classList.contains('pricing-card')) {
                    
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .feature-card,
        .testimonial-card,
        .pricing-card,
        .integration-logo,
        .stats-grid,
        .cta-section
    `);
    
    animateElements.forEach(el => observer.observe(el));
    
    // ============================================
    // FORM HANDLING
    // ============================================
    
    const ctaForms = document.querySelectorAll('.cta-form');
    
    ctaForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            if (emailInput && emailInput.value) {
                // Show loading state
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                // Simulate API call (replace with your actual endpoint)
                setTimeout(() => {
                    // Success state
                    submitBtn.textContent = '✓ Success!';
                    submitBtn.style.background = '#10B981';
                    emailInput.value = '';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                    
                    // TODO: Replace with actual API call
                    // fetch('/api/signup', {
                    //     method: 'POST',
                    //     headers: {'Content-Type': 'application/json'},
                    //     body: JSON.stringify({ email: emailInput.value })
                    // });
                    
                }, 1500);
            }
        });
    });
    
    // ============================================
    // STICKY NAVIGATION
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // FLOATING CARDS ANIMATION (HERO)
    // ============================================
    
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Random float animation
        const randomDuration = 3 + Math.random() * 2;
        const randomDelay = Math.random() * 2;
        
        card.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
    
    // ============================================
    // COUNTER ANIMATION (STATS)
    // ============================================
    
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target || counter.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };
    
    // Observe stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => animateCounter(counter));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ============================================
    // PRICING CARD HOVER EFFECT
    // ============================================
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            pricingCards.forEach(c => {
                if (c !== this) c.style.opacity = '0.6';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            pricingCards.forEach(c => c.style.opacity = '1');
        });
    });
    
    // ============================================
    // COPY TO CLIPBOARD (OPTIONAL - for code snippets)
    // ============================================
    
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.dataset.code || this.previousElementSibling.textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
    
    // ============================================
    // KEYBOARD ACCESSIBILITY
    // ============================================
    
    document.addEventListener('keydown', (e) => {
        // ESC key closes modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('.video-modal');
            if (modal) modal.remove();
        }
    });
    
    // ============================================
    // PERFORMANCE OPTIMIZATIONS
    // ============================================
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ============================================
    // CONSOLE BRANDING (OPTIONAL)
    // ============================================
    
    console.log(
        '%c🚀 Estonian SaaS Template v1.0',
        'color: #667EEA; font-size: 16px; font-weight: bold;'
    );
    console.log(
        '%cBuilt with ❤️ for Estonian startups',
        'color: #64748B; font-size: 12px;'
    );
    
});

// ============================================
// ADDITIONAL CSS FOR ANIMATIONS (inject dynamically)
// ============================================

const style = document.createElement('style');
style.textContent = `
    /* Video Modal Styles */
    .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .video-modal-content {
        position: relative;
        width: 90%;
        max-width: 1200px;
        aspect-ratio: 16/9;
    }
    
    .video-modal-content iframe {
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }
    
    .video-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 32px;
        cursor: pointer;
        transition: transform 0.2s;
    }
    
    .video-modal-close:hover {
        transform: scale(1.2);
    }
    
    /* Animate In Class */
    .animate-in {
        animation: slideUp 0.6s ease forwards;
        opacity: 1 !important;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    /* Navbar scrolled state */
    .navbar.scrolled {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    /* Savings Badge */
    .savings-badge {
        position: absolute;
        top: -10px;
        right: 20px;
        background: linear-gradient(135deg, #10B981, #059669);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    /* Mobile Menu */
    .mobile-menu-btn {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
    }
    
    .mobile-menu-btn span {
        width: 24px;
        height: 2px;
        background: #1E293B;
        transition: all 0.3s ease;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translateY(8px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px);
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: flex;
        }
        
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);
