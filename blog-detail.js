// Blog data (in a real application, this would come from a server)
const blogPosts = {
    'usa-guide': {
        title: 'Guide to Student Life in the USA',
        date: 'Feb 11, 2025',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        tag: 'USA Education',
        content: `
            <p>Studying in the United States is a dream for many international students, and for good reason. The US education system offers unparalleled opportunities for academic and personal growth. This comprehensive guide will help you navigate your journey as an international student in the USA.</p>

            <h2>Campus Life and Accommodation</h2>
            <p>American universities are known for their vibrant campus life. Most universities offer on-campus housing options for first-year students, which is an excellent way to immerse yourself in the college experience. You'll have access to various facilities including libraries, recreation centers, student unions, and dining halls.</p>

            <h2>Academic System</h2>
            <p>The US education system is known for its flexibility. You can often choose your classes each semester, allowing you to explore different subjects before deciding on your major. The system emphasizes critical thinking, class participation, and continuous assessment rather than just final exams.</p>

            <h2>Cultural Adaptation</h2>
            <p>Adapting to American culture might take time, but it's an enriching experience. You'll meet students from all over the world, participate in cultural events, and develop a global perspective. Most universities have international student offices that organize orientation programs and provide ongoing support.</p>

            <h2>Practical Tips</h2>
            <ul>
                <li>Get your student visa well in advance</li>
                <li>Arrange health insurance before arrival</li>
                <li>Open a US bank account</li>
                <li>Learn about the public transportation system</li>
                <li>Join student organizations to make friends</li>
            </ul>
        `
    },
    'scholarship-guide': {
        title: 'Top Scholarship Opportunities 2025',
        date: 'Feb 10, 2025',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
        tag: 'Scholarships',
        content: `
            <p>Securing a scholarship can significantly reduce the financial burden of studying abroad. This guide covers the top scholarship opportunities available for international students in 2025.</p>

            <h2>Types of Scholarships</h2>
            <p>There are various types of scholarships available, including merit-based, need-based, country-specific, and subject-specific scholarships. Understanding these categories will help you focus your applications on the most relevant opportunities.</p>

            <h2>Application Tips</h2>
            <p>A successful scholarship application requires careful preparation. Start early, gather all required documents, and pay attention to deadlines. Your application should highlight your academic achievements, extracurricular activities, and leadership experiences.</p>

            <h2>Top Scholarship Programs</h2>
            <ul>
                <li>Fulbright Scholarships</li>
                <li>Chevening Scholarships</li>
                <li>Commonwealth Scholarships</li>
                <li>Erasmus Mundus Scholarships</li>
                <li>University-specific scholarships</li>
            </ul>
        `
    },
    'ielts-guide': {
        title: 'IELTS Preparation Strategy',
        date: 'Feb 9, 2025',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        tag: 'IELTS Exam',
        content: `
            <p>The International English Language Testing System (IELTS) is a crucial requirement for studying in English-speaking countries. This guide provides effective strategies to achieve your target score.</p>

            <h2>Understanding the Test Format</h2>
            <p>IELTS consists of four sections: Listening, Reading, Writing, and Speaking. Each section tests different language skills and requires specific preparation strategies.</p>

            <h2>Preparation Timeline</h2>
            <p>A structured preparation plan is essential. We recommend starting your preparation at least 3-6 months before the test date. This gives you enough time to improve your skills and familiarize yourself with the test format.</p>

            <h2>Study Tips</h2>
            <ul>
                <li>Practice with official IELTS materials</li>
                <li>Take full-length practice tests</li>
                <li>Focus on time management</li>
                <li>Improve your vocabulary systematically</li>
                <li>Practice speaking English daily</li>
            </ul>
        `
    },
    'uk-education': {
        title: 'UK Education System Explained',
        date: 'Feb 8, 2025',
        image: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e',
        tag: 'UK Education',
        content: `
            <p>The United Kingdom's education system is renowned worldwide for its high standards and rich academic heritage. This comprehensive guide will help you understand what makes British education unique and how to navigate it successfully.</p>

            <h2>Understanding the UK Education Structure</h2>
            <p>The UK education system offers various qualifications including Bachelor's degrees (3 years), Master's degrees (1 year), and PhD programs. The academic year typically starts in September and is divided into three terms.</p>

            <h2>Teaching and Learning Style</h2>
            <p>British universities emphasize independent learning and critical thinking. You'll experience a mix of lectures, seminars, tutorials, and practical sessions. The system encourages students to develop their own ideas and engage in academic debates.</p>

            <h2>Student Life in the UK</h2>
            <p>Living and studying in the UK offers a unique cultural experience. From historic universities to modern city campuses, each institution has its own character and traditions. You'll have opportunities to join societies, participate in sports, and explore the rich British culture.</p>

            <h2>Key Benefits</h2>
            <ul>
                <li>Shorter course duration compared to other countries</li>
                <li>Strong focus on research and practical skills</li>
                <li>Opportunities to work while studying</li>
                <li>Rich cultural experience</li>
                <li>Access to world-class facilities</li>
            </ul>
        `
    },
    'australia-guide': {
        title: 'Study in Australia: Complete Guide',
        date: 'Feb 7, 2025',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
        tag: 'Australia Education',
        content: `
            <p>Australia has become one of the most popular destinations for international students, offering high-quality education, fantastic lifestyle, and excellent career opportunities. This guide covers everything you need to know about studying in Australia.</p>

            <h2>Australian Education System</h2>
            <p>Australian universities are known for their practical approach to learning. The academic year usually starts in February and ends in November, with two semesters. Many universities also offer a third (summer) semester for accelerated learning.</p>

            <h2>Living in Australia</h2>
            <p>Australia offers an excellent quality of life with its beautiful weather, friendly people, and safe environment. Major cities like Sydney, Melbourne, and Brisbane are consistently ranked among the world's most livable cities.</p>

            <h2>Work Opportunities</h2>
            <p>International students can work up to 20 hours per week during term time and full-time during holidays. This helps with living expenses and provides valuable work experience.</p>

            <h2>Important Considerations</h2>
            <ul>
                <li>Apply for your student visa well in advance</li>
                <li>Arrange health insurance (OSHC)</li>
                <li>Research accommodation options</li>
                <li>Understand living costs in different cities</li>
                <li>Explore scholarship opportunities</li>
            </ul>

            <h2>Popular Study Areas</h2>
            <p>Australia is particularly known for excellence in:</p>
            <ul>
                <li>Engineering and Technology</li>
                <li>Natural Sciences</li>
                <li>Business and Management</li>
                <li>Environmental Studies</li>
                <li>Healthcare and Medicine</li>
            </ul>
        `
    }
};

