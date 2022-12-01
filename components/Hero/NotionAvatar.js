// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
  <svg
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      transform: 'scale(-1,1)'
    }}
    viewBox='-350 -150 1500 1500'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    {...props}
  >
    <path
      className="st0"
      d="M953.8 386.9c2.2-44.6 4.8-89.2 7-133.8-3.1-.9-6.1-1.7-9.2-2.6-13.9 5.4-15.5 29-28.8 37.7-11.2 14.6-7.5-25.9-14.5-36-22.3-31.5-47.7-61.2-69.1-93.6-10.5-15.7-26.5-45.3-36.5-33.1-55.1 67.1-87.3 75.5-126.6 90.4-39.4 14.9 7.9-60-17-22.8-60.3 89.9-145.7 88.6-136.6 32.9-11.2 88.4-5.7 48.6-9.8 73.6-4.4 27.2-5.9 13.2-13.2 48.4-7.4 36-3.1 65.6-12.3 82.5-26.9-36.4-27.5-56-44.6-78.7-7.4-23.2-13.1-48.1-13.6-72.6-1.3-93.6 0-47 28.9-136.9-1.8-54 99.7-117.9 157.8-134.5 32.4-9.6 99.7-8.3 132.1-1.3C799 17.4 774.9 17 811.2 49.8c28.4 12.2 21-6.6 71.7 26.7 9.6 6.6 27.5 75.2 32.8 85.3 18.8 38 13.6 24.5 34.5 63.8 15.7-2.6 24.5 7.9 25.8 24.5 1.7 23.2 4.4 46.8 2.6 69.5-2.6 31.9-10.5 63.8-12.7 96.2"
    />
    <path
      className="st0"
      d="M965.9 415c-3.1 42 1.7 84.8-5.2 125.5-5.2 28.4-18.4 60.8-38.5 80-60.8 56.8-100.6 95.8-186.7 99.7-37.6 1.3-100.6-10.5-124.6-38.9-33.7-40.7-59-65.2-98-124.6-20.1-37.6-16.6-39.4-24.9-59 3.1-1.7 5.7-3.9 8.7-5.7 17.5 21.4 18.4 44.6 42.4 80 39.8 45.5 33.7 47.2 94.9 72.2 46.8 12.7 56.8 13.1 81.3 13.6 72.2.9 104.5 4.4 152.2-24.1 38-22.7 60.8-57.7 68.7-85.3 12.2-42 13.1-122.4 17.5-162.7M517.8 782.7c15.3-3.5 31-9.6 46.8-10.5 145.2-6.1 290.4-11.4 435.5-16.6 5.2 0 10.5 3.9 15.7 6.1-5.7 6.1-10.1 8.3-14.4 8.7-72.6 7.4-145.2 14.9-217.8 21-61.7 5.2-123.8 8.7-185.9 12.7-27.1 1.7-53.8 3.1-78.3-10.9-.8-3.5-1.2-6.6-1.6-10.5zM1058.7 802.4c3.1 7.9 6.1 16.2 8.7 24.5 41.1 136.9 60.8 277.2 71.3 419.4 1.3 14.4-1.7 29.3-4.4 43.7-.9 3.9-7 6.6-10.5 10.1-2.6-3.5-6.6-6.6-7.4-10.1-3.1-15.7-7-31.9-7-48.1-1.3-136.4-24.1-270.2-52-403.6-2.6-10.9-4.8-22.3-7-33.2 2.6-1 5.2-1.4 8.3-2.7zM514.3 812c-23.6 153.1-37.6 307.9-71.3 459.6-22.7-28 25.4-323.6 71.3-459.6zM883.3 948.4c2.6.4 4.8.4 7.4.4.9 42.4 1.7 84.4 1.7 126.8 0 6.6-7 19.2-10.1 18.8-17.5-1.3-36.3-2.2-52-9.6-17.1-7.9-21.9-27.1-16.2-44.6 5.7-18.4 21.9-24.9 40.7-24.5h18.8c3.6-23.1 6.7-45 9.7-67.3zm-26.6 83.5c-9.2-.4-23.6 10.1-26.7 18.4-4.4 13.1 14.9 23.6 44.6 23.6-11.4-14.4 15.3-40.2-17.9-42zM449.6 488.4c-16.2-26.2-33.2-52.5-45.9-80.5-6.6-14.9-12.7-41.5-5.2-48.1 16.6-15.7 32.8 4.8 47.7 14.4.9.4.4 2.6.9 7.9-11.4-1.7-21.9-3.1-39.4-5.2 13.6 24.5 24.9 45 36.3 65.2 11.4 19.7 31 35.4 24.9 64.3-6.2-6.2-14.5-11-19.3-18zM972.1 1029.3c-3.1-3.1-3.5-9.2-5.2-13.6 5.2-.4 11.8-3.9 15.3-1.7 14.9 8.3 29.7 17.1 42.4 28.4 3.9 3.5 4.8 18.4 1.3 21.9-16.6 15.7-35.4 30.2-54.2 43.7-4.8 3.5-14 1.7-21 2.2 2.6-7 3.5-16.6 8.3-21 13.1-11.8 28-21.4 46.4-35.4-13.6-9.6-23.7-16.2-33.3-24.5zM636.3 1083.5c10.5 8.7 27.1 15.3 12.7 36.3-21-16.6-41.1-31.5-60.3-48.1-3.5-3.1-4.4-11.8-3.5-17.1 3.1-14.9 45.5-47.2 62.1-49 0 1.3 1.3 3.5.9 3.9-14 15.3-28 30.6-43.7 47.7 10.3 8.8 21.3 17.2 31.8 26.3zM774.5 1031.5c1.3-6.1-2.2-10.5 9.2-12.7 12.2 0 10.5 10.9 10.9 17.1 1.3 14.4 1.3 29.3-.4 43.3-2.2 14.9-22.3 19.2-22.3 7.4 0-30.2-3.5-39.8-41.1-35.9-4.8.4-7-7.4-7-13.1 3.5-7 10.9-7.4 15.3-7 14 1.7 14 1.7 35 4.8.8-3.5-.1 0 .4-3.9z"
    />
    <path
      className="st0"
      d="M686.6 530.8c-3.1-3.1-12.7-28-10.1-31 2.6-3.1 22.3 11.4 24.9 13.6 14.4 11.4 28.4 8.3 43.7 3.5 5.2-1.3 13.1-3.1 29.7 1.7-.4 7.4-15.3 20.1-20.1 21.9-16.2 5.7-18.8 4.4-41.1 3.9-20-7-19.2-5.3-27-13.6zM614.8 327c7 5.7 16.6 10.5 20.6 17.9 5.7 10.1 8.3 21.9 9.2 33.2.9 6.1-3.1 17.1-7.4 18.8-4.8 2.2-15.7-2.2-19.2-7-7.9-10.9-12.2-24.1-19.2-38.5 6-9.5 11.2-16.9 16-24.4zM793.7 278.5c7.4 6.6 17.5 11.4 21.9 19.7 5.7 9.6 7.9 21.9 8.3 33.2.4 6.1-5.2 12.7-8.3 19.2-6.1-3.1-15.7-4.4-18.8-9.6-6.6-10.9-9.6-23.6-15.3-38 3.9-8.3 8.3-16.2 12.2-24.5zM681.8 1002.6c25.4 32.4 39.8 65.2 57.3 102.8-32-14.9-63.5-71.3-57.3-102.8zM529.1 309.1c20.6-30.2 64.7-35.4 97.1-15.3-30.2 4.8-63 10-97.1 15.3zM811.2 242.6c-27.5 7-58.2 14.9-92.3 23.6 22.8-35 70.9-42.8 92.3-23.6zM750.8 393.9c-5.7-19.2-16.6-37.2-25.4-55.5 28.9 25.8 42 59.5 44.2 97.1.9 14.9-5.7 26.7-25.8 13.6 31.1-16.7 11.9-37.7 7-55.2zM45.5 990.8c35.9 1.3 69.1 17.1 105 15.3 18.4-.9 36.3-6.1 53.8-12.2 72.2-25.4 139.9-63.4 197.7-111.5 17.9-14.4 34.5-30.2 52.9-43.7M1252 132c17.5 193.7-10.5 391.4-81.3 572.4-18.4 47.2-40.2 94-75.7 129.9"
    />
  </svg>
)

export default NotionAvatar
