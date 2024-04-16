import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick?: () => void;
}

export function Button({onClick,children}: PropsWithChildren<ButtonProps>) {
  return (
    <div className={styles.root}>
    <button className={styles['root-button']} onClick={onClick}>
      {children}
    </button>
    </div>
  );
}

export default Button;
