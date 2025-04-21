import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthModule.css";

const AuthModule = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (type === "signup" && !formData.username) {
      newErrors.username = "Username is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{type === "login" ? "Hero Login" : "Join the League"}</h2>
          <p>
            {type === "login"
              ? "Access your superhero arsenal"
              : "Create your superhero identity"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {type === "signup" && (
            <div className="form-group">
              <label htmlFor="username">Superhero Alias</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "error" : ""}
                placeholder="Enter your hero name"
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Secret Communication Channel</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="your.email@herobase.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Power Code</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-auth"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : type === "login" ? (
              "Access Headquarters"
            ) : (
              "Activate Hero Profile"
            )}
          </button>
        </form>

        <div className="auth-footer">
          {type === "login" ? (
            <>
              <p>
                Not yet a hero?{" "}
                <Link to="/signup" className="auth-link">
                  Enlist now
                </Link>
              </p>
              <Link to="/forgot-password" className="auth-link">
                Forgot your power code?
              </Link>
            </>
          ) : (
            <p>
              Already part of the league?{" "}
              <Link to="/login" className="auth-link">
                Login here
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModule;
