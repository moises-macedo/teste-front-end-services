import { Input } from "../Input";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import "../../Assets/Styles/Css/login.css"


interface DataSubmit {
    cpf: string,
    birthDate: number,
    checkbox: boolean

}

export const Login = () => {

    const formSchema = yup.object().shape({
        cpf: yup.string().required("CPF obrigatório!"),
        birthDate: yup.string().min(8).required("Data de nascimento obrigatório!"),
        checkbox: yup.boolean().oneOf([true], 'Necessário aceitar os termos')

    });
    const { register, reset, handleSubmit, formState: { errors } } = useForm<DataSubmit>({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data: DataSubmit) => {
        reset()
        console.log(data)

    }
    return (
        <section className="container--login">
            <div className="login--title">
                <h3>login</h3>
                <p>Insira suas informações de acesso.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
            className="login--form">
                <Input
                    text="CPF"
                    {...register('cpf')}
                    className={errors.cpf ? "input-erro" : ''} />
                <Input
                    text="Data de Nascimento"
                    {...register('birthDate')}
                    className={errors.birthDate ? "input-erro" : ''} />
                <div className="form-checkbox">
                    <input 
                    type="checkbox" 
                    {...register('checkbox')} 
                    className={errors.checkbox? "input-erro-checkbox": ''} />
                    <p>Aceito os termos de privacidade</p>
                </div>
                <div className="form-btn">
                    <button>
                        <p>Entrar</p>
                    </button>
                </div>
            </form>
        </section>
    )
}
