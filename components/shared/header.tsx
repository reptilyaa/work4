import { Container } from './container';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex item-center justify-between py-8'>
                <div className='flex item-center gap-4'>
                    <Image src='/pizza1.svg' alt='' width={30} height={35} />
                    <div>
                        <h1 className='font-black uppercase text-2xl'>next pizza</h1>
                        <p>вкусней уже некуда</p>
                    </div>    
                </div>
            </Container>
        </header>
    );
}