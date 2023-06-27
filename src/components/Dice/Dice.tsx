
import { useDiceEdgesContext } from '../../contexts/DiceEdgesContext';
import { getValueEdge } from '../../lib/dice';

import style from './Dice.module.css';

type DaceProps = {
    value: number,
}

export function Dice(props: DaceProps) {
    const context = useDiceEdgesContext();
    if (!context) return null;
    const {edges} = context;
    const {value: valueRoll} = props;

    const {value: valueTop, visibleEdgs} = edges[valueRoll];
    const {value: valueLeft} = edges[visibleEdgs[0]];
    const {value: valueRight} = edges[visibleEdgs[1]];

    const topEdgeValue = getValueEdge(+valueTop, 'topEdge');
    const leftEdgeValue = getValueEdge(+valueLeft, 'leftEdge');
    const rightEdgeValue = getValueEdge(+valueRight, 'rightEdge');

    return (
        <div className={style.dice}>
            <div className={style.topEdge} />
            <div className={style.leftEdge} />
            <div className={style.rightEdge} />
            {topEdgeValue}
            {leftEdgeValue}
            {rightEdgeValue}
        </div>
    )
};
