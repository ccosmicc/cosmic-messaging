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

//TODO: check username and email if it is already exist
const SignUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required().min(3).max(10),
  password: yup.string().required().min(6).max(15),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    //TODO:handle submit
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>SIGN UP to the Cosmic ✨</Title>
        <InputWrapper>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <label>Username</label>
          <input {...register("username")} />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <input {...register("password")} type="password" />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <label>Confirm Password</label>
          <input {...register("confirmPassword")} type="password" />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </InputWrapper>
        <SubmitButton type="submit"> SIGN UP</SubmitButton>
        <Link>Forgot your password?</Link>
        <Link>Already have an account?</Link>
      </StyledForm>
    </Container>
  );
};

export default SignUp;
