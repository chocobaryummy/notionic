import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <a>
      <p className='mr-2 rounded-full px-2 py-1 bg-gray-300 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 leading-none text-sm'>
        {tag}
      </p>
    </a>
  </Link>
)

export default TagItem
