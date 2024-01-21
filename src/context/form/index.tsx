import { zodResolver } from "@hookform/resolvers/zod";
import { createContext } from "react";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
} from "react-hook-form";
import { z } from "zod";

type PropsFormContext = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

const FormContext = createContext<PropsFormContext>({} as PropsFormContext);

const createUserFormSchema = z.object({
  name: z.string().min(1, "O nome deve conter no mínimo 5 caracteres"),
  email: z.string().min(1).email("Formato de e-mail inválido"),
  phone: z.number().min(9, "Telefone inválido"),
});
function FormContextProvider({ children }: FormContextProviderProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });
  return (
    <FormContext.Provider
      value={{
        register,
        errors,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContextProvider };
export default FormContext;
