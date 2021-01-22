import React from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input
          name="name"
          placeholder="John Snow"
          ref={register({
            required: "Name Required!"
          })}
          class="name-input" />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <label>Email</label>
        <input
          name="email"
          placeholder="john_snow@gmail.com"
          ref={register({
            required: "Email required!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address."
            }
          })}
          class="email-input" />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <label class="message">Message</label>
        <textarea class="message-input"></textarea>
        <input class="submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}