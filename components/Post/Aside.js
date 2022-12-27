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
                className='text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d='M17.8 4H1.9C.8 4 .2 4.5.2 5.6c-.1 3.6 0 7.1 0 10.7 0 1.9 1.3 3.1 3.2 3.1 3.5 0 7-.1 10.5-.1 1.9 0 3.2-1.2 3.4-3 .1-.5.2-.5.6-.6 2.4-.2 4.3-1.3 5.3-3.5C25 8.4 22.1 4 17.8 4zm4.3 8.5c-1.1 1.7-2.8 2.3-4.7 2.4-.9 0-.9 0-1 .9 0 .5-.1 1-.4 1.5-.4.6-.9 1-1.7 1-3.6 0-7.3 0-10.9.1-1.3 0-2-.7-2.1-2-.1-3.5 0-7.1-.1-10.6 0-.6.3-.8.9-.8h8c2.7 0 5.3-.1 8 0 3.6.2 5.9 4.3 4 7.5z' />
                  <path fill="currentColor" d='M13.2 9c-.1-.3-.3-.5-.6-.7-.2-.1-.4-.3-.6-.3h-.1c-1.1-.4-2 0-2.8.7l-.2.2c-.2-.1-.3-.3-.5-.4-.2-.4-.7-.3-1-.5-1-.3-2.2 0-2.8.8-.2.2-.3.5-.4.8-.1.5-.1.9.1 1.3 0 .3.2.6.4.8.1.3.2.4.3.5.1.2.3.4.5.6.9 1.1 1.9 1.9 2.9 2.9.3.3.5.2.8 0l3.2-3.2c.5-.5.9-1.1 1-1.9.2-.4.1-.8 0-1.1 0-.2-.1-.4-.2-.5zM16.9 6.8c-.3.1-.4.3-.4.6v4.2c0 1.4-.4 1.7 1.7 1.6 2.6-.1 3.7-2.9 2.4-4.9-.8-1.3-2.4-1.9-3.7-1.5zm3.1 3.5c-.1 1.1-1.2 1.9-2.3 1.8-.3 0-.2-.2-.2-.3V8.5c-.1-.6.2-.7.7-.6 1.1 0 1.9 1.1 1.8 2.4z' />
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
                className='text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400'
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
