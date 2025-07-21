type Project = {
  name: string
  description: string
  link: string
  video: string
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
  end: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Brain Tumor Detection with Machine Learning',
    description:
      'Built encoder-decoder Convolutional Neural Network (CNN) models to detect brain tumors in MRI images.',
    link: 'https://github.com/csalitred/semantic-segmentation',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Asset Tracking & Anti-theft System',
    description: 'Internal wireless asset tracking and anti-theft system using BLE technology, data logging and wirelesss control implentation with android application.',
    link: '',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Object Detection with Edge Device',
    description: 'Built custome Convolutional Neural Network models and deployed on an edge device using TensorFlow Lite for realt-time object detection.',
    link: '',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'University of North Carolina at Charlotte',   
    degree: 'Bachelor of Science in Computer Engineering',
    end: 'December 2024',
    link: 'https://engr.charlotte.edu/',
    id: 'education1',
  },
  {
    institution: 'North Carolina State University',
    degree: 'Master of Science in Electrical Engineering',
    end: 'Expected: May 2027',
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
    start: 'March 2025 - June 2025',
    end: '2024',
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
