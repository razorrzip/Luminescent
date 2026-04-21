// Flavor data
const flavorData = {
    'teh-keraton': {
        name: 'Teh Keraton',
        description: 'Keharuman teh tradisional yang membangkitkan ketenangan batin, menggabungkan kekayaan budaya dengan kesegaran alami.',
        benefits: [
            'Meredakan stres dan kecemasan',
            'Meningkatkan fokus dan konsentrasi',
            'Membantu menciptakan suasana relaksasi',
            'Meningkatkan kualitas meditasi',
            'Menenangkan pikiran yang gelisah',
            'Membantu pernapasan lebih lega'
        ],
        color: '#2E7D32'
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
    console.log('openModal called with:', flavorId); // Debug log
    const flavor = flavorData[flavorId];
    if (!flavor) {
        console.log('Flavor not found:', flavorId); // Debug log
        return;
    }

    // Update modal content
    modalTitle.textContent = flavor.name;
    flavorDescription.textContent = flavor.description;
    
    // Set icon based on flavor
    const iconMap = {
        'teh-keraton': '\f0f4'
    };
    
    flavorIcon.style.background = `linear-gradient(135deg, ${flavor.color}20, ${flavor.color}40)`;
    flavorIcon.style.color = flavor.color;
    flavorIcon.innerHTML = `<img src="bagus1.jpeg" alt="${flavor.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    
    // Update benefits list
    benefitsList.innerHTML = '';
    flavor.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Show modal
    document.body.style.overflow = 'hidden';
    modal.classList.add('show');
    modal.style.display = 'flex';
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
        console.log('Clicked flavor:', flavorId); // Debug log
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
