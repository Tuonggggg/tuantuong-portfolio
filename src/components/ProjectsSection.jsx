import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Bookstore – ReactJS Frontend Project',
    description: 'Bookstore is a simple e-commerce frontend project built with ReactJS.',
    image: '/projects/bookstore.jpg',
    tag: ['ReactJS', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Tuonggggg/Bookstore'
  },
  {
    id: 3,
    title: 'Trello Clone – MERN Stack Project',
    description: 'Trello Clone is a web application built with ReactJS, Material UI, DnD Kit, and MongoDB.',
    image: '/projects/trello.jpg',
    tag: ['ReactJS', 'Material UI', 'DnD Kit', 'MongoDB', 'REST API'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Tuonggggg/Trello-Clone'
  },
  {
    id: 3,
    title: 'Dien May Xanh Clone – MERN Stack Project',
    description: 'Dien May Xanh Clone is an e-commerce web application built with ReactJS, Ant Design, Node.js, MongoDB, and CSS.',
    image: '/projects/dmx.jpg',
    tag: ['ReactJS', 'Ant Design', 'Node.js', 'MongoDB', 'CSS', 'REST API'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Shopee Clone – HTML & CSS Project',
    description: 'Shopee Clone is a static e-commerce frontend project built with HTML and CSS.',
    image: '/projects/shopee.jpg',
    tag: ['HTML', 'CSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Tuonggggg/Shopee-Blue'
  },
  {
    id: 5,
    title: 'Admin Dashboard – Spring Boot Maven Project',
    description: 'Admin Dashboard is a web application built with Spring Boot and Maven for managing users, products, and system data.',
    image: '/projects/admin.jpg',
    tag: ['Spring Boot', 'Java', 'Maven', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Tuonggggg/Springboot-web'
  }
]


export const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Feature <span className='text-primary'> Projects </span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my notable projects that showcase my skills and experience in web development.
          Each project includes a brief description, the technologies used, and links to the live demo and source code.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div
              key={key}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tag.map((tag) => (
                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>{tag}</span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-1'> {project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a className='cosmic-button w-fit flex items-center gap-2 mx-auto' href='https://github.com/Tuonggggg' target='_blank'>
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
