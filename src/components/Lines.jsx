import { decode } from 'html-entities';
import { LINES } from "../constants/constants";
import "./Lines.css";

export function Lines({ lines, handleClick }) {
    function buttonLineCreate(line) {
        let button = LINES[line].map(values => {
            let value = typeof(values.value) == 'string' ? decode(values.value) : values.value;

            return (
                <button className={values.class} key={`button-${values.value}`} onClick={handleClick} value={value}>
                    {value}
                </button>
            );
        });

        return button;
    }

    function lineCreate(lines) {
        let line = lines.map(line => {
            return (
                <div className="calc-button-row" key={`row-${line}`}>
                    {buttonLineCreate(line)}
                </div>
            );
        });

        return line;
    }

    return lineCreate(lines);
}