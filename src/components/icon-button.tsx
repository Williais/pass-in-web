import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'>{
    transparent?: boolean
}

export function IconButton({transparent, ...props}: IconButtonProps) {
    return (
        <button 
            {...props} 
            className={twMerge(
                'border border-white/10 rounder-nd p-1.5',
                transparent ? 'bg-black/20' : 'bg-black/10',
                props.disabled ? 'opacity-50' : null

            )}
           
        />
    )
}