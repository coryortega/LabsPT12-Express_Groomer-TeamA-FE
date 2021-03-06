import React from 'react';
import { useForm } from 'react-hook-form';

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label htmlFor={label}>{label}</label>
    <input
      id={label}
      placeholder={label}
      name={label}
      ref={register({ required })}
    />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label }, ref) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Input label="User Email" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  );
}
