import BLOG from '@/blog.config'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { ChevronLeftIcon, ArrowUpIcon } from '@heroicons/react/outline'

const Aside = ({ subPageTitle, frontMatter }) => {
  const [showButton, setShowButton] = useState(false)
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  useEffect(() => {
    if (frontMatter.title !== subPageTitle) {
      setShowSubPageTitle(true)
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [frontMatter, subPageTitle])
  return (
    <>
      <aside className='hidden sticky md:flex md:flex-col md:items-center md:self-start md:ml-8 md:inset-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='bg-gray-300 dark:bg-gray-700 grid rounded-lg block p-2 gap-y-5 nav'>
            <Link href={'https://ko-fi.com/N4N3FYZ80'}>
              <button
                className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
                </svg>
              </button>
            </Link>
            {showSubPageTitle && (
              <Link passHref href={`${BLOG.path}/${frontMatter.slug}`} scroll={false}>
                <a className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'>
                  <ChevronLeftIcon className='w-5 h-5' />
                </a>
              </Link>
            )}
            {showButton && (
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
              >
                <ArrowUpIcon className='w-5 h-5' />
              </button>
            )}
          </div>
        </div>
      </aside>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='md:hidden fixed inline-flex bottom-5 right-5 p-2 rounded-lg z-10 shadow bg-gray-300 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600'
        >
          <ArrowUpIcon className='text-gray-600 dark:text-day w-5 h-5' />
        </button>
      )}
    </>
  )
}

export default Aside
