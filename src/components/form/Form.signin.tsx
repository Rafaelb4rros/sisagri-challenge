import { useCallback, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Input } from "../shared/input";
import { SVG } from "../shared/SVG";
import FormWrapper from "./Form.box";
import { useForm } from "react-hook-form";
import { Button } from "../shared/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Heading, Text } from "../shared/text";
import { CustomLink } from "../shared/link";
import { Box } from "../shared/box";
import { Eye, EyeSlash } from "phosphor-react";

const schema = yup
  .object({
    company: yup.string().required("A empresa e obrigatoria"),
    username: yup.string().required("O nome de usuario e obrigatorio"),
    password: yup
      .string()
      .min(6, "A senha deve ter no minimo 6 caracteres")
      .required("Insire uma senha"),
  })
  .required();

type FormData = {
  company: string;
  username: string;
  password: string;
};

export function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { signIn, loading, httpError, clearErrors } = useUser();
  const [revealPassword, setRevealPassword] = useState(false);

  const toggleReavealPassword = useCallback(() => {
    setRevealPassword(!revealPassword);
  }, [revealPassword]);

  const handleSignIn = useCallback(
    async (data: FormData) => {
      if (loading) return;

      await signIn(data);
    },
    [loading, signIn]
  );

  const PasswordInputRightIcon = () => {
    return (
      <Button
        type="button"
        tabIndex={-1}
        onClick={toggleReavealPassword}
        variant="unstyled"
      >
        {revealPassword ? (
          <EyeSlash size={20} weight="fill" color="#888888" />
        ) : (
          <Eye size={20} weight="fill" color="#888888" />
        )}
      </Button>
    );
  };

  return (
    <FormWrapper>
      <FormWrapper.Header>
        <Heading as="h2" variant="md" color="overlay">
          Acesse sua conta
        </Heading>
      </FormWrapper.Header>

      <FormWrapper.Content onSubmit={handleSubmit(handleSignIn)}>
        <Input
          leftIcon={SVG.Company}
          error={errors.company?.message || httpError?.company?.msg}
          type="text"
          placeholder="Empresa"
          aria-label="Digite sua empresa"
          {...register("company", {
            required: true,
            onBlur: (httpError?.company?.msg && clearErrors) || undefined,
          })}
        />
        <Input
          leftIcon={SVG.Person}
          error={errors.username?.message || httpError?.username?.msg}
          type="text"
          placeholder="Usuario"
          aria-label="Digite seu nome de usuario"
          {...register("username", {
            required: true,
            onBlur: (httpError?.username?.msg && clearErrors) || undefined,
          })}
        />
        <Input
          leftIcon={SVG.Lock}
          rightIcon={PasswordInputRightIcon}
          error={errors.password?.message || httpError?.password?.msg}
          type={revealPassword ? "text" : "password"}
          placeholder="Senha"
          aria-label="Digite sua senha"
          {...register("password", {
            required: true,
            onBlur: (httpError?.password?.msg && clearErrors) || undefined,
          })}
        />

        <Box
          s={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.625rem",
            textAlign: "end",
          }}
        >
          <CustomLink variant="unstyled" href="/recover">
            Esqueceu sua senha?
          </CustomLink>

          <Button loading={loading} type="submit">
            Entrar
          </Button>
        </Box>
      </FormWrapper.Content>

      <FormWrapper.Footer>
        <Text variant="lg" color="neutral-600">
          Não possui uma conta?
          <br />
          <CustomLink variant="unstyled" href="/signup">
            Solicitar cadastro
          </CustomLink>
        </Text>
      </FormWrapper.Footer>
    </FormWrapper>
  );
}
