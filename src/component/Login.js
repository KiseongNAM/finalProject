import "./Login.css";
import React from "react";
const Login = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-login">
        <div className="modal-header">
          <h1 id="modal_header">백경이네 컴공이</h1>
          <input
            type="button"
            value="X"
            name="close-button"
            onClick={onClose}
          />
        </div>
        <div className="modal-content">
          <form action="/confirmlogin" method="POST">
            <div className="id-input">
              <input type="text" name="id" placeholder="ID" />
            </div>
            <div className="password-input">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="login-button">
              <input type="submit" value="로그인" name="login-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
