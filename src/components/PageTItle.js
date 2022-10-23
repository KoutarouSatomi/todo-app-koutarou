import React from 'react';
import style from '../styles/modules/title.module.scss';

function PageTItle({ children, ...rest }) {
  return (
    <p className={style.title} {...rest}>
      {children}
    </p>
  );
}

export default PageTItle;
