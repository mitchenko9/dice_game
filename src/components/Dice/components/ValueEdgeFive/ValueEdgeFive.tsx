import { Circle } from '../Circle/Circle';

import style from './ValueEdgeFive.module.css';

interface IValueEdgeProps {
    edge: string;
}

export function ValueEdgeFive(props: IValueEdgeProps) {
    const {edge} = props;

    const classD1 = style[edge] + ' ' + style[edge + 'D1'];
    const classD2 = style[edge] + ' ' + style[edge + 'D2'];
    const classD3 = style[edge] + ' ' + style[edge + 'D3'];
    const classD4 = style[edge] + ' ' + style[edge + 'D4'];
    const classD5 = style[edge] + ' ' + style[edge + 'D5'];

    return (
        <div>
            <div className={classD1}><Circle /></div>
            <div className={classD2}><Circle /></div>
            <div className={classD3}><Circle /></div>
            <div className={classD4}><Circle /></div>
            <div className={classD5}><Circle /></div>
        </div>
    )
}
