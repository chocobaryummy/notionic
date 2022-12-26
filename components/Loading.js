import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Loading({ notionSlug }) {
  const { locale } = useRouter()
  const [showNotion, setshowNotion] = useState(false)

  if (notionSlug) {
    setTimeout(() => {
      setshowNotion(true)
    }, 3000)
  }

  const t = lang[locale]
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='inline-flex items-center gap-2.5 mb-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 400 400'
              className='h-6 hover:text-blue-500 fill-current dark:text-white'
            >
              <g transform='translate(0.000000,10) scale(0.800000,0.800000)'>
                <path d='M.6 0c13.6 65-2.3 112 22.1 131.7l140.1 80c10.3 5.4 33.9 21.9 39.1 42.3 3.5 13.7 5.3 29.2 5.4 45 0-.9-.2-71.9-.2-72.9.4-16.6.1-33-.7-48.7-1.6-29.7-7.3-60.2-20.3-67.2L.6 0zM222.1 321.6l-.4.6V467c16.7 0 32.5-4.1 46.7-11.3V286.1c-18.9 6.3-35.2 18.6-46.3 35.5zM304.1 278.3c-.1 0-16.6 3.4-19.1 3.9V452c29.4-21.7 48.8-58.3 48.8-99.9v-79.8l-11.6 2.4-18.1 3.6z' />
                <path d='M497.9 85.3c-.6 2.2-1 4.8-1.5 7.5-1.8 8-7.2 14.4-14.3 17l-6.5 2.4c-11.8 3.2-11.8 3.2-15 4l-183 42.5c-48.6 12.8-54.3 32-55.3 84.4-.2 8.3-.2 17.5-.3 27.6 0 4.2-.1 8.5-.1 13V311l.4-.6c10-16.8 24.9-29.2 42-35.5 3.9-1.4 7.8-2.5 11.9-3.3.9-.2 1.9-.4 2.8-.6 0 0 .1 0 .3-.1 2.3-.5 17.3-3.8 17.4-3.9l16.3-3.6 10.6-2.4 98.2-21.8c54.2-12.2 87.1-94 76.1-153.9z' />
              </g>
            </svg>
          </div>

          <p className='inline-flex items-center text-sm md:text-base font-semibold uppercase mb-4'>
            <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            {t.ERROR.LOADING}
          </p>
          {showNotion &&
            <Link passHref href={`https://${BLOG.notionDomain}/${notionSlug}`} scroll={false}>
              <a className='text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition duration-100'>
                <ExternalLinkIcon className='inline-block mb-1 h-5 w-5' />
                <span className='m-1'>{t.ERROR.TIMEOUT_TEXT}</span>
              </a>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

// export default Loading
