import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Title,
  StyledForm,
  InputWrapper,
  ErrorMessage,
  SubmitButton,
  Link,
} from "../styled";

const SignupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(15),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    //TODO:handle submit
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN to the Cosmic ✨</Title>
        <InputWrapper>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <input {...register("password")} />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputWrapper>
        <SubmitButton type="submit"> LOGIN</SubmitButton>
        <Link>Forgot your password?</Link>
        <Link>New to the Cosmic?</Link>
      </StyledForm>
    </Container>
  );
};

export default Login;
