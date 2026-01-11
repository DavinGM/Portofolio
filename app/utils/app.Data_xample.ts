// constants/appData.js
export const SITE_DATA = {
  profile: {
    Fist_name: "Xample",
    Last_name: "User Name",
    Image: "img/placeholder-avatar.jpeg",
    Fist_role: "Creative",
    Last_role: "Developer",
    Experience: "X",
    email: "hello@xample-domain.com",
    phone: "+6280000000000",
    whatsapp: "https://wa.me/6280000000000",
    location: "City, Country",
    Count_Project: "XX",
    City: "Xample City",
    Country: "Xample Country"
  },
  socials: [
    { name: 'Github', url: 'https://github.com/xample-user' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/xample-profile' },
    { name: 'Instagram', url: 'https://www.instagram.com/xample_handle' },
    { name: 'whatsapp', url: 'https://wa.me/6280000000000' },
  ],

  Stats: {
    OpenToWork: true,
    AvalibelForProject: true
  },

  // Detail Project in File utils/appProject
  projects_featured: [
    {
      title: 'Xample Project Alpha',
      year: '202X',
      category: 'Digital Solution Platform',
      tech: ['Framework A', 'Library B', 'Styling C'],
      image: '/img/Projects/project-alpha.png'
    },
    {
      title: 'Xample Project Beta',
      year: '202X',
      category: 'High-Performance Application',
      tech: ['Framework D', 'Styling E', 'Database F'],
      image: '/img/Projects/project-beta.png'
    },
    {
      title: 'Xample Project Gamma',
      year: '202X',
      category: 'Interactive Web Experience',
      tech: ['Framework G', 'Styling H', 'Animation I'],
      image: 'img/Projects/project-gamma.png'
    }
  ]
}

// For Landing Design DNA
export const SITE_ITEMS = [
  {
    id: 1,
    code: '01',
    title: 'Design Philosophy X',
    desc: 'Deskripsi placeholder untuk prinsip desain utama yang fokus pada tujuan dan fungsionalitas pengguna.',
    image: 'img/placeholder-1.png',
    tags: ['Tag A', 'Tag B', 'Tag C']
  },
  {
    id: 2,
    code: '02',
    title: 'Modern Tech Stack',
    desc: 'Deskripsi placeholder mengenai penggunaan teknologi terkini untuk membangun skalabilitas dan stabilitas.',
    image: 'img/placeholder-2.png',
    tags: ['Tech A', 'Tech B', 'Tech C']
  },
  {
    id: 3,
    code: '03',
    title: 'Systematic Scalability',
    desc: 'Deskripsi placeholder mengenai pendekatan desain sistem yang konsisten untuk pengembangan jangka panjang.',
    image: 'img/placeholder-3.png',
    tags: ['System', 'Scale', 'Consistency']
  },
  {
    id: 4,
    code: '04',
    title: 'Quality Refinement',
    desc: 'Deskripsi placeholder tentang dedikasi terhadap detail kecil yang menentukan kualitas akhir sebuah produk.',
    image: 'img/placeholder-4.png',
    tags: ['Detail', 'Quality', 'Craft']
  }
]

// for Landing Experience
export const SITE_expertiseData = [
  {
    title: 'Service Architecture',
    stack: 'Tech A / Tech B',
    desc: 'Penjelasan mengenai keahlian dalam membangun arsitektur aplikasi yang cepat, aman, dan mudah dikelola.',
    iconPath: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
  },
  {
    title: 'Interactive Design',
    stack: 'Tech C / Tech D',
    desc: 'Fokus pada penciptaan interaksi mikro dan transisi yang halus untuk meningkatkan kepuasan pengguna.',
    iconPath: 'M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672z'
  },
  {
    title: 'Core Engineering',
    stack: 'Tech E / Tech F',
    desc: 'Pengembangan antarmuka tingkat presisi tinggi yang memastikan konsistensi desain di berbagai perangkat.',
    iconPath: 'M9.53 16.122a3 3 0 00-3.032 4.674m3.032-4.674a3 3 0 013.032-4.674m-3.032 4.674l3.032-4.674m0 0a3 3 0 003.032 4.674m-3.032-4.674l3.032 4.674'
  }
]