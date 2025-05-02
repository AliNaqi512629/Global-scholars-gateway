// Destination data (in a real application, this would come from a server)
const destinationData = {
    'lithuania': {
        name: 'Lithuania',
        universityCount: '30+ Universities',
        avgTuition: '€1,000 - €5,000 per year',
        overview: `Lithuania offers high-quality education at affordable costs. 
        The country is known for its strong IT and technology sectors, as well as medical education.`,
        educationSystem: 'Lithuania follows the European higher education system with Bachelor's, Master's, and Doctoral degrees. Many programs are offered in English.',
        requirements: `
            <ul>
                <li>High school diploma or equivalent</li>
                <li>English language proficiency (IELTS/TOEFL)</li>
                <li>Motivation letter</li>
                <li>Valid passport and student visa</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: €200-€400/month</li>
                <li>Food: €200-€300/month</li>
                <li>Transportation: €30/month</li>
                <li>Other expenses: €150-€250/month</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>Vilnius University</li>
                <li>Kaunas University of Technology</li>
                <li>Vilnius Gediminas Technical University</li>
                <li>Lithuanian University of Health Sciences</li>
            </ul>
        `
    },
    'monaco': {
        name: 'Monaco',
        universityCount: '5+ Higher Education Institutions',
        avgTuition: '€5,000 - €15,000 per year',
        overview: 'Monaco offers exclusive education opportunities in one of the world\'s most prestigious locations. The principality is known for its excellence in hospitality, business, and marine studies.',
        educationSystem: 'Monaco\'s education system follows the French model while maintaining its unique identity. The focus is on practical, industry-oriented education.',
        requirements: `
            <ul>
                <li>High school diploma or equivalent</li>
                <li>French/English language proficiency</li>
                <li>Letter of motivation</li>
                <li>Valid passport and student visa</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: €1,000-€2,000/month</li>
                <li>Food: €500-€800/month</li>
                <li>Transportation: €100/month</li>
                <li>Other expenses: €500-€1,000/month</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>International University of Monaco</li>
                <li>Monaco Business School</li>
                <li>Monaco Institute of Sport Studies</li>
                <li>Monaco Digital Academy</li>
            </ul>
        `
    },
    'austria': {
        name: 'Austria',
        universityCount: '70+ Universities',
        avgTuition: '€750 - €1,500 per semester',
        overview: 'Austria offers high-quality education with many programs taught in English. The country is known for its rich cultural heritage and high standard of living.',
        educationSystem: 'The Austrian higher education system includes universities, universities of applied sciences (Fachhochschulen), and private universities.',
        requirements: `
            <ul>
                <li>High school diploma or equivalent</li>
                <li>Proof of German/English language proficiency</li>
                <li>Entrance examination (for some programs)</li>
                <li>Valid passport and student visa</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: €400-€600/month</li>
                <li>Food: €250-€350/month</li>
                <li>Transportation: €150/month</li>
                <li>Other expenses: €200-€300/month</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>University of Vienna</li>
                <li>Technical University of Vienna</li>
                <li>University of Graz</li>
                <li>University of Innsbruck</li>
            </ul>
        `
    },
    'usa': {
        name: 'United States',
        universityCount: '4,000+ Universities',
        avgTuition: '$20,000 - $45,000 per year',
        overview: 'The United States hosts the world\'s largest international student population and offers diverse, high-quality education opportunities across thousands of institutions.',
        educationSystem: 'The US higher education system includes community colleges, liberal arts colleges, research universities, and specialized institutions. Programs are highly flexible with many course options.',
        requirements: `
            <ul>
                <li>High school diploma or equivalent</li>
                <li>SAT/ACT scores (for undergraduate)</li>
                <li>GRE/GMAT (for graduate programs)</li>
                <li>TOEFL/IELTS scores</li>
                <li>Letters of recommendation</li>
                <li>Statement of purpose</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: $10,000-$15,000/year</li>
                <li>Food: $3,000-$5,000/year</li>
                <li>Health Insurance: $1,500-$2,500/year</li>
                <li>Books and Supplies: $1,000-$2,000/year</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>Harvard University</li>
                <li>Massachusetts Institute of Technology (MIT)</li>
                <li>Stanford University</li>
                <li>Yale University</li>
            </ul>
        `
    },
    'uk': {
        name: 'United Kingdom',
        universityCount: '150+ Universities',
        avgTuition: '£12,000 - £35,000 per year',
        overview: 'The UK offers prestigious education with a rich academic heritage. Known for its research quality and innovative teaching methods.',
        educationSystem: 'The UK education system is renowned for its quality standards. Undergraduate programs typically take 3 years, while master\'s programs are usually 1 year.',
        requirements: `
            <ul>
                <li>High school qualifications</li>
                <li>IELTS/TOEFL scores</li>
                <li>Personal statement</li>
                <li>Academic references</li>
                <li>Portfolio (for specific courses)</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: £6,000-£9,000/year</li>
                <li>Food: £2,500-£3,500/year</li>
                <li>Transportation: £1,500/year</li>
                <li>Personal Expenses: £2,000-£3,000/year</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>University of Oxford</li>
                <li>University of Cambridge</li>
                <li>Imperial College London</li>
                <li>London School of Economics</li>
            </ul>
        `
    },
    'australia': {
        name: 'Australia',
        universityCount: '43 Universities',
        avgTuition: 'AUD 20,000 - AUD 45,000 per year',
        overview: 'Australia offers world-class education, amazing quality of life, and post-study work opportunities in a multicultural environment.',
        educationSystem: 'Australian universities are known for their practical approach to learning. The academic year typically starts in February and ends in November.',
        requirements: `
            <ul>
                <li>Academic transcripts</li>
                <li>IELTS/TOEFL/PTE scores</li>
                <li>Statement of purpose</li>
                <li>Two academic references</li>
                <li>Portfolio (for specific courses)</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: AUD 15,000-25,000/year</li>
                <li>Food: AUD 8,000-12,000/year</li>
                <li>Transportation: AUD 3,000-4,000/year</li>
                <li>Health Insurance: AUD 500/year</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>University of Melbourne</li>
                <li>University of Sydney</li>
                <li>Australian National University</li>
                <li>University of Queensland</li>
            </ul>
        `
    },
    'germany': {
        name: 'Germany',
        universityCount: '400+ Universities',
        avgTuition: '€0 - €3,000 per year',
        overview: 'Germany offers world-class education with very low or no tuition fees. Known for its engineering and technology programs, Germany provides excellent research opportunities and quality of life.',
        educationSystem: 'The German higher education system includes universities, universities of applied sciences (Fachhochschulen), and colleges of art and music. Many programs are offered in English.',
        requirements: `
            <ul>
                <li>High school diploma or equivalent</li>
                <li>TestDaF or DSH (for German-taught programs)</li>
                <li>IELTS/TOEFL (for English-taught programs)</li>
                <li>Motivation letter</li>
                <li>Academic transcripts</li>
                <li>Proof of financial resources</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: €300-€600/month</li>
                <li>Food: €200-€300/month</li>
                <li>Health Insurance: €110/month</li>
                <li>Transportation: €50/month</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>Technical University of Munich</li>
                <li>Ludwig Maximilian University of Munich</li>
                <li>Heidelberg University</li>
                <li>RWTH Aachen University</li>
            </ul>
        `
    },
    'canada': {
        name: 'Canada',
        universityCount: '100+ Universities',
        avgTuition: 'CAD 15,000 - CAD 35,000 per year',
        overview: 'Canada offers high-quality education at affordable costs, with excellent post-graduation work opportunities and a pathway to permanent residency.',
        educationSystem: 'Canadian education combines British and American influences, offering both English and French-language institutions. Known for research-intensive universities.',
        requirements: `
            <ul>
                <li>High school diploma/transcripts</li>
                <li>IELTS/TOEFL scores</li>
                <li>Letter of Intent</li>
                <li>Letters of Reference</li>
                <li>Portfolio (program-specific)</li>
            </ul>
        `,
        costs: `
            <ul>
                <li>Accommodation: CAD 8,000-10,000/year</li>
                <li>Food: CAD 4,000-6,000/year</li>
                <li>Transportation: CAD 1,000-2,000/year</li>
                <li>Health Insurance: CAD 600-800/year</li>
            </ul>
        `,
        universities: `
            <ul>
                <li>University of Toronto</li>
                <li>University of British Columbia</li>
                <li>McGill University</li>
                <li>University of Waterloo</li>
            </ul>
        `
    }
};

// Get country from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get('country');

// Load destination content
function loadDestinationContent() {
    try {
        const data = destinationData[country];
        
        if (!data) {
            document.querySelector('.destination-header').innerHTML = `
                <h1>Destination Not Found</h1>
                <p>Sorry, information about this destination is not available at the moment.</p>
                <a href="all-destinations.html" class="back-button">Back to All Destinations</a>
            `;
            return;
        }

        // Update page title
        document.title = `${data.name} - Study Destination | Global Scholars Gateway`;
        
        // Update content
        document.getElementById('countryName').innerHTML = data.name;
        document.getElementById('universityCount').innerHTML = data.universityCount;
        document.getElementById('avgTuition').innerHTML = data.avgTuition;
        document.getElementById('overview').innerHTML = data.overview;
        document.getElementById('educationSystem').innerHTML = data.educationSystem;
        document.getElementById('requirements').innerHTML = data.requirements;
        document.getElementById('costs').innerHTML = data.costs;
        document.getElementById('universities').innerHTML = data.universities;

    } catch (error) {
        console.error('Error loading destination:', error);
        window.location.href = 'all-destinations.html';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', loadDestinationContent);
