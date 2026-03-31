import { useState } from 'react';
import { RegistrationController } from './RegistrationController';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = RegistrationController.register(formData);
    
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng Ký</h2>

        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên"
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  );
}

export default RegistrationForm;