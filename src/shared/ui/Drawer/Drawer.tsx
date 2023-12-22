import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from 'shared/assets/icons/close.svg';
import classNames from 'classnames';
import cls from './Drawer.module.scss';
import { Button, ButtonVariant } from '../Button';

export interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const { className, onClose, isOpen, children } = props;

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className={classNames(cls.Drawer, { [cls.isOpen]: isOpen })}
                onClose={onClose}
            >
                <div className={cls.DrawerOverlay}>
                    <Transition.Child
                        as="div"
                        enter={cls.DrawerContentEnter}
                        enterFrom={cls.DrawerContentEnterFrom}
                        enterTo={cls.DrawerContentEnterTo}
                        leave={cls.DrawerContentLeave}
                        leaveFrom={cls.DrawerContentLeaveFrom}
                        leaveTo={cls.DrawerContentLeaveTo}
                    >
                        <Button
                            onClick={onClose}
                            className={cls.Btn}
                            variant={ButtonVariant.CLEAR}
                        >
                            <CloseIcon />
                        </Button>
                        <Dialog.Panel
                            className={classNames(cls.DrawerContent, [
                                className,
                            ])}
                        >
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};
