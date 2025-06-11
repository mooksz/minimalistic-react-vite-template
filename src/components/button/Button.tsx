import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Readonly<ButtonProps>) {
    const { children } = props;

    return (
        <button className={clsx(styles['button'])} type="button">
            {children}
        </button>
    );
}
