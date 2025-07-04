interface InputProps {
    id: string;
    onChange: (value: string) => void;
    placeholder: string;
    type: "password" | "text";
}

export default function Input({id, onChange, placeholder, type}: InputProps){
    function handleChange(e: React.ChangeEvent< HTMLInputElement>){
        onChange(e.target.value)
    }

    return (
        <>
            <input id={id} onChange={handleChange} placeholder={placeholder} type={type} className='bg-zinc-700 rounded text-center text-neutral-50 w-90' />
        </>
    )
}