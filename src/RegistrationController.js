export class RegistrationController {
  static validateForm(formData) {
    const errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Tên không được để trống';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email không được để trống';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email không đúng định dạng';
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Mật khẩu không được để trống';
    } else if (formData.password.length < 6) {
      errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    return errors;
  }

  static register(formData) {
    const errors = this.validateForm(formData);

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    console.log('Dữ liệu đăng ký:', formData);
    alert(`Đăng ký thành công!\nTên: ${formData.name}\nEmail: ${formData.email}`);
    return null;
  }
}