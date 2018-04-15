export default state => {
  const { email, password } = state.domains.form
  return {
    email: {
      name: 'email',
      type: 'text',
      hideLabel: true,
      placeholder: 'Email',
      value: email,
      rules: {
        required: 'Please fill email',
        email: 'Wrong email format'
      }
    },
    password: {
      name: 'password',
      type: 'password',
      hideLabel: true,
      placeholder: 'Password',
      value: password,
      rules: {
        required: 'Please fill password',
        minLength: {
          minLength: 8,
          message: 'Password must have at least 8 characters'
        }
      }
    }
  }
}
