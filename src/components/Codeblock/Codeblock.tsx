import React from 'react';

const css = require('./codeblock.scss');

type CodeblockProps = {
  className?: string;
  children: any;
  styled?: 'light' | 'dark';
}

export const Codeblock: React.FC<CodeblockProps> = (props) => {
  const {className = '', children = '', styled = 'dark'} = props;

  return (
    <pre className={`${css.container} ${css[styled]} ${className}`}>
        <code>
            {children}
        </code>
    </pre>
  )
}
