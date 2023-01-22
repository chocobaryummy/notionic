import Link from 'next/link'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Page404 = ({ statusCode }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='inline-flex items-center gap-2.5 mb-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='150'
              height='150'
              viewBox='0 0 1500 1500'
              className='h-6 hover:text-blue-500 fill-current dark:text-white'
            >
              <g transform='translate(0.000000,10) scale(0.800000,0.800000)'>
                <path d='M783.9 430.4c-2.2.2-4.4 0-11.1 0 10.9-8.9 18.5-15.2 26.2-21.4-1.3-1.7-2.5-3.4-3.8-5.1-14.2 10.3-28.3 20.7-42.8 31.2-4.5-14.5-8.9-29.3-25-36.6 4.4 8.3 8.7 16.6 13.1 24.9-83.2-73.2-190.5-50.3-216.7 39.3-7.9-2.9-15.5-6.6-23.6-8.4-8.2-1.8-16.8-2.7-25.2-2.2-32.8 2.2-53.6 26.2-49.6 56.6 2.5 18.8 12.5 33.4 27.6 44.4 17.6 12.8 37.9 17.1 59.2 18 34.9 1.4 66.3-10.3 97.6-24.2 15.2-6.8 32-12 48.5-13.6 26.2-2.6 42.7 12.8 44.7 39.1.9 11.8-.4 23.8-1.3 35.7-.8 10.2-2.1 21.1 9.7 25.5 10.9 4.1 16.3-4.7 23.4-11.5 5.6-5.5 16.4-11.2 22.4-9.2 7.2 2.3 14.4 11.9 16.8 19.7 4.4 14-4.1 27.7-19.8 36.5-8 4.5-16.7 7.8-28.3 13.2 8.4 1.1 13.4 1.8 19.2 2.5 1.4 13.1 2 26.1 4.5 38.7 2.5 12.6 6.4 25 10.4 37.3 3.8 11.7 7.9 23.7 22.5 27.6-5.5-11.9-11.1-23.7-15-32 14.3-7.3 29.1-11.1 38.6-20.3 60.1-58.4 93.5-128.6 87.1-213.9-4.3-58.5-51.1-96.7-109.3-91.8zM439 508c-5.9-13.3-1.8-26.8 10.1-36.3 16.4-13 46.5-13.1 66.3 1.7-35.2-6.6-63.5-2.1-76.4 34.6z' />
                <path d='M979.4 317.2c-163.6-123.9-345-136.8-529.9-53.8-234 105-350.7 355.7-282.1 598 53.6 189.2 182.5 298.7 372.7 338.8 22.7 4.8 46.7 3.1 70.2 4.5.1-1.6.3-3.2.4-4.7-3.2-.8-6.3-1.9-9.5-2.2-51.2-4.2-100-17.9-147.2-37.8-99.4-41.8-182.4-103.1-232.2-201.6-86.5-170.9-84.9-340.8 21.1-501.5C333 320.4 464 243.3 628.6 229.6c158.9-13.2 295.1 37.2 403.9 154.6 103.4 111.5 142.7 245.2 125.3 394.8-20.5 176.3-106.7 307.2-272.5 380.5-17.1 7.6-30.9 8.1-44.1-5.9 1.1-2.4 2.2-5 2.4-5.4h-35.2c5.3-6.1 7.8-9.1 10.3-12-.5-.6-.9-1.1-1.4-1.7-9.8 4.2-19.6 8.4-29.3 12.6-.7-1.5-1.3-3-2-4.4 2.1-1.9 4-4.2 6.4-5.6 23.8-13.9 48.1-13.9 73-3.1 7.8 3.4 16 6.1 23.9 9.1.5-1.7 1-3.5 1.5-5.2-25.5-20.2-54.6-26.7-86.1-17.8-17.1 4.8-31.8 14.8-39.1 36.4 29.8-5.2 53.8 1 79.8 17.6-15.1 4.7-26.5 7.9-37.5 11.9-7.6 2.7-12.6 2.2-17.2-5.6-2.7-4.6-10-10.7-13.6-9.8-19.8 5-37.5-8.9-58.4-3.5-13.3 3.5-24.3 6.8-29.5 18.2-7 15.1-12 31.5-15.7 47.8-1.3 6 1.7 16 6.3 19.2 3.7 2.6 12.6-2.3 21.2-4.3 10.5 13.1 18.1.2 25.9-8.3 11.2 11.3 34.1 6.8 44.7-8.9 4.1-6.1 5.7-13.9 8.4-21-1.8-.8-3.7-1.7-5.5-2.5l-13.2 21c-6.6-15.6-2.7-29.1 4.8-41.6 4.9-8.2 12.2-8.5 15.5.6 3.3 9.1 9 9.2 16.2 8.4 8.9-1 17.9-1.6 26.7-3.5 96.8-21.8 177.3-70.8 240.5-147.1 69.3-83.7 102.5-181.8 109.2-289 11.2-179.9-51.2-330.1-194.8-438.9zm-290.8 926c-1.5-.6-2.9-1.2-4.4-1.9-4.6-23.7 10.1-55.7 30.4-62.1-9.1 22.2-17.5 43.1-26 64zm21.7 1.4c-8.8-22 6.4-61.4 29.4-73.6-11.7 25.1-8 53.1-29.4 73.6zm32.1-3.2c-9.7-24.3-1.5-57.8 12.1-60.5-3.8 19-7.5 37.9-12.1 60.5z' />
                <path d='M474.5 984.2c3.2-19.5 11-38.3 15.2-57.7 5.4-25.1.1-35.5-22-48.9-3.8-2.3-7.8-4.2-12.1-6.6 3.6-23.1 13.7-42.8 28.6-60 14.6-16.8 20.9-36.3 18.3-58.1-1.8-14.6 3-26 11.3-37.4 8.6-11.7 16.1-24.4 24.9-38h15.2c-2 17-25.6 30-7.5 47.8 9 8.9 32.4 4.4 42-6.2-8.6.8-16.4 2.2-24.2 2.1-14.1-.3-17.6-5.3-11.1-17.6 6.5-12.2 13.9-24.2 22.7-34.8 18.6-22.2 12.6-46.7-15-53-35.3-8.1-71-15-106.5-21.9-6.2-1.2-13.6-1.7-19.1.7-4.5 1.9-7.1 8.2-10.5 12.7-14 6.1-27.1 3.7-41.2-1.8-15-5.8-31.2-7.7-46.6 3.6 18.4 21.8 23.7 44.3 14.3 72-24.6-18-12.3-42.5-14.2-65.3-13.3 15.8-13.9 46.3-3.1 62.2 8.7 12.8 27 15.9 47.6 9.9 12.7-3.7 27.7-9.6 38.8-6 21.8 7.1 41.6 6.4 62.4-1 3.2-1.1 7.2-.2 10.9-.2l3 4.5c-10.7 11.6-20.8 23.8-32.1 34.6-9.6 9.1-16.6 18.6-17.2 31.8 8-9.2 14.5-19.5 23.6-26.3 9.8-7.3 18.2-14.1 23.3-25.8 6.2-14.1 16.6-18 30.7-13.6-4.9 6.7-9 13.4-14 19.3-12.5 14.6-19.9 30.3-17.2 50.5 2.3 16.9-3.4 32.6-14.6 45.7-22 25.9-34.2 55.8-37 89.7-.3 3.8-1.6 7.4-3.1 14.1-25.2-13.6-48.8-26.4-72.5-39.2 31.4 32.6 68.5 53.9 114.6 59.9-6.8 25.3-14.1 50.1-19.9 75.2-7.9 34.3-5.8 62.7 5.5 75.7 0-5.9-.3-10.2.1-14.4 2.2-26 3.5-52.3 7.7-78.2zm-70.7-309.7c-1.5.1-3 .2-4.4.3v-51.6c8.2 16.4 11 33.7 4.4 51.3zm24.7-1.9c-13.8-7.5-7.7-19.8-7-30.6.7-11.4 2.1-22.8 3.3-34.2 19.9 13.7 22.1 49.5 3.7 64.8zm76.9-17.4c-.9 9.1-2.1 19.1-17.7 21 13.6-21.8 6.9-42.5 3-63.9 11.8 11.9 16.2 26.6 14.7 42.9z' />
                <path d='M863.2 293.2c9.1 3.8 18.2 7.4 27.3 11 .7-1.3 1.5-2.6 2.2-3.9-12.1-15.3-30-22-47.6-27.7-159.1-51.4-310.5-34.1-450.7 57.5C289.6 398.6 218.1 493 192.9 617.5c-7.1 35.2-6.6 72.2-7.9 108.4-.4 10.2 5 20.5 7.8 30.8 1.4-.4 2.8-.8 4.3-1.1 0-5.4.2-10.9 0-16.3-3.1-76.4 6.7-150.4 41.8-219.4 117.4-231.5 402.4-318.7 624.3-226.7zM1080.9 942.6c.6-6.7-1.1-11.3-3.8-15.2-33.9-47-73.7-88.2-124.2-117.1-41.8-23.9-86.2-25.1-131.1-7-11.7 4.7-18.7 11.7-20.6 24.6-3 19.8-12.4 36.6-26.7 50.7-20.9 20.5-44.8 22.5-68.8 5.9-9.2-6.4-18.4-12.6-27.6-18.9-.7 1.1-1.4 2.1-2.1 3.2 18.1 23.8 41.4 39.6 71.9 43.5 19.4 2.4 34.3-5.7 42.7-23.4 6.1-13 13-26.4 15.3-40.3 4.1-25 20.8-34.6 41.9-40.8 48.6-14.2 91.6-.2 127.9 31.3 33.4 28.9 63.2 62 94.7 93.2 3.4 3.5 7 6.9 10.5 10.3zM1048.7 1339.6c-31.5-47.3-62.3-95-94-142.2-4.8-7.2-12.8-12.3-19.3-18.4-1.3 1.1-2.5 2.3-3.8 3.4 2.3 4.6 4.4 9.4 7.1 13.9 21.7 35.8 42.3 72.3 65.4 107.2 34.7 52.3 70.9 103.7 107 155 5.9 8.5 14.7 15 22.1 22.4l5.4-3.9c-4.2-7.8-7.8-16.1-12.8-23.5-25.5-38.1-51.6-75.7-77.1-113.9zM1067.3 1413.6c-37.9-56.8-75.3-114-113.3-170.7-7.8-11.6-17.6-21.8-26.5-32.6-1.7 1.4-3.3 2.8-5 4.2 3.1 5.5 5.9 11.3 9.3 16.5 34.2 52.1 68 104.4 102.8 156.1 19.7 29.3 40.8 57.8 61.6 86.4 3.4 4.6 8.6 8 13 11.9 1.2-1 2.4-2 3.7-3-3.1-5.9-5.6-12.2-9.3-17.6-11.9-17.2-24.7-33.8-36.3-51.2zM516.4 1098.4c10.7-13.6 20.3-28.5 27.5-44.1 14.9-32.1 27.7-65 41.8-97.5 15-34.7 33.9-66.7 66.3-88.4 2.9-1.9 6.1-3.5 9.1-5.3-1.4-1.5-2.8-3-4.1-4.5-18.6 3.6-32.2 15.9-41.7 30.8-16.8 26.3-31.8 53.9-46 81.7-24.1 47-32.1 102.9-77.6 139 9.3-2.3 19.4-5.1 24.7-11.7zM552.2 744.9c.4 3.7.1 7.6 1.4 10.9 9 23.6 21.2 45.1 42.4 59.9 24.8 17.3 51.9 21.8 80.6 11.4 4.8-1.7 8.6-6.3 12.9-9.5-.6-1.5-1.3-3-1.9-4.5-27.7 13.8-54.9 15-81.3-1.3-25.8-15.9-37.5-42.6-49.7-68.8-1.5.7-2.9 1.3-4.4 1.9zM431.8 695.6c-40.6 39.8-57.5 137.9-33.7 173.8 0-29.3-.1-59.9 0-90.5.1-32.1 23.8-55 33.7-83.3zM672.8 1013.1c-14.5 30.9-27.7 58.7-41.7 88.5 18.3-6.7 49-69.2 41.7-88.5zM1005.7 1035.6c4.9-23.6-18.5-71-40.4-75.7 13.2 24.7 26.4 49.3 40.4 75.7zM603 663.7c2.4 10.1 11.3 11.8 20.5 7.4 11.3-5.4 21.5-27.3 19.3-45.7-13.1 12.3-9.9 33.9-29.5 38.3-2.3-12.5-4.5-23.9-6.7-35.4-2.1.4-4.3.7-6.4 1.1.8 11.4.2 23.2 2.8 34.3zM451.7 955c-14.4-3.5-29.8-5.3-43.4-11.2-14.1-6.1-26.5-16.1-39.7-24.5 5.2 25.6 62.9 49.9 83.1 35.7zM683.4 1179.4c.5-2.3.9-4.6 1.4-6.9-12.1-2.6-24-6.1-36.2-7.3-3.4-.3-11.1 8.1-10.6 9.1 3.8 7 8.2 14.7 14.5 19.2 6.9 4.9 16.2 9.2 24.8 1.2-10.7-5.1-20.8-9.9-31-14.7.8-2.2 1.6-4.3 2.3-6.5 11.6 2 23.2 4 34.8 5.9zM340.1 964.4c1.6.3 3.3.5 4.9.8 5.2-28.6 10.3-57.2 15.5-85.7-1.9-.3-3.7-.5-5.6-.8-4.7 28.6-16.3 56.1-14.8 85.7zM606.7 588.3c12.5-5.1 24-9.5 35.2-14.5 1.6-.7 3.6-4.8 3.1-5.6-1.4-2-4.9-4.8-6.4-4.3-11.9 4.5-23.6 9.5-35.1 14.9-1.3.6-2.2 4.6-1.5 6.3.7 1.7 3.6 2.5 4.7 3.2z' />
                <path d='M332.4 529c-1.4-.3-2.9-.7-4.3-1-12.5 12.8-17.6 35.4-6.8 48.3 3.7-15.8 7.4-31.5 11.1-47.3zM777.4 953c-1.2-6.4-5.3-12.3-8.2-18.3H764c-2.4 4.1-7.8 9.3-6.7 12.1 2.3 6 7.8 10.7 12 15.9 2.9-3.2 8.5-7 8.1-9.7zM584.1 766.1c1 .7 2.1 1.3 3.1 2 6.6-2.4 13-5.9 19.7-6.7 6-.7 12.4 1.8 18.7 2.9.2-1.7.4-3.5.7-5.2-10.3-7-21.6-10.7-33.6-4.4-3.8 1.8-5.8 7.4-8.6 11.4zM794.4 990.6c-3.6-6.3-8.7-11.9-13.3-17.7-2.5 3.1-5.1 6.2-9.8 12 6.3 5.5 11.4 9.9 16.5 14.3 2.4-2.9 7.3-7.3 6.6-8.6zM548.1 574.9c-.3 2.1 0 5.5 1.4 6.5 7.1 5.2 14.5 10 22.2 14.4 1.5.9 4.8-.1 6.6-1.3 1-.6 1.4-4.5.7-5.1-8.4-6.6-17-12.9-25.9-19.4-2.5 2.3-4.7 3.5-5 4.9zM255.5 596c13 3.1 26 6.1 39 9.2.6-2.5 1.1-5.1 1.7-7.6-13-3.1-26-6.2-38.9-9.4-.7 2.6-1.3 5.2-1.8 7.8zM276.3 563.4c9 10.6 16.3 19 26 30.4.9-20.6-7.4-30-26-30.4zM1013.1 932.6c-1.3 2.4-2.5 4.9-3.8 7.3 8.6 4.4 17.2 8.9 26 12.9.9.4 3.8-1.4 4.3-2.8s-.2-4.4-1.3-5c-8.3-4.4-16.8-8.3-25.2-12.4zM909.2 978.2c1.5-1.5 2.9-3.1 4.4-4.6-7.3-6.7-14.5-13.4-21.8-20.1-1.5 1.4-3.1 2.9-4.6 4.3 2.7 11.9 12.6 15.9 22 20.4zM619.5 1034.4c-2.2-10.5-8.6-17.9-18.2-22.8-1.6 1.2-3.2 2.3-4.7 3.5 5.7 7.7 11.4 15.5 17.1 23.2 2-1.3 3.9-2.6 5.8-3.9zM649.1 964.4c6.3-8.8 12-16.7 17.7-24.6-17.3 2.3-23.8 12.8-17.7 24.6zM949.9 1072.1c-12.3-4.2-21.4-7.3-33.4-11.3 7.1 16 16.8 19.3 33.4 11.3zM911.2 880.4c-2.4-1.6-4.8-3.1-7.2-4.7-4.8 7.5-9.6 15.1-14.4 22.6l6.3 4.2c5.1-7.4 10.2-14.7 15.3-22.1zM835.6 1057.1c5.2-6 10.4-12.1 17-19.8-16-.5-20.3 4-17 19.8zM737.4 1055.2c-8.3-5.5-14.9-9.8-21.4-14.2 4.2 16.6 8.3 19 21.4 14.2zM1334.2 123.9C1290.6 39.4 1205.4-6.7 1107.9.8 1060 4.5 1015.4 17.7 979 50.1c-76.7 68.2-75.5 167.9 2.9 235.2 20 17.1 42.8 30.8 64.3 46.2 8.5 6.1 17 12.2 25.1 18.8 22.6 18.5 34.2 42.3 33.6 71.8-.2 7.9-.2 15.8-.2 23.6 21.4 2.6 54-34.5 55.2-64.5-15.3 19.1-22.9 45-47.3 57.9-.8-3.3-1.7-5.2-1.5-6.9 5.5-40.9-10.6-72-43.2-95.4-17.4-12.5-35.5-24-53.2-36.1-28.7-19.7-53.2-43.3-69.5-74.8-21-40.5-19.8-80.6 1.1-120.3C976 48.9 1025.2 20 1087 11.5c79-10.9 149.7 6.9 206.1 66.6 21.5 22.7 36.8 49.5 46.6 79.3 20.6 63.3-1.5 127.5-60.9 163-32.1 19.2-68.3 31.6-102.6 47.1 10.4-1.9 21.6-3.4 32.6-6 34.5-8.3 65.6-23.8 92.8-46.5 56.8-47.4 69.1-120.4 32.6-191.1z' />
                <path d='M1220.4 159.6c-.4-4-1.8-8-3.4-15-16.5 22.9-30.8 42.9-47.2 65.7 9.1-1.2 14-2.2 19-2.5 11.6-.8 25-9.6 31.3 5.9 3.9-6 7.8-11.9 11.7-17.8-11.6.2-11.2-9.2-11-18.7.1-5.9.1-11.8-.4-17.6zm-6.5 32.8c-.2 2-4.2 4.7-6.9 5.4-5.9 1.5-12.2 2-22.4 3.6 10.1-14.1 18.1-25.2 26.1-36.3 1.2.2 2.4.5 3.6.7-.1 8.9.4 17.8-.4 26.6zM1065.8 175.7l-1.5-36.9c-1.7-.3-3.3-.5-5-.8-17 23.4-34 46.9-50.9 70.3.6 1.3 1.2 2.6 1.8 3.8 15.9-2.3 31.8-4.7 46.7-6.8 3.5 5.5 6 9.5 7.5 11.9 5.6-8.2 10.3-15.1 15.2-22.3-14.5 1.5-13.4-9.4-13.8-19.2zm-41.4 24.9c10.8-15.2 20.1-28.3 31.8-44.8 4.4 45.4 6.7 42.2-31.8 44.8zM1092.7 174.6c.1 19.4 15.8 35.5 34.8 35.6 16.6.1 32-13.9 31.8-29.1-.3-26.4-13.2-44.4-31.7-44.4-18 .1-35 18.5-34.9 37.9zm59.7-.6c0 15.5-11.3 28.5-24.8 28.8-14 .3-26.7-13.2-26.8-28.5-.1-13.9 13.8-29.4 26.5-29.7 11.3-.3 25.1 16 25.1 29.4zM886.6 1235.6c-29.6-16.4-75.9-7.8-103.2 19.8-8.8 8.8-19.9 19.2-9.8 32.1 10.5 13.3 22.1 2.6 33.1-3 11.9-6 23.9-12.9 36.7-15.4 16.9-3.3 28.7 12.8 22.1 28.8-2.9 7.1-8.4 13.4-14 18.9-10.6 10.5-22.4 19.8-33.1 30.3-14.5 14.3-24.5 31.5-27.4 52-3.1 21.5-.4 24.5 23.2 26.6 14.8-33.4 20-38.5 48.5-63.8 16.9-15 34-31.3 46.1-50.1 18.2-28.5 7.4-59.7-22.2-76.2zM804.6 1447.4c-14.6-.8-30.5 16.4-30.8 32.6-.2 11.6 8 20.1 19.2 20 13.3-.1 24.3-14.4 24.8-33.5 0-8.2.1-18.4-13.2-19.1zM649.4 1342.7c7-21.5 13.5-44.2 14.4-66.6 1.3-33.8-23.8-55.3-57.6-54.5-33.9.8-69.4 31.7-79 69.3-3.1 12.1-7.5 26.7 7.8 32.6 15.8 6.2 20.3-9 27-19.3 7.2-11.2 14.1-23.2 23.9-31.9 12.9-11.4 31.2-3.5 33.6 13.7 1.1 7.6-.5 15.9-2.5 23.4-3.8 14.4-9.3 28.4-13.2 42.8-5.3 19.7-5.2 39.5 2.6 58.7 8.2 20.1 12.1 21.3 33.4 11.2-4.2-36.1-2.2-43.2 9.6-79.4zM642.4 1445.9c-13 6.7-18 29.6-10.1 43.7 5.7 10.1 17 13.3 26.6 7.6 11.4-6.8 13.7-24.7 4.5-41.4-4-7.2-9-16.1-21-9.9zM400.4 1217.7c-4 0-6.6 3.2-6.6 6.9 0 3.5 2.5 5.6 5.5 5.6 1.2 0 2.2-.2 3.2-.7l-.3-.8c-.7.4-1.7.6-2.7.6-2.7 0-4.6-1.9-4.6-4.9 0-3.7 2.5-6 5.4-6 2.8 0 4.4 1.9 4.4 4.5 0 2.1-1 3.3-1.9 3.3-.6 0-.8-.6-.5-2l.6-3.3c-.5-.2-1.2-.4-1.9-.4-2.5 0-4.3 2-4.3 4.3 0 1.4.9 2.3 1.9 2.3 1.1 0 1.9-.5 2.5-1.6h.1c-.1 1.1.6 1.6 1.3 1.6 1.7 0 3.2-1.6 3.2-4.3-.1-2.9-2.2-5.1-5.3-5.1zm.7 6c-.2 1.1-1.2 2.5-2.2 2.5-.8 0-1.2-.6-1.2-1.4 0-1.7 1.3-3.2 2.9-3.2.4 0 .7.1.9.1l-.4 2zM415.4 1221.3c0 1.9 0 3.4.2 5-.6-1.2-1.3-2.5-2.2-4l-3.9-6.2h-1.7v12.2h1.5v-5.2c0-2 0-3.5-.1-5h.1c.6 1.3 1.4 2.7 2.3 4.1l3.9 6.2h1.6v-12.2h-1.5v5.1zM423.2 1219.4c-2.4 0-4.3 1.7-4.3 4.6 0 2.8 1.8 4.5 4.2 4.5 2.1 0 4.3-1.4 4.3-4.6 0-2.7-1.7-4.5-4.2-4.5zm0 8c-1.6 0-2.7-1.4-2.7-3.4 0-1.7.8-3.4 2.7-3.4 1.9 0 2.6 1.9 2.6 3.4 0 1.9-1.1 3.4-2.6 3.4zM431.4 1217.1l-1.6.4v2.1h-1.4v1.2h1.4v4.8c0 1 .2 1.8.6 2.3.4.4 1 .7 1.7.7.6 0 1.1-.1 1.4-.2l-.1-1.2c-.2.1-.5.1-.9.1-.9 0-1.2-.6-1.2-1.7v-4.7h2.3v-1.2h-2.3v-2.6zM435.4 1219.6h1.6v8.7h-1.6zM436.2 1216.2c-.6 0-1 .4-1 1 0 .5.4 1 1 1s1-.4 1-1-.4-1-1-1zM443.3 1219.4c-2.4 0-4.3 1.7-4.3 4.6 0 2.8 1.8 4.5 4.2 4.5 2.1 0 4.3-1.4 4.3-4.6 0-2.7-1.7-4.5-4.2-4.5zm0 8c-1.6 0-2.7-1.4-2.7-3.4 0-1.7.8-3.4 2.7-3.4 1.9 0 2.6 1.9 2.6 3.4 0 1.9-1.1 3.4-2.6 3.4zM449.5 1215.5h1.6v12.8h-1.6zM457.5 1224.7c-.2.6-.4 1.3-.6 1.8-.1-.5-.4-1.2-.6-1.8l-1.9-5.2h-1.7l3.2 8c.1.2.1.3.1.4 0 .1-.1.2-.1.4-.4.8-.9 1.4-1.3 1.8-.5.4-1 .6-1.4.8l.4 1.3c.4-.1 1.2-.3 1.9-1 1.1-.9 1.9-2.5 3-5.5l2.4-6.2h-1.7l-1.7 5.2zM462.3 1226.3c-.6 0-1.1.5-1.1 1.1 0 .6.4 1.1 1.1 1.1.7 0 1.1-.5 1.1-1.1 0-.7-.5-1.1-1.1-1.1zM469.4 1220.7c.9 0 1.5.2 1.8.4l.4-1.2c-.4-.2-1.3-.5-2.2-.5-2.9 0-4.7 1.9-4.7 4.6 0 2.7 1.7 4.5 4.3 4.5 1.2 0 2.1-.3 2.5-.5l-.3-1.2c-.5.2-1 .4-1.9.4-1.7 0-3-1.2-3-3.3 0-1.7 1.1-3.2 3.1-3.2zM477 1219.4c-2.4 0-4.3 1.7-4.3 4.6 0 2.8 1.8 4.5 4.2 4.5 2.1 0 4.3-1.4 4.3-4.6 0-2.7-1.7-4.5-4.2-4.5zm-.1 8c-1.6 0-2.7-1.4-2.7-3.4 0-1.7.8-3.4 2.7-3.4 1.9 0 2.6 1.9 2.6 3.4.1 1.9-1 3.4-2.6 3.4zM492.8 1219.4c-.8 0-1.4.2-1.9.6-.4.3-.7.6-1 1.1-.4-1-1.3-1.7-2.5-1.7-1.4 0-2.3.8-2.7 1.6h-.1l-.1-1.4h-1.4c.1.7.1 1.5.1 2.4v6.4h1.6v-5.3c0-.3 0-.5.1-.8.3-.8 1-1.6 2-1.6 1.2 0 1.8 1 1.8 2.4v5.2h1.6v-5.4c0-.3.1-.6.1-.8.3-.8 1-1.4 1.9-1.4 1.3 0 1.9 1 1.9 2.7v4.9h1.6v-5.1c-.1-3-1.8-3.8-3-3.8z" />
              </g>
            </svg>
          </div>

          <p className='text-sm md:text-base font-semibold uppercase mb-4'>
            {t.ERROR.MESSAGE}
          </p>
          <h1 className='text-2xl md:text-3xl font-bold text-center mb-2'>
            {statusCode
              ? `${statusCode} - ${t.ERROR.TITLE}`
              : `Error - ${t.ERROR.TITLE}`}
          </h1>

          <p className='max-w-screen-md md:text-lg text-center mb-12'>
            {t.ERROR.HELP_TEXT}
          </p>

          <Link href='/' scroll={false}>
            <a className='inline-block bg-gray-300 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none px-8 py-3'>
              {t.ERROR.BACK_TO_HOME}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page404
