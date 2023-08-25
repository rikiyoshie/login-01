// LoginForm.js

import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // ログインボタンの活性化条件
  const isLoginEnabled = id.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-form">
      <h1 className="title">ログイン</h1>
      <div className="input-group">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          placeholder="IDを入力してください"
          value={id}
          onChange={(e) => setId(e.target.value)}
          maxLength={254}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">パスワード</label>
        <div className="password-input">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={100}
          />
          <button onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? "非表示" : "表示"}
          </button>
        </div>
      </div>
      <button className="login-button" disabled={!isLoginEnabled}>
        ログイン
      </button>
    </div>
  );
};

export default LoginForm;
