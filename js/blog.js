document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog Page Loaded");

    // Interactive Hover on Featured Card
    const featuredCard = document.querySelector('.featured-card');
    if (featuredCard) {
        featuredCard.addEventListener('mousemove', (e) => {
            const rect = featuredCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Subtle parallax/glow effect could go here
            // For now, simpler interaction
        });
    }

    // Filter functionality (Placeholder)
    const blogTags = document.querySelectorAll('.blog-tag');
    blogTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const category = tag.textContent.trim();
            alert(`Filtering by category: ${category}`);
        });
    });
});
