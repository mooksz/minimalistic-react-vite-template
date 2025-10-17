import { type ClassValue, clsx } from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type BaseProps = {
    children: ReactNode;
    className?: ClassValue[];
};

type ButtonProps = BaseProps & {
    tagName: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = BaseProps & {
    tagName: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | AnchorProps;

export function Button(props: Readonly<Props>) {
    const { tagName, className, children, type, ...rest } = props;

    if (tagName === 'a') {
        const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a className={clsx(styles['button'], className)} {...anchorProps}>
                {children}
            </a>
        );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button type={type} className={clsx(styles['button'], className)} {...buttonProps}>
            {children}
        </button>
    );
}
