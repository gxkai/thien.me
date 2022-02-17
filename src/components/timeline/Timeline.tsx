import { RiAncientGateFill } from "react-icons/ri";
import { FaGraduationCap, FaDog, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiAol, SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Title from '~/components/ui/typography/Title'

export default function Timeline() {
  return (
    <div>
      <Title>My Journey</Title>
      <ol className="relative border-l border-zinc-400 dark:border-gray-800 mt-6 ml-6 ">
        <li className="mb-4 ml-8 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-300 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-700">
            <SiLeetcode />
          </span>
          <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            Joined LeetCode
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2nd, 2022
          </time>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Prepare for interviews and show coding ability.
          </p>
        </li>
        <li className="mb-4 ml-8 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
          <span className=" animate-pulse absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
            <FaBlackTie className="animate-none" />
          </span>

          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Applying for Jobs
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Present
            </span>
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 13th, 2022
          </time>
          <p className=" text-sm font-normal text-gray-500 dark:text-gray-400">
            Feel confident I can work as a junior web developer. Wish me Luck
          </p>
        </li>
        <li className=" ml-8  px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-red-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
            <FaDog />
          </span>
          <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            Adopted Loki
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 20th, 2021
          </time>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            My crazy 4 legged best friend
          </p>
        </li>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                {/*
              Use the `open` render prop to rotate the icon when the panel is open
            */}
                <div className="flex text-small ml-1.5">
                  <ChevronUpIcon
                    className={`text-gray-600 h-6 w-6  ${
                      open ? 'transform rotate-180 ' : ''
                    }`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-400 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  {' '}
                  <li className="mb-4 ml-8 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <AiOutlineCode />
                    </span>
                    <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                      Started Learning Javascript Online
                    </h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      September 6th, 2019
                    </time>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <p>- Angela Yu web development</p>
                      <p>- Brad Traversy Javascript</p>
                      <p>- colt steele react</p>
                    </p>
                  </li>
                  <li className="mb-4 ml-8 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900">
                      <FaGraduationCap />
                    </span>
                    <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                      Graduated From University of Connecticut
                    </h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      May 16th, 2012
                    </time>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Bachelor of Arts in Business Finance
                    </p>
                  </li>
                  <li className="mb-4 ml-8 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <SiAol />
                    </span>
                    <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                      Connectected to the Internet
                    </h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      1999
                    </time>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      beeeepeeppeboopeeeepp
                    </p>
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </ol>
    </div>
  )
}
