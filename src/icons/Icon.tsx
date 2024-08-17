import React, { FC } from 'react';

import { iconComponentsMap } from './constants';
import { IconWrapper } from './Icon.style';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ type, size, fill, className }) => {
  const Component = iconComponentsMap[type];

  return (
    <IconWrapper type={type} size={size} fill={fill} className={className}>
      <Component size={size} />
    </IconWrapper>
  );
};

Icon.displayName = 'Icon';
