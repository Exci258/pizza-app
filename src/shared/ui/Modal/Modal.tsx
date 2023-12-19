import { ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cls from './Modal.module.scss';

interface ModalProps {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const { children, isOpen, onClose } = props;

    return (
        <Transition
            show={isOpen}
            as={Dialog}
            onClose={onClose}
            className={cls.Modal}
        >
            <div className={cls.ModalOverlay}>
                <Dialog.Panel className={cls.ModalContent}>
                    {children}
                </Dialog.Panel>
            </div>
        </Transition>
    );
};
