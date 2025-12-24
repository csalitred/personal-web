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
    end: 'August 2025',
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
  {
    company: 'Honeywell',
    title: 'Software Engineer / Advanced Application Engineer',
    start: 'September 2025',
    end: 'Present',
    link: 'https://www.honeywell.com/us/en',
    id: 'work3',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Journey to Engineering',
    description: 'coming soon',
    link: '',
    uid: 'my-journey-to-engineering',
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
