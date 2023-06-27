import { Circle } from '../Circle/Circle';

import style from './ValueEdgeOne.module.css';

interface IValueEdgeProps {
    edge: string;
}

export function ValueEdgeOne(props: IValueEdgeProps) {
    const {edge} = props;

    const classD1 = style[edge] + ' ' + style[edge + 'D1'];

    return (
        <div>
            <div className={classD1}><Circle /></div>
        </div>
    )
}
