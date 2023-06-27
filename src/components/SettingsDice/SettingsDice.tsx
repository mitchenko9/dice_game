import { useState } from 'react';
import { Input } from '../Input/Input'
import { useDiceEdgesContext } from '../../contexts/DiceEdgesContext';
import { useSaveSettingsContext } from '../../contexts/SaveSettingsContext';
import { validateEdgeValue } from '../../lib/edgesList';

import style from './SettingsDice.module.css';

export function SettingsDice() {
    const [validateMessage, setValidateMessage] = useState('');

    const diceContext = useDiceEdgesContext();
    const settingsContext = useSaveSettingsContext();
    if (!settingsContext || !diceContext) return null;
    const {edges, setEdges} = diceContext;

    const handleChange = (i: number, value: string = '') => {
        let newEdges = edges.slice();
        const message = validateEdgeValue(newEdges, value);
        
        if (message) {
            setValidateMessage(message);
            return;
        };

        newEdges[i].value = value;
        setEdges(newEdges);
        setValidateMessage('');
        // сброс возможности играть, если игрок в настройках при всех заполненых и сохраненых
        // полях очищает одно поле и не сохраняет изменения
        if (value === '') settingsContext.setIsSaveSettings(false);
    }

    const renderEdge = (i: number, border: string = '') => {
        return (
            <Input
                value={edges[i].value}
                onChange={handleChange}
                border={border}
                id={i}
            />
        );
    }

    const renderIndent = () => {
        return <span className={style.indent} />
    }

    return (
        <div>
            <div className={style.row}>
                {renderIndent()}
                {renderEdge(0, 'bottomBorder')}
            </div>
            <div className={style.row}>
                {renderEdge(1, 'rightBorder')}
                {renderEdge(2, 'rightBorder')}
                {renderEdge(3, 'rightBorder')}
                {renderEdge(4)}
            </div>
            <div className={style.row}>
                {renderIndent()}
                {renderEdge(5, 'topBorder')}
            </div>
            <div className={style.messageContainer}>
                <span className={style.validateMessage}>
                    {validateMessage}
                </span>
            </div>
        </div>
    )
}
