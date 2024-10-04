import { link } from "fs";

export const background = './images/wave.png';

export const header = {
    title: 'Alexander Neher',
    subtitle: 'Software Engineering, Data Science, and Machine Learning',
    intro: 'I am a Computer Science student at the Milwaukee School of Engineering',
}

export const about = {
  text: "I am a senior at the Milwaukee School of Engineering, pursuing a B.S. in Computer Science with a minor in Mathematics, and a M.S. in Machine Learning. With experience across a range of programming languages and technologies, I am continually seeking opportunities to expand my knowledge. I am currently looking for a full-time position in software engineering or data science, driven by a passion for applying machine learning to solve real-world challenges, particularly in the medical field. I also have a strong interest in web development, with expertise in both front-end and back-end technologies.",
}

export const contacts = ['https://www.linkedin.com/in/alex-j-neher/', 'https://github.com/nehera21', 'mailto: ajneher21@gmail.com']

export const projects = [
    {
      title: 'Homologus Point Transformer',
      description: 'A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.',
      link: '',
      image: './images/hpt-img.png',
      tags: [{name: 'Python', link:'https://www.python.org/', isLink: true}, {name: 'TensorFlow', link:'https://www.tensorflow.org/', isLink: true}, {name: 'Research', link: '', isLink: false}, {name: 'CNN Architecture', link: '', isLink: false}]
    },
    {
      title: 'Hierflow',
      description: 'A program that uses a large language model to create a hierarchy of a particular topic, as well as classify an item within an existing hierarchy. The pipeline utilizes embeddings, RAG, and prompt engineering.',
      link: '',
      image: './images/hierflow-img.png',
      tags: [{name: 'Python', link:'https://www.python.org/', isLink: true}, {name: 'ReactJS', link: 'https://react.dev/', isLink: true}, {name: 'Large Language Models', link:'', isLink: false}]
    },
    {
      title: 'Japanese Character Recognition',
      description: 'A program that takes in an image of a Japanese character and uses a neural network to predict what character it is. The model was deployed on an Android app where a user could draw the character and see the model prediction.',
      link: '',
      image: './images/japanese-char-img.png',
      tags: [{name: 'Python', link:'https://www.python.org/', isLink: true}, {name: 'TensorFlow', link:'https://www.tensorflow.org/', isLink: true}, {name: 'Numpy', link:'https://numpy.org/', isLink: true}]
    },
    {
      title: 'Memory Montor Web App',
      description: 'An internal app at Cognex that allows a worker to monitor the heap memory usage of a camera overtime using a web interface and network requests using socket calls.',
      link: '',
      image: './images/cognex-camera.png',
      tags: [{name: 'AngularJS', link:'https://angular.io/', isLink: true}, {name: 'TypeScript', link:'https://www.typescriptlang.org/', isLink: true}, {name: 'Web Development', link:'', isLink: false}]
    }
  ];

export const experience = [
  {
    title: 'Software Engineering Intern - Cognex Corporation',
    description: 'At Cognex, I worked on a team that developed software for the In-Sight camera line. I worked on various parts of our tech stack, including the camera firmware and the .NET apps which users interact with to perform operations.',
    link: 'https://www.cognex.com/',
    image: './images/cognex-logo.png',
    tags: [{name: 'C#', link: '', isLink: false}, {name: '.NET', link: '', isLink: false}, {name: 'C', link: '', isLink: false}, {name: 'C++', link: '', isLink: false}, {name: 'AngularJS', link:'https://angular.io/', isLink: true}, {name: 'TypeScript', link:'https://www.typescriptlang.org/', isLink: true}]
  }
];

export const research = [
  {
    title: 'Mind Over (Gray) Matter',
    description: 'A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.',
    link: '',
    image: './images/hpt-img.png',
    tags: [{name: 'Python', link:'https://www.python.org/', isLink: true}, {name: 'TensorFlow', link:'https://www.tensorflow.org/', isLink: true}, {name: 'Research', link: '', isLink: false}, {name: 'CNN Architecture', link: '', isLink: false}]
  },
];

export const menuItems = [
  {
    name: 'About',
    jumpID: 'about'
  },
  {
    name: 'Projects',
    jumpID: 'projects'
  },
  {
    name: 'Experience',
    jumpID: 'experience'
  },
  {
    name: 'Research',
    jumpID: 'research'
  },
  {
    name: 'Skills',
    jumpID: 'skills'
  }
];

export const skills = [
  {
    image: './images/javascript-logo.png',
    name: 'JavaScript',
    color: '#F7DF1E'
  },
  {
    image: './images/typescript-logo.png',
    name: 'TypeScript',
    color: '#007ACC'
  },
  {
    image: './images/react-logo.png',
    name: 'ReactJS',
    color: '#61DAFB'
  },
  {
    image: './images/angular-logo.png',
    name: 'AngularJS',
    color: '#DD0031'
  },
  {
    image: './images/node-logo.png',
    name: 'NodeJS',
    color: '#339933'
  },
  {
    image: './images/java-logo.png',
    name: 'Java',
    color: '#E04C26'
  },
  {
    image: './images/c-logo.png',
    name: 'C',
    color: '#55479C'
  }, 
  {
    image: './images/cpp-logo.png',
    name: 'C++',
    color: '#00599C'
  },
  {
    image: './images/c-sharp-logo.png',
    name: 'C#',
    color: '#3e0f5a'
  },
  {
    image: './images/python-logo.png',
    name: 'Python',
    color: '#3776AB'
  },
  {
    image: './images/r-logo.png',
    name: 'R',
    color: '#276DC3'
  },
  {
    image: './images/pandas-logo.png',
    name: 'Pandas',
    color: '#150458'
  },
  {
    image: './images/numpy-logo.png',
    name: 'NumPy',
    color: '#4D77CF'
  },
  {
    image: './images/tensorflow-logo.png',
    name: 'TensorFlow',
    color: '#FF6F00'
  },
  {
    image: './images/git-logo.png',
    name: 'Git',
    color: '#F05032'
  }
]