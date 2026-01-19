document.addEventListener('DOMContentLoaded', () => {
    console.log("Courses Page Loaded");

    const searchInput = document.getElementById('course-search-input');
    const courseItems = document.querySelectorAll('.course-item');

    function filterCourses() {
        const searchText = searchInput.value.toLowerCase();

        courseItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const matchesSearch = title.includes(searchText);

            if (matchesSearch) {
                item.style.display = 'flex'; // Show matching courses
            } else {
                item.style.display = 'none'; // Hide non-matching courses
            }
        });
    }

    // Event Listener for search only
    searchInput.addEventListener('input', filterCourses);
});
