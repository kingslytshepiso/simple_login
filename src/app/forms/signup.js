import { useTransition } from "react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
  emailAddress: z
    .string({
      required_error: "Email address is required",
    })
    .email({
      message: "Enter valid email address",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
});
export default function Signup() {
  const [isPending, startTheTransition] = useTransition();
  const [isValid, setValid] = useState(true);
  const [firstNameVal, setFirstNameVal] = useState(null);
  const [lastNameVal, setLastNameVal] = useState(null);
  const [emailAddressVal, setEmailAddressVal] = useState(null);
  const [passwordVal, setPasswordVal] = useState(null);
  const [re_passwordVal, setRePasswordVal] = useState(null);
  async function handleSubmit(formData) {
    const firstNameValue = formData.firstName.value;
    const lastNameValue = formData.lastName.value;
    const emailAddressValue = formData.emailAddress.value;
    const passwordValue = formData.password.value;
  }
  function updateSchema(result, element) {
    console.log(result);
    console.log(element);
    if (element.name == "firstName") setFirstNameVal(result);
    else if (element.name == "lastName") setLastNameVal(result);
    else if (element.name == "emailAddress") setEmailAddressVal(result);
    else if (element.name == "password") setPasswordVal(result);
    else if (element.name == "re_password") setRePasswordVal(result);
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        startTheTransition(() => {
          handleSubmit(event.currentTarget);
        });
      }}
    >
      <div className="text-danger text-center bg-light"></div>
      <div className="m-2">
        <input
          onBlur={(event) => {
            var regFormat = /[a-zA-Z]/g;
            if (
              !(event.target.value.length > 0) &&
              !regFormat.test(event.target.value)
            ) {
              updateSchema(
                {
                  success: false,
                  error: "This field must not be empty",
                },
                event.target
              );
            } else {
              const inputValidStatus = schema.shape.firstName.safeParse(
                event.target.value
              );
              updateSchema(inputValidStatus, event.target);
            }
          }}
          placeholder="First Name"
          name="firstName"
          type="text"
          className={`form-control text-center ${
            firstNameVal == null
              ? ""
              : firstNameVal.success
              ? "input-valid"
              : "input-invalid"
          }`}
          required
        />
        <div className="element-validator text-danger text-center">
          {firstNameVal == null
            ? ""
            : firstNameVal.success
            ? ""
            : firstNameVal.error}
        </div>
      </div>
      <div className="m-2">
        <input
          onBlur={(event) => {
            var regFormat = /[a-zA-Z]/g;
            if (
              !(event.target.value.length > 0) &&
              !regFormat.test(event.target.value)
            ) {
              updateSchema(
                {
                  success: false,
                  error: "This field must not be empty",
                },
                event.target
              );
            } else {
              const inputValidStatus = schema.shape.lastName.safeParse(
                event.target.value
              );
              updateSchema(inputValidStatus, event.target);
            }
          }}
          placeholder="Last Name"
          name="lastName"
          type="text"
          className={`form-control text-center ${
            lastNameVal == null
              ? ""
              : lastNameVal.success
              ? "input-valid"
              : "input-invalid"
          }`}
          required
        />
        <div className="element-validator text-danger text-center">
          {lastNameVal == null
            ? ""
            : lastNameVal.success
            ? ""
            : lastNameVal.error}
        </div>
      </div>
      <div className="m-2">
        <input
          onBlur={(event) => {
            var regFormat = /[a-zA-Z]/g;
            if (
              !(event.target.value.length > 0) &&
              !regFormat.test(event.target.value)
            ) {
              updateSchema(
                {
                  success: false,
                  error: "This field must not be empty",
                },
                event.target
              );
            } else {
              const inputValidStatus = schema.shape.emailAddress.safeParse(
                event.target.value
              );
              updateSchema(inputValidStatus, event.target);
            }
          }}
          placeholder="Email Address"
          name="emailAddress"
          type="text"
          className={`form-control text-center ${
            emailAddressVal == null
              ? ""
              : emailAddressVal.success
              ? "input-valid"
              : "input-invalid"
          }`}
          required
        />
        <div className="element-validator text-danger text-center">
          {emailAddressVal == null
            ? ""
            : emailAddressVal.success
            ? ""
            : emailAddressVal.error}
        </div>
      </div>
      <div className="m-2">
        <input
          onBlur={(event) => {
            var regFormat = /[a-zA-Z]/g;
            if (
              !(event.target.value.length > 0) &&
              !regFormat.test(event.target.value)
            ) {
              updateSchema(
                {
                  success: false,
                  error: "This field must not be empty",
                },
                event.target
              );
            } else {
              const inputValidStatus = schema.shape.password.safeParse(
                event.target.value
              );
              updateSchema(inputValidStatus, event.target);
            }
          }}
          placeholder="Password"
          name="password"
          type="password"
          className={`form-control text-center ${
            passwordVal == null
              ? ""
              : passwordVal.success
              ? "input-valid"
              : "input-invalid"
          }`}
          required
        />
        <div className="element-validator text-danger text-center">
          {passwordVal == null
            ? ""
            : passwordVal.success
            ? ""
            : passwordVal.error}
        </div>
      </div>
      <div className="m-2">
        <input
          onBlur={(event) => {
            var regFormat = /[a-zA-Z]/g;
            if (
              !(event.target.value.length > 0) &&
              regFormat.test(event.target.value)
            ) {
              updateSchema(
                {
                  success: false,
                  error: "This field must not be empty",
                },
                event.target
              );
            } else {
              const inputValidStatus = () => {
                const passwordValue = document.querySelector(
                  "input[name='password']"
                ).value;
                if (passwordValue === event.target.value) {
                  return { success: true, data: "" };
                } else {
                  return { success: false, data: "Password dont match" };
                }
              };
              updateSchema(inputValidStatus, event.target);
            }
          }}
          placeholder="Re enter Password"
          name="re_password"
          type="password"
          className={`form-control text-center ${
            re_passwordVal == null
              ? ""
              : re_passwordVal.success
              ? "input-valid"
              : "input-invalid"
          }`}
          required
        />
        <div className="element-validator text-danger text-center">
          {re_passwordVal == null
            ? ""
            : re_passwordVal.success
            ? ""
            : re_passwordVal.error}
        </div>
      </div>
      <div className="m-2 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={isPending}
        >
          {isPending ? <SmallLoadingExternal /> : "Login"}
        </button>
      </div>
    </form>
  );
}
