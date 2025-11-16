// ============================================
// ESTONIAN FINTECH LANDING PAGE - JAVASCRIPT
// Interactive Fee Calculator & Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // EXCHANGE RATES (Mock API - Replace with real API)
    // ============================================
    
    const exchangeRates = {
        EUR: {
            USD: 1.0955,
            GBP: 0.8520,
            CAD: 1.4650,
            AUD: 1.6320,
            JPY: 161.50,
            INR: 91.25,
            CHF: 0.9380
        },
        GBP: {
            USD: 1.2860,
            EUR: 1.1735,
            CAD: 1.7190,
            AUD: 1.9150,
            JPY: 189.50,
            INR: 107.10,
            CHF: 1.1010
        },
        USD: {
            EUR: 0.9128,
            GBP: 0.7775,
            CAD: 1.3370,
            AUD: 1.4895,
            JPY: 147.35,
            INR: 83.25,
            CHF: 0.8560
        },
        CHF: {
            EUR: 1.0660,
            GBP: 0.9085,
            USD: 1.1685,
            CAD: 1.5615,
            AUD: 1.7400,
            JPY: 172.15,
            INR: 97.25
        }
    };
    
    // Fee structure (percentage)
    const feeStructure = {
        standard: 0.0025, // 0.25%
        highVolume: 0.0030 // 0.30% for exotic currencies
    };
    
    // Transfer speed by currency
    const transferSpeed = {
        instant: ['EUR', 'GBP', 'USD'],
        fast: ['CAD', 'AUD', 'JPY', 'CHF'],
        standard: ['INR']
    };
    
    // ============================================
    // CALCULATOR FUNCTIONALITY
    // ============================================
    
    const sendAmountInput = document.getElementById('sendAmount');
    const receiveAmountInput = document.getElementById('receiveAmount');
    const sendCurrencySelect = document.getElementById('sendCurrency');
    const receiveCurrencySelect = document.getElementById('receiveCurrency');
    const swapButton = document.getElementById('swapCurrencies');
    const exchangeRateDisplay = document.getElementById('exchangeRate');
    const ourFeeDisplay = document.getElementById('ourFee');
    const transferTimeDisplay = document.getElementById('transferTime');
    const savingsDisplay = document.getElementById('savings');
    
    // Calculate transfer
    function calculateTransfer() {
        const sendAmount = parseFloat(sendAmountInput.value) || 0;
        const sendCurrency = sendCurrencySelect.value;
        const receiveCurrency = receiveCurrencySelect.value;
        
        // Get exchange rate
        let rate = 1;
        if (sendCurrency !== receiveCurrency) {
            rate = exchangeRates[sendCurrency]?.[receiveCurrency] || 1;
        }
        
        // Calculate fee
        const isHighVolume = ['INR', 'JPY'].includes(receiveCurrency);
        const feeRate = isHighVolume ? feeStructure.highVolume : feeStructure.standard;
        const feeAmount = sendAmount * feeRate;
        const feePercentage = (feeRate * 100).toFixed(2);
        
        // Calculate receive amount
        const amountAfterFee = sendAmount - feeAmount;
        const receiveAmount = amountAfterFee * rate;
        
        // Calculate savings vs traditional banks
        const traditionalBankFee = sendAmount * 0.03; // 3% typical bank fee
        const traditionalRateMarkup = sendAmount * 0.05; // 5% rate markup
        const traditionalTotal = traditionalBankFee + traditionalRateMarkup;
        const savings = traditionalTotal - feeAmount;
        
        // Update UI
        receiveAmountInput.value = receiveAmount.toFixed(2);
        
        // Exchange rate
        exchangeRateDisplay.textContent = `1 ${sendCurrency} = ${rate.toFixed(4)} ${receiveCurrency}`;
        
        // Our fee
        const currencySymbols = {
            EUR: '€',
            GBP: '£',
            USD: '$',
            CHF: 'CHF '
        };
        const symbol = currencySymbols[sendCurrency] || sendCurrency + ' ';
        ourFeeDisplay.textContent = `${symbol}${feeAmount.toFixed(2)} (${feePercentage}%)`;
        
        // Transfer time
        let speedIcon = '⚡';
        let speedText = 'Instant';
        
        if (transferSpeed.instant.includes(receiveCurrency)) {
            speedIcon = '⚡';
            speedText = 'Instant';
        } else if (transferSpeed.fast.includes(receiveCurrency)) {
            speedIcon = '🚀';
            speedText = '1-2 hours';
        } else {
            speedIcon = '📦';
            speedText = '1-2 days';
        }
        
        transferTimeDisplay.textContent = `${speedIcon} ${speedText}`;
        
        // Savings
        savingsDisplay.textContent = `${symbol}${savings.toFixed(2)}`;
    }
    
    // Event listeners
    if (sendAmountInput) {
        sendAmountInput.addEventListener('input', calculateTransfer);
    }
    
    if (sendCurrencySelect) {
        sendCurrencySelect.addEventListener('change', calculateTransfer);
    }
    
    if (receiveCurrencySelect) {
        receiveCurrencySelect.addEventListener('change', calculateTransfer);
    }
    
    // Swap currencies
    if (swapButton) {
        swapButton.addEventListener('click', function() {
            const tempCurrency = sendCurrencySelect.value;
            sendCurrencySelect.value = receiveCurrencySelect.value;
            receiveCurrencySelect.value = tempCurrency;
            
            // Animate button
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
            
            calculateTransfer();
        });
    }
    
    // Initial calculation
    calculateTransfer();
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    
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
    // NAVBAR SCROLL EFFECT
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
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
    // SCROLL ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll(`
        .feature-card,
        .testimonial-card,
        .step-card,
        .security-card,
        .stat-card
    `);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // FORM HANDLING
    // ============================================
    
    const ctaForms = document.querySelectorAll('.cta-form');
    
    ctaForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('.btn-cta-submit, .btn-calculator');
            
            if (emailInput && emailInput.value) {
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!emailRegex.test(emailInput.value)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // Show loading state
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                
                // Simulate API call (replace with your actual endpoint)
                setTimeout(() => {
                    // Success state
                    submitBtn.textContent = '✓ Success!';
                    submitBtn.style.background = 'linear-gradient(135deg, #00E676 0%, #00C853 100%)';
                    emailInput.value = '';
                    
                    // Show success message
                    const successMsg = document.createElement('p');
                    successMsg.textContent = '🎉 Welcome! Check your email to get started.';
                    successMsg.style.color = '#00E676';
                    successMsg.style.fontWeight = '600';
                    successMsg.style.marginTop = '12px';
                    successMsg.style.textAlign = 'center';
                    form.appendChild(successMsg);
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                        submitBtn.style.background = '';
                        if (successMsg.parentNode) {
                            successMsg.remove();
                        }
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
    // CALCULATOR CTA BUTTON
    // ============================================
    
    const calculatorBtn = document.querySelector('.btn-calculator');
    
    if (calculatorBtn) {
        calculatorBtn.addEventListener('click', function(e) {
            // Get current calculation values
            const sendAmount = sendAmountInput.value;
            const sendCurrency = sendCurrencySelect.value;
            const receiveCurrency = receiveCurrencySelect.value;
            
            // Store in sessionStorage for signup page
            sessionStorage.setItem('transferDetails', JSON.stringify({
                amount: sendAmount,
                from: sendCurrency,
                to: receiveCurrency
            }));
            
            // Scroll to final CTA or open signup modal
            const finalCTA = document.querySelector('.final-cta');
            if (finalCTA) {
                finalCTA.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ============================================
    // ANIMATED COUNTERS (Stats)
    // ============================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const value = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.]/g, '');
        const duration = 2000;
        const increment = value / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < value) {
                element.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = text;
            }
        };
        
        updateCounter();
    };
    
    // Observe stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => animateCounter(stat));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.floating-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ============================================
    // COMPARISON TABLE HIGHLIGHT
    // ============================================
    
    const comparisonTable = document.querySelector('.comparison-table');
    
    if (comparisonTable) {
        const rows = comparisonTable.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                const highlightCells = this.querySelectorAll('.highlight-cell');
                highlightCells.forEach(cell => {
                    cell.style.transform = 'scale(1.05)';
                    cell.style.transition = 'transform 0.2s';
                });
            });
            
            row.addEventListener('mouseleave', function() {
                const highlightCells = this.querySelectorAll('.highlight-cell');
                highlightCells.forEach(cell => {
                    cell.style.transform = 'scale(1)';
                });
            });
        });
    }
    
    // ============================================
    // TESTIMONIALS CAROUSEL (Optional Enhancement)
    // ============================================
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ============================================
    // CURRENCY SELECT CUSTOM STYLING
    // ============================================
    
    const currencySelects = document.querySelectorAll('.currency-select');
    
    currencySelects.forEach(select => {
        select.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary)';
            this.style.boxShadow = '0 0 0 3px rgba(0, 82, 255, 0.1)';
        });
        
        select.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
    
    // ============================================
    // FLOATING ANIMATION FOR CALCULATOR CARD
    // ============================================
    
    const calculatorCard = document.querySelector('.calculator-card');
    
    if (calculatorCard) {
        let floatOffset = 0;
        
        function floatAnimation() {
            floatOffset += 0.01;
            const yOffset = Math.sin(floatOffset) * 5;
            calculatorCard.style.transform = `translateY(${yOffset}px)`;
            requestAnimationFrame(floatAnimation);
        }
        
        // Start animation after page load
        setTimeout(() => {
            floatAnimation();
        }, 1000);
    }
    
    // ============================================
    // COPY EMAIL ON CLICK (Contact)
    // ============================================
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            
            navigator.clipboard.writeText(email).then(() => {
                // Show tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Email copied!';
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'var(--dark)';
                tooltip.style.color = 'white';
                tooltip.style.padding = '4px 12px';
                tooltip.style.borderRadius = '6px';
                tooltip.style.fontSize = '12px';
                tooltip.style.marginTop = '-30px';
                tooltip.style.marginLeft = '-40px';
                
                this.parentNode.style.position = 'relative';
                this.parentNode.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        });
    });
    
    // ============================================
    // KEYBOARD ACCESSIBILITY
    // ============================================
    
    document.addEventListener('keydown', (e) => {
        // ESC key closes any open modals
        if (e.key === 'Escape') {
            // Close any modals here
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // ============================================
    // REAL-TIME EXCHANGE RATE UPDATES (Optional)
    // ============================================
    
    // Uncomment to fetch real exchange rates from an API
    /*
    async function fetchRealRates() {
        try {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
            const data = await response.json();
            
            // Update exchangeRates object
            Object.keys(data.rates).forEach(currency => {
                if (exchangeRates.EUR) {
                    exchangeRates.EUR[currency] = data.rates[currency];
                }
            });
            
            // Recalculate
            calculateTransfer();
        } catch (error) {
            console.error('Failed to fetch exchange rates:', error);
        }
    }
    
    // Fetch rates on load and every 60 seconds
    fetchRealRates();
    setInterval(fetchRealRates, 60000);
    */
    
    // ============================================
    // PERFORMANCE MONITORING
    // ============================================
    
    // Log page load performance
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #00E676; font-weight: bold;');
    });
    
    // ============================================
    // CONSOLE BRANDING
    // ============================================
    
    console.log(
        '%c💳 PayFlow FinTech Template v1.0',
        'color: #0052FF; font-size: 18px; font-weight: bold;'
    );
    console.log(
        '%cBuilt for Estonian & European FinTech startups',
        'color: #64748B; font-size: 12px;'
    );
    console.log(
        '%c🔒 PSD2 Compliant • GDPR Protected • FCA Regulated',
        'color: #00E676; font-size: 12px; font-weight: bold;'
    );
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount, currency) {
    const symbols = {
        EUR: '€',
        GBP: '£',
        USD: '$',
        CHF: 'CHF ',
        JPY: '¥',
        INR: '₹',
        CAD: 'CA$',
        AUD: 'AU$'
    };
    
    const symbol = symbols[currency] || currency + ' ';
    return `${symbol}${amount.toFixed(2)}`;
}

// Validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
