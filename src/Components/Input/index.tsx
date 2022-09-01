import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import"../../Assets/Styles/Css/input.css"


interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    text: string,
    name: string,
    error?: string,
    className:string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputPros> = (
    { text, name,error,className, ...rest }, ref) => {

    return (
        <div className="container--input">
            <label >{text}</label>
            <input ref={ref}name={name} type="text" className={className}  {...rest}  />
            {!!error && <span>{error}</span>}
        </div>
    )
}
export const Input = forwardRef(InputBase)