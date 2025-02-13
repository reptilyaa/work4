import image from 'pizza1.svg'
import { Container } from './container';
    import * as React from 'react';
import { cn } from '@/lib/utils';
interface Props {
className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
return (
    <header className={cn('border border-b', className)}>
    <Container className='flex items-center justify-between py-8'>
        <h1 className='font-black uppercase 2xl'>next pizza</h1>
        <img className='/pizza1.svg'alt=''></img>
    </Container>
</header>
);
}