import { ComponentProps } from "react";
import {twMerge} from "tailwind-merge"

interface TableRow extends ComponentProps<'tr'>{

}

export function TableRow (props: TableRow){
    return(
        <tr {...props} className={twMerge('border-b border-white/10 hover:bg-white/5', props.className)}></tr>
    )
}