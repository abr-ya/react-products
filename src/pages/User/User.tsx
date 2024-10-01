import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { IUserLoginPayload } from "@api/contracts";
import { Btn, BtnGhost, H1ExtraBold } from "@components/Common.styled";
import { ButtonBlock, InputBlock, StyledLabel, StyledInput } from "@components/Form.styled";
import { useAppDispatch, useAppSelector } from "@hooks/typedRedux";
import { userLogin, userLogout } from "@/app/userSlice";
import { saveToken } from "@/api";
import { userApi } from "@/api/apiQuery";

interface IFormData {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Имя пользователя - обязательное поле"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(3, "Минимальная длина пароля - 3 символа")
    .max(24, "Максимальная длина пароля - 24 символа"),
});

const defaultValues = {
  username: "",
  password: "",
};

const User = () => {
  const { details: userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, { data, isLoading, isSuccess }] = userApi.useLoginMutation();

  const onLogin = useCallback((user: IUserLoginPayload) => loginUser(user), [loginUser]);

  const form = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormData) => {
    onLogin(data);
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Login as", data);
      dispatch(userLogin(data));
      saveToken(data.token);
    }
  }, [isSuccess, navigate, data, dispatch]);

  const Logout = () => {
    dispatch(userLogout());
  };

  if (userData?.username)
    return (
      <>
        Авторизован пользователь: {userData.username}
        <Btn onClick={Logout}>Выйти</Btn>
      </>
    );

  return (
    <ApiProvider api={userApi}>
      <H1ExtraBold>Вход</H1ExtraBold>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputBlock>
          <StyledLabel htmlFor="username">Имя пользователя</StyledLabel>
          <StyledInput type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </InputBlock>

        <InputBlock>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledInput type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </InputBlock>

        <ButtonBlock>
          <Btn disabled={isLoading}>Войти</Btn>
          <BtnGhost onClick={() => navigate("/user/new")}>Регистрация</BtnGhost>
        </ButtonBlock>
      </form>
    </ApiProvider>
  );
};

export default User;
