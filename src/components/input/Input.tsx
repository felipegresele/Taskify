import type { InputHTMLAttributes } from "react";
import { Controller, type Control, type FieldValue, type FieldValues, type Path } from "react-hook-form";

//definindo as props e tipos dela do component
type InputProps<FT extends FieldValues> = { //o T vai extender os atributos de FieldValues
    name: Path<FT>; //Garante q esse nome existe no tipo FT
    control: Control<FT>; //garente que o control seja compativel com os campos do tipo FT
    label?: string;
    rules?: object; //porque abre {} entao é um objeto
} & InputHTMLAttributes<HTMLElement>;

export function InputProps<FT extends FieldValues>({
    name, 
    control, 
    label, 
    rules, 
    ...rest //pega todas as funcoes do input
}: InputProps<FT>) { 

    return (
        <div>
            {label && <label className="p-2">{label}</label>}
            <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({field, fieldState}) => {
                return (
                    <>
                    <input {...field}{...rest}/> {/*...rest para pegar todas as funções padrão do input */}
                    {fieldState.error && <p className="text-red-500 text-xs p-2 mt-2">{fieldState.error.message}</p>}
                    </> 
                )
            }}
            />
        </div>
    )
}