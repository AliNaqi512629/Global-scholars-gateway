// Extended blog data
const allBlogs = [
    {
        id: 'usa-guide',
        title: 'Guide to Student Life in the USA',
        date: 'Feb 11, 2025',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        excerpt: 'Everything you need to know about campus life, accommodation, and cultural adaptation in the United States.',
        category: 'usa'
    },
    {
        id: 'scholarship-guide',
        title: 'Top Scholarship Opportunities 2025',
        date: 'Feb 10, 2025',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
        excerpt: 'Comprehensive guide to securing scholarships for international students in top universities.',
        category: 'scholarships'
    },
    {
        id: 'ielts-guide',
        title: 'IELTS Preparation Strategy',
        date: 'Feb 9, 2025',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        excerpt: 'Expert tips and strategies to achieve your target score in IELTS examination.',
        category: 'exam-prep'
    },
    {
        id: 'uk-education',
        title: 'UK Education System Explained',
        date: 'Feb 8, 2025',
        image: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e',
        excerpt: 'Understanding the British education system and what makes it unique.',
        category: 'uk'
    },
    {
        id: 'australia-guide',
        title: 'Study in Australia: Complete Guide',
        date: 'Feb 7, 2025',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
        excerpt: 'Everything you need to know about studying and living in Australia.',
        category: 'australia'
    },
    {
        id: 'student-visa',
        title: 'Student Visa Application Tips',
        date: 'Feb 6, 2025',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        excerpt: 'Step-by-step guide to securing your student visa successfully.',
        category: 'usa'
    }
];

// Function to create blog card HTML
function createBlogCard(blog) {
    return `
        <article class="blog-card" data-category="${blog.category}">
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}">
            </div>
            <div class="blog-content">
                <div class="blog-date">${blog.date}</div>
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <a href="blog-detail.html?id=${blog.id}" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Function to render all blogs
function renderBlogs(blogs) {
    const blogsGrid = document.getElementById('allBlogsGrid');
    blogsGrid.innerHTML = blogs.map(blog => createBlogCard(blog)).join('');
}

// Function to filter blogs
function filterBlogs(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Function to search blogs
function searchBlogs(query) {
    const blogCards = document.querySelectorAll('.blog-card');
    const searchTerm = query.toLowerCase();

    blogCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const excerpt = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Render all blogs
    renderBlogs(allBlogs);

    // Set up category filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blogs
            filterBlogs(button.dataset.category);
        });
    });

    // Set up search functionality
    const searchInput = document.getElementById('blogSearch');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchBlogs(e.target.value);
        }, 300);
    });
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
