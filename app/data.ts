type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}


type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  institution: string   
  degree: string
  specialty: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Brain Tumor Detection with Machine Learning',
    description:
      'Built encoder-decoder Convolutional Neural Network (CNN) models to detect brain tumors in MRI images.',
    link: 'https://github.com/csalitred/semantic-segmentation',
    image: '/UNC-Charlotte-logo.jpg',
    id: 'project1',
  },
  {
    name: 'Asset Tracking & Anti-theft System',
    description: 'Internal wireless asset tracking and anti-theft system using BLE technology, data logging and wirelesss control implentation with android application.',
    link: '',
    image: '/UNC-Charlotte-logo.jpg',
    id: 'project2',
  },
  {
    name: 'Expertiza',
    description: 'Open source reimplementation of a controller for Expertiza web application that allows students to find and connect with experts in their field.',
    link: 'https://github.com/csalitred/expertiza',
    image: '/NCSU-logo.png',
    id: 'project3',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'University of North Carolina at Charlotte',   
    degree: 'Bachelor of Science in Computer Engineering',
    specialty: 'Machine Learning',
    link: 'https://engr.charlotte.edu/',
    id: 'education1',
  },
  {
    institution: 'North Carolina State University',
    degree: 'Master of Science in Electrical Engineering',
    specialty: 'Signal Processing and Computational Intelligence',
    link: 'https://engr.ncsu.edu/',
    id: 'education2',
  }
] 

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Honeywell',
    title: 'Software Engineer Intern',
    start: 'June 2025',
    end: 'Present',
    link: 'https://www.honeywell.com/us/en',
    id: 'work1',
  },
  {
    company: 'Oxit',
    title: 'Embedded Software Engineer Intern',
    start: 'March 2025',
    end: 'June 2025',
    link: 'https://oxit.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Coming Soon...',
    description: '',
    link: '',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/csalitred',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cristian-salitre',
  },
]

export const EMAIL = 'salitrecristian@gmail.com'
