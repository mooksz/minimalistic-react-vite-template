import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import { clsx, type ClassValue } from 'clsx';

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
    const { tagName, className, ...rest } = props;

    if (tagName === 'a') {
        const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <a className={clsx(styles['button'], className)} {...anchorProps} />;
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    // eslint-disable-next-line react-dom/no-missing-button-type
    return <button className={clsx(styles['button'], className)} {...buttonProps} />;
}
