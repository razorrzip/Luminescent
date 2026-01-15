// Flavor data
const flavorData = {
    ocean: {
        name: 'Ocean Breeze',
        description: 'Membawa ketenangan seperti ombak di pantai, aroma segar laut yang menenangkan pikiran dan jiwa.',
        benefits: [
            'Meredakan stres dan kecemasan',
            'Meningkatkan fokus dan konsentrasi',
            'Membantu menciptakan suasana relaksasi',
            'Membantu pernapasan lebih lega'
        ],
        color: '#118AB2'
    },
    rose: {
        name: 'Rose Petal',
        description: 'Keharuman bunga mawar yang romantis dan elegan, membangkitkan perasaan bahagia dan percaya diri.',
        benefits: [
            'Meningkatkan mood dan perasaan bahagia',
            'Meredakan ketegangan emosional',
            'Membantu menyeimbangkan hormon',
            'Meningkatkan kualitas tidur'
        ],
        color: '#FF6B6B'
    },
    orange: {
        name: 'Citrus Orange',
        description: 'Semangat segar buah jeruk yang menyegarkan, membangkitkan energi positif di pagi hari.',
        benefits: [
            'Meningkatkan energi dan semangat',
            'Mengurangi rasa lelah dan lesu',
            'Meningkatkan fokus mental',
            'Membantu meredakan mual'
        ],
        color: '#FF9F1C'
    },
    lavender: {
        name: 'Lavender Dream',
        description: 'Aroma lavender yang menenangkan, sempurna untuk relaksasi dan kualitas tidur yang lebih baik.',
        benefits: [
            'Membantu mengatasi insomnia',
            'Meredakan sakit kepala dan migrain',
            'Menurunkan tekanan darah dan detak jantung',
            'Mengurangi perasaan cemas'
        ],
        color: '#9B5DE5'
    },
    vanilla: {
        name: 'Vanilla Bliss',
        description: 'Kehangatan manis vanilla yang menenangkan jiwa, menciptakan suasana nyaman dan akrab.',
        benefits: [
            'Menciptakan perasaan nyaman dan aman',
            'Membantu mengurangi stres',
            'Meningkatkan suasana hati',
            'Membantu mengatasi masalah pencernaan'
        ],
        color: '#FFE66D'
    }
};

// DOM Elements
const modal = document.getElementById('flavorModal');
const modalTitle = document.querySelector('.modal-title');
const flavorDescription = document.querySelector('.flavor-description');
const benefitsList = document.querySelector('.benefits-list');
const flavorIcon = document.querySelector('.flavor-icon');
const closeModal = document.querySelector('.close-modal');
const productCards = document.querySelectorAll('.product-card');

// Open modal function
function openModal(flavorId) {
    const flavor = flavorData[flavorId];
    if (!flavor) return;

    // Reset modal state
    modal.style.display = 'flex'; // Ensure modal is visible
    
    // Force reflow to ensure the display property is applied
    void modal.offsetHeight;
    
    // Update modal content
    modalTitle.textContent = flavor.name;
    flavorDescription.textContent = flavor.description;
    
    // Set icon based on flavor
    const iconMap = {
        ocean: '\f773',
        rose: '\f339',
        orange: '\f4d3',
        lavender: '\f75f',
        vanilla: '\f5ff'
    };
    
    flavorIcon.style.background = `linear-gradient(135deg, ${flavor.color}20, ${flavor.color}40)`;
    flavorIcon.style.color = flavor.color;
    flavorIcon.innerHTML = `<i class="fas" style="font-size: 4rem; color: ${flavor.color}">${iconMap[flavorId]}</i>`;
    
    // Update benefits list
    benefitsList.innerHTML = '';
    flavor.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Show modal with animation
    document.body.style.overflow = 'hidden';
    modal.style.opacity = '0';
    modal.style.display = 'flex';
    
    // Trigger reflow
    void modal.offsetHeight;
    
    // Add show class for animation
    modal.classList.add('show');
    modal.style.opacity = '1';
}

// Close modal function
function closeModalFunc() {
    document.body.style.overflow = 'auto';
    modal.classList.remove('show');
    modal.style.opacity = '0';
    
    // Wait for the fade-out animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Event Listeners
productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on links or buttons inside the card
        if (e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'BUTTON') {
            return;
        }
        const flavorId = card.getAttribute('data-flavor');
        openModal(flavorId);
    });
});

closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalFunc();
    }
});

// Add this to your existing script.js or include it separately
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization code can go here
});
