import { useForm } from "react-hook-form";
import { InputProps } from "../../../components/input/Input";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export function Login() {
  const { control, reset, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("Dados enviados com sucesso");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputProps
            name="name"
            control={control}
            placeholder="Digite seu usuário..."
            rules={{
              required: "Usuário é obrigatório",
              maxLength: {
                value: 25,
                message: "Usuário deve ter no máximo 25 caracteres",
              },
              minLength: {
                value: 5,
                message: "Usuário deve ter no mínimo 5 caracteres",
              },
            }}
            label="Usuário:"
          />

          <InputProps
            name="email"
            control={control}
            placeholder="Digite seu email"
            label="Email:"
            rules={{
              required: "Email é obrigatório",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Formato de email inválido",
              },
            }}
          />

          <InputProps
            name="password"
            control={control}
            placeholder="Digite sua senha"
            label="Senha:"
            rules={{
              required: "Senha é obrigatória",
              maxLength: {
                value: 25,
                message: "Senha deve ter no máximo 25 caracteres",
              },
              minLength: {
                value: 5,
                message: "Senha deve ter no mínimo 5 caracteres",
              },
            }}
          />

          <button
            type="submit"
            className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded font-semibold transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
