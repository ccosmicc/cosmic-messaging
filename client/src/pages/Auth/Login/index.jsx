import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../../redux/apiCalls";

import {
  Container,
  Title,
  StyledForm,
  InputWrapper,
  ErrorMessage,
  SubmitButton,
  Link,
} from "../styled";

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

/* We don't have username and password states since input data is handled by the react hook forms*/

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (user) => {
    login(dispatch, user);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN to the Cosmic ✨</Title>
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
        <SubmitButton disabled={isFetching} type="submit">
          LOGIN
        </SubmitButton>
        {error && <ErrorMessage>Opps...Something went wrong 😔</ErrorMessage>}
        <Link>Forgot your password?</Link>
        <Link>New to the Cosmic?</Link>
      </StyledForm>
    </Container>
  );
};

export default Login;
