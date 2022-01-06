import * as React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { navigation } from '~/data/nav'


const navData = [
  {
    path: '/work',
    label: 'Work',
  },
  {
    path: '/posts',
    label: 'Posts',
  },
  {
    path: '/feed',
    label: 'Feed',
  },
];

export default function Nav() {
  const { pathname } = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(null);
  return (
    <nav className="relative -mx-2 -my-1">
      <AnimateSharedLayout>
        <motion.ul
          className="flex flex-col items-end sm:items-start sm:flex-row sm:hidden gap-x-4 gap-y-1"
          onHoverEnd={() => setActiveIndex(null)}
        >
          {navData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.li key={index} onHoverStart={() => setActiveIndex(index)}>
                <Link href={item.path}>
                  <a
                    className={classnames(
                      'relative block px-2 py-1',
                      ['text-gray-600 hover:text-gray-700'],
                      ['dark:text-gray-300 dark:hover:text-white'],
                    )}
                    aria-current={pathname === item.path ? 'page' : null}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="shadow"
                        transition={{
                          duration: 0.2,
                        }}
                        className={classnames(
                          'absolute inset-0 rounded-md pointer-events-none z-0',
                          ['bg-gray-200'],
                          ['dark:bg-gray-800'],
                        )}
                      />
                    )}
                  </a>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimateSharedLayout>
    </nav>
  );
}