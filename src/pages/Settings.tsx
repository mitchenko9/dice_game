import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button/Button";
import { SettingsDice } from '../components/SettingsDice/SettingsDice'
import { useSaveSettingsContext } from '../contexts/SaveSettingsContext';
import { useDiceEdgesContext } from '../contexts/DiceEdgesContext';
import { validateAllEdgesValue } from '../lib/edgesList';

import style from './Pages.module.css';

export function Settings() {
    const [validateMessage, setValidateMessage] = useState('');
    const navigate = useNavigate();
    const goGame = () => navigate('/');

    const settingsContext = useSaveSettingsContext();
    const diceContext = useDiceEdgesContext();
    if (!settingsContext || !diceContext) return null;

    const handleClick = () => {
        const message = validateAllEdgesValue(diceContext.edges);

        if (message) {
            setValidateMessage(message);
            settingsContext.setIsSaveSettings(false);
            return;
        };

        settingsContext.setIsSaveSettings(true);
        setValidateMessage('');
    }

    const ruls = 'Enter a value in each cell from 1 to 6 without repeating';

    return (
        <div>
            <div className={style.content}>
                <span className={style.textRuls}>{ruls}</span>
                <SettingsDice />
                <div className={style.messageContainer}>
                    <span className={style.valudateMessage}>{validateMessage}</span>
                </div>
            </div>
            <div className={style.footer}>
                <Button onClick={handleClick} text={'Save'} />
                <Button onClick={goGame} text={'Back'} />
            </div>
        </div>
    )
}