import {memo, useId} from "react";
import Select from 'react-select';
import {SelectOptions} from "../../data/data.ts";

type Value = SelectOptions | null

type CustomSelectProps = {
    name: string
    img: string
    onChange: (value: Value) => void
    value: Value
    options: SelectOptions[]
}

function CustomSelect({name, onChange, value, options, img}: CustomSelectProps) {
    const id = useId()

    return (
        <div className="d-flex flex-column col-md-6">
            <div className="d-flex align-items-center">
                <label htmlFor={id}>{name}</label>
                <img src={`/GreenBank/img/${img}.png`} alt={name} style={{width: "60px", height: "60px", objectFit: "contain"}}/>
            </div>
            <Select defaultValue={value} onChange={onChange} options={options} required/>
        </div>
    )
}

export default memo(CustomSelect)