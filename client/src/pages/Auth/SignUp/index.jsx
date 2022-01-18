import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/apiCalls";
import { box } from 'tweetnacl';
import { encodeBase64 } from 'tweetnacl-util';
import {
  Container,
  Title,
  StyledForm,
  InputWrapper,
  ErrorMessage,
  SubmitButton,
  Link,
} from "../styled";

const SignUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required().min(3).max(10),
  password: yup.string().required().min(6).max(15),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const generateKeyPair = () => {
  const clientPair = box.keyPair();

  let pbkey = encodeBase64(clientPair.publicKey);
  let pvkey = encodeBase64(clientPair.secretKey);

  console.log(`Public  key: ${pbkey}\nPrivate Key: ${pvkey}`);

  localStorage.setItem('PUBLIC_KEY', pbkey);
  localStorage.setItem('PRIVATE_KEY', pvkey);
}

const SignUp = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (user) => {
    generateKeyPair();
    user.publicKey = localStorage.getItem('PUBLIC_KEY');
    signup(dispatch, user);
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
        <SubmitButton disabled={isFetching} type="submit">
          SIGN UP
        </SubmitButton>
        {error && <ErrorMessage>Opps...Something went wrong 😔</ErrorMessage>}
        <Link>Forgot your password?</Link>
        <Link>Already have an account?</Link>
      </StyledForm>
    </Container>
  );
};

export default SignUp;
