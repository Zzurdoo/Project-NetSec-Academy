document.addEventListener('DOMContentLoaded', () => {
    console.log("Forum Page Loaded");

    // Category Selection Logic
    const categoryItems = document.querySelectorAll('.category-list li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            categoryItems.forEach(cat => cat.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');

            console.log(`Switched to category: ${item.textContent.trim()}`);
            // In a real app, this would filter the topic feed
        });
    });

    // New Topic Button
    const newTopicBtn = document.querySelector('.btn-new-topic');
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', () => {
            alert('To create a new topic, please Login first.');
        });
    }

    // Search Interaction
    const searchInput = document.querySelector('.forum-search input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert(`Searching for: ${searchInput.value}`);
            }
        });
    }
});
