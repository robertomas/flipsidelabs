// ============================================
// ESTONIAN CRYPTO ICO LANDING PAGE - JAVASCRIPT
// Token Sale Countdown, Progress Bar, Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVIGATION & MOBILE MENU
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Smooth scroll
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
    
    // ============================================
    // COUNTDOWN TIMER
    // ============================================
    
    function initCountdown() {
        // Set end date (12 days from now for demo)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 12);
        endDate.setHours(23, 59, 59, 999);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endDate - now;
            
            if (distance < 0) {
                // Countdown finished
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
            
            // Add animation on change
            [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => {
                el.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    el.style.transform = 'scale(1)';
                }, 200);
            });
        }
        
        // Update immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    initCountdown();
    
    // ============================================
    // TOKEN SALE PROGRESS BAR
    // ============================================
    
    function animateProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (!progressBar) return;
        
        const targetProgress = parseInt(progressBar.getAttribute('data-progress') || 65);
        
        // Animate on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        progressBar.style.width = targetProgress + '%';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(progressBar.parentElement);
    }
    
    animateProgressBar();
    
    // ============================================
    // PARTICLES BACKGROUND
    // ============================================
    
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const left = Math.random() * 100;
            const animationDuration = 10 + Math.random() * 20;
            const animationDelay = Math.random() * 5;
            const size = 2 + Math.random() * 4;
            
            particle.style.cssText = `
                position: absolute;
                left: ${left}%;
                top: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                background: rgba(0, 255, 163, ${0.2 + Math.random() * 0.3});
                border-radius: 50%;
                animation: float ${animationDuration}s ease-in-out ${animationDelay}s infinite;
            `;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    createParticles();
    
    // ============================================
    // COPY TO CLIPBOARD (Smart Contract Address)
    // ============================================
    
    const copyButtons = document.querySelectorAll('.btn-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show success feedback
                const originalHTML = this.innerHTML;
                this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
                this.style.color = '#00FFA3';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .tokenomics-chart,
        .tokenomics-details,
        .roadmap-item,
        .team-member,
        .whitepaper-card,
        .faq-item
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(el);
    });
    
    // ============================================
    // TOKENOMICS PIE CHART ANIMATION
    // ============================================
    
    function animatePieChart() {
        const pieChart = document.querySelector('.pie-chart');
        if (!pieChart) return;
        
        const circles = pieChart.querySelectorAll('circle');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    circles.forEach((circle, index) => {
                        setTimeout(() => {
                            circle.style.transition = 'stroke-dasharray 1s ease';
                            circle.style.strokeDasharray = circle.getAttribute('stroke-dasharray');
                        }, index * 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(pieChart);
    }
    
    animatePieChart();
    
    // ============================================
    // COUNTER ANIMATIONS (Stats)
    // ============================================
    
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
            
            if (isNaN(numericValue)) return;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let current = 0;
                        const increment = numericValue / 50;
                        const prefix = target.match(/^\$/)?.[0] || '';
                        
                        const updateCounter = () => {
                            current += increment;
                            if (current < numericValue) {
                                counter.textContent = prefix + current.toFixed(2);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target;
                            }
                        };
                        
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    animateCounters();
    
    // ============================================
    // FAQ ACCORDION (Optional Enhancement)
    // ============================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Optional: Add click to expand/collapse
        // (Currently showing all answers by default)
        question.style.cursor = 'pointer';
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all other items (accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                }
            });
            
            // Toggle current item
            if (isOpen) {
                item.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
        
        // Set initial state (all open for crypto transparency)
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    });
    
    // ============================================
    // ROADMAP TIMELINE ANIMATION
    // ============================================
    
    function animateRoadmap() {
        const roadmapLine = document.querySelector('.roadmap-timeline::before');
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        
        roadmapItems.forEach((item, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                            
                            // Animate dot
                            const dot = item.querySelector('.roadmap-dot');
                            if (dot) {
                                dot.style.transform = 'scale(1)';
                            }
                        }, index * 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            // Set initial state
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = 'all 0.6s ease';
            
            const dot = item.querySelector('.roadmap-dot');
            if (dot) {
                dot.style.transform = 'scale(0)';
                dot.style.transition = 'transform 0.4s ease';
            }
            
            observer.observe(item);
        });
    }
    
    animateRoadmap();
    
    // ============================================
    // TEAM MEMBER HOVER EFFECTS
    // ============================================
    
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const memberImage = member.querySelector('.member-image');
        
        member.addEventListener('mouseenter', () => {
            // Darken image to show social links
            if (memberImage) {
                memberImage.style.filter = 'brightness(0.4)';
            }
        });
        
        member.addEventListener('mouseleave', () => {
            if (memberImage) {
                memberImage.style.filter = 'brightness(1)';
            }
        });
    });
    
    // ============================================
    // SMOOTH REVEAL ON LOAD
    // ============================================
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });
    
    // ============================================
    // PARALLAX EFFECT (Hero Section)
    // ============================================
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero-content');
                
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    // ============================================
    // WHITEPAPER DOWNLOAD TRACKING
    // ============================================
    
    const whitepaperLinks = document.querySelectorAll('a[href*="whitepaper"], a[download]');
    
    whitepaperLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Track download event (integrate with your analytics)
            console.log('Whitepaper download initiated');
            
            // Optional: Show thank you message
            setTimeout(() => {
                const message = document.createElement('div');
                message.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    padding: 20px 30px;
                    background: linear-gradient(135deg, #00FFA3, #03E1FF);
                    color: #0A0E27;
                    border-radius: 12px;
                    font-weight: 600;
                    z-index: 10000;
                    animation: slideIn 0.5s ease;
                `;
                message.textContent = '✓ Whitepaper download started!';
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                }, 3000);
            }, 500);
        });
    });
    
    // ============================================
    // KEYBOARD ACCESSIBILITY
    // ============================================
    
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            if (navLinks) navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        }
    });
    
    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ============================================
    // CONSOLE BRANDING
    // ============================================
    
    console.log(
        '%c🚀 ChainOS Token Sale Live!',
        'color: #00FFA3; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(0,255,163,0.5);'
    );
    console.log(
        '%cBuilt for Estonian crypto startups 🇪🇪',
        'color: #03E1FF; font-size: 14px;'
    );
    console.log(
        '%cDesigned by FlipSideLabs',
        'color: #B4B4C8; font-size: 12px;'
    );
    
    // ============================================
    // DYNAMIC PRICING UPDATE (Optional)
    // ============================================
    
    // If you want to fetch real-time token price from API
    async function updateTokenPrice() {
        try {
            // Replace with your actual API endpoint
            // const response = await fetch('https://api.yourproject.io/token-price');
            // const data = await response.json();
            // 
            // document.querySelectorAll('.stat-value').forEach(el => {
            //     if (el.textContent.includes('$')) {
            //         el.textContent = '$' + data.currentPrice;
            //     }
            // });
        } catch (error) {
            console.error('Failed to fetch token price:', error);
        }
    }
    
    // Update price every 30 seconds (optional)
    // setInterval(updateTokenPrice, 30000);
    
    // ============================================
    // SMART CONTRACT INTERACTION (Web3)
    // ============================================
    
    // Example Web3 integration (requires Web3.js or Ethers.js)
    /*
    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                console.log('Connected wallet:', accounts[0]);
                // Update UI to show connected state
            } catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        } else {
            alert('Please install MetaMask to participate in the token sale!');
        }
    }
    
    // Add event listener to "Buy Tokens" button
    document.querySelectorAll('a[href="#buy-tokens"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            connectWallet();
        });
    });
    */
    
});

// ============================================
// ADDITIONAL UTILITY FUNCTIONS
// ============================================

// Format large numbers (e.g., 1000000 => 1M)
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Calculate time remaining
function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// Validate Ethereum address
function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// ============================================
// EXPORT FOR MODULE USAGE (Optional)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatNumber,
        getTimeRemaining,
        isValidAddress
    };
}

