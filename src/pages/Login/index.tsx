import { Link, useNavigate } from 'react-router-dom';
import './index.less';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="linear-container">
      <div className="login-container">
        <img src="https://file.app.ikea.cn/content-hub/f96ef328-1efa-4dd7-befb-0fa4910a9d15/c6ce9542-e218-4c95-886f-4232b8d255d3.jpeg?x-oss-process=style/medium" />
        <div className="login-form">
          <h1>LOGIN - T00Mato</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                {isShowPwd ? (
                  <>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <EyeOutlined onClick={() => setIsShowPwd(false)} />
                  </>
                ) : (
                  <>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <EyeInvisibleOutlined onClick={() => setIsShowPwd(true)} />
                  </>
                )}
              </div>
            </div>
            <div className="form-item">
              <button type="submit" className="submit-btn">
                LOGIN
              </button>
              <p style={{ color: '#087f5b', textDecoration: 'underline' }}>
                tip: If there is no account, an account will be created
                <br />
                <Link to="/">Go Home</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
