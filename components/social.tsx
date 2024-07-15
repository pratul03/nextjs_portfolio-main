import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/pratul03'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/pratul-makar/'
  },
  {
    icon: <FaStackOverflow />,
    path: 'https://stackoverflow.com/users/23555468/pratul-makar'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='flex size-11 items-center justify-center rounded-lg border-2 border-gray-400 text-gray-400 duration-300 hover:border-orange-400 hover:text-orange-400 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
