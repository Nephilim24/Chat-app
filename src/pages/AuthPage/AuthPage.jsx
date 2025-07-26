import { useState } from "react";
import NavBar from "../../widgets/NavBar/NavBar";
import TextField from "../../widgets/TextField/TextField";
import './AuthPage.scss';
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: { email },
      password: { password },
    };
    navigate('/chat');
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="auth-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Вход</h2>
          <TextField placeholder={'Введите email'} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField placeholder={'Введите пароль'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmit}>
            <span>Авторизация</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