// Get blog ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

// Cache DOM elements
const blogTitle = document.getElementById('blogTitle');
const blogDate = document.getElementById('blogDate');
const blogImage = document.getElementById('blogImage');
const blogContent = document.getElementById('blogContent');
const blogSpecificTag = document.getElementById('blogSpecificTag');

// Load blog content
function loadBlogContent() {
    try {
        const blog = blogPosts[blogId];
        
        if (!blog) {
            throw new Error('Blog not found');
        }

        // Cache DOM elements
        const elements = {
            title: document.getElementById('blogTitle'),
            date: document.getElementById('blogDate'),
            image: document.getElementById('blogImage'),
            content: document.getElementById('blogContent'),
            tag: document.getElementById('blogSpecificTag')
        };

        // Verify all elements exist
        Object.entries(elements).forEach(([key, element]) => {
            if (!element) throw new Error(`Element ${key} not found`);
        });

        // Update page content efficiently using requestAnimationFrame
        requestAnimationFrame(() => {
            document.title = `${blog.title} - Global Scholars Gateway`;
            elements.title.textContent = blog.title;
            elements.date.textContent = blog.date;
            elements.tag.textContent = blog.tag;

            // Optimize image loading
            elements.image.loading = 'lazy';
            elements.image.decoding = 'async';
            elements.image.src = `${blog.image}?auto=format&w=1200&q=80`;
            elements.image.alt = blog.title;

            // Add loading state for image with transition
            elements.image.style.opacity = '0';
            elements.image.style.transition = 'opacity 0.3s';
            elements.image.onload = () => {
                requestAnimationFrame(() => {
                    elements.image.style.opacity = '1';
                });
            };

            // Update content in chunks to prevent blocking
            setTimeout(() => {
                elements.content.innerHTML = blog.content;
            }, 0);
        });
    } catch (error) {
        console.error('Error loading blog:', error);
        window.location.href = 'index.html#blogs';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', loadBlogContent);

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
