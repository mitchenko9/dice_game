import { Circle } from '../Circle/Circle';

import style from './ValueEdgeThree.module.css';

interface IValueEdgeProps {
    edge: string;
}

export function ValueEdgeThree(props: IValueEdgeProps) {
    const {edge} = props;

    const classD1 = style[edge] + ' ' + style[edge + 'D1'];
    const classD2 = style[edge] + ' ' + style[edge + 'D2'];
    const classD3 = style[edge] + ' ' + style[edge + 'D3'];

    return (
        <div>
            <div className={classD1}><Circle /></div>
            <div className={classD2}><Circle /></div>
            <div className={classD3}><Circle /></div>
        </div>
    )
}
