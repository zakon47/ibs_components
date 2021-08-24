import React, {FC} from 'react';
import cn from "classnames"

const css = require("./Icon.scss");
type IconProps = {
  iconName: string;
  className?: string;
  size?: 'small'|'medium'|'large';
  color?: 'primary'|'secondary'|'body'|'white';
}

export const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const { iconName = 'IE',
    className = '',
    size = 'small',
    color = 'primary',
  } = props;

  return (
    <div
      className={cn(css.iconComponent, css[iconName], css[size], css[color], className)}/>
  )
}
