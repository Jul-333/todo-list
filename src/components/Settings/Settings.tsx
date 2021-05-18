import React, { useState, useContext } from 'react';
import './Settings.css';
import { Theme, ThemeContext } from '../../utils/themeContext';
import { CLASSES_COLORS } from '../../utils/constants';


const Settings = () => {
    const [activeArr, setActive] = useState<boolean[]>([true, false]);
    const { setTheme } = useContext(ThemeContext)!;

    const changeThemeColor = (colorStyle: string, index: number) => {
        if (!activeArr[index]) {
            colorStyle === CLASSES_COLORS[0] ? setTheme(Theme.Pink) : setTheme(Theme.Blue);
            setActive(activeArr.map(isActive => !isActive))
        }
    }

    return (
        <div className="block-settings">
            { CLASSES_COLORS.map((colorStyle, index) => {
                return <button
                    type="button"
                    key={index}
                    className={`theme ${colorStyle} ${activeArr[index] ? 'active-color' : ""}`}
                    onClick={() => changeThemeColor(colorStyle, index)}
                >
                </button>
            })}
        </div>
    )
}

export default Settings;
