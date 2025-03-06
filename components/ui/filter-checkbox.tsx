import React from 'react';
import { Checkbox } from '@radix-ui/react-checkbox';

export interface FilterChecboxProps {
    text: string;
    value: string;
    endAdorment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
    text,
    value,
    endAdorment,
    onCheckedChange,
    checked,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={'checkbox-${String(value)}'}
            />
        </div>
    )
}