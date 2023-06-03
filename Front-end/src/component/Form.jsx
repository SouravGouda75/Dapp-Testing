import { useLoginForm } from "./useLoginForm.js";

const Form = () => {
  const { handleSubmit, register } = useLoginForm();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <form className="qfc-container" onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;