import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button/Button";
import { Dice } from '../components/Dice/Dice';
import { useSaveSettingsContext } from '../contexts/SaveSettingsContext';

import style from './Pages.module.css';

export function Game() {
    const [rollValue, setRollValue] = useState(-1);
    const navigate = useNavigate();
    const goSetting = () => navigate('/settings');

    const settingsContext = useSaveSettingsContext();
    if (!settingsContext) return null;
    const {isSaveSettings} = settingsContext;

    const rollDice = () => {
        setRollValue(Math.floor(Math.random() * 6));
    }

    const callUseSettings = 'Please fill in the dice edges in the settings and save it';
    const callPlay = 'Roll the dice';
    
    const gameDice = rollValue === -1
        ? <span className={style.textRuls}>{callPlay}</span> 
        : <Dice value={rollValue}/>;

    return (
        <div>
            <div className={style.content}>
                {
                    isSaveSettings
                        ? gameDice
                        : <span className={style.textRuls}>{callUseSettings}</span>
                }
            </div>           
            <div className={style.footer}>
                <Button 
                    onClick={rollDice} 
                    disabled={!isSaveSettings}
                    text={'Roll'}
                />
                <Button 
                    onClick={goSetting}
                    isSetings
                />
            </div>
        </div>
    )
}