import * as React from 'react';

import clsxm from '~/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '~/components/links/UnstyledLink';

export default function PrimaryLink({
  className,
  children,
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        'inline-flex items-center',
        'font-medium text-cyan-600 hover:text-cyan-500',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-offset-2',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
