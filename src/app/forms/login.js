import { useTransition, useState } from "react";
import { SubmitLogin } from "../data";
import { useRouter } from "next/navigation";
import { Loading, SmallLoadingExternal } from "../loading";
import Link from "next/link";

export default function LoginForm() {
  const [isPending, startTheTransition] = useTransition();
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState({ valid: true, message: "" });
  const router = useRouter();
  async function handleSubmit(event) {
    const formData = event.currentTarget;
    setLoading(true);
    setValid(true);
    try {
      var loginSuccess = await SubmitLogin({
        username: formData.username.value,
        password: formData.password.value,
      });
      if (loginSuccess) {
        console.log("login successful");
        setValid({ valid: true, message: "" });
        router.push("/success/loginSuccess");
      } else {
        console.log("login failed");
        setValid({ valid: false, message: "invalid credentials" });
      }
    } catch (ex) {
      setValid({ valid: false, message: "An error occurred" });
      console.error(ex.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        startTheTransition(() => {
          handleSubmit(event);
        });
      }}
    >
      <div className="text-danger text-center bg-light">
        {isValid.valid ? "" : <div className="p-1">{isValid.message}</div>}
      </div>
      <div className="m-2">
        <input
          placeholder="username"
          name="username"
          type="text"
          className="form-control text-center"
          required
        />
      </div>
      <div className="m-2">
        <input
          placeholder="password"
          name="password"
          type="password"
          className="form-control text-center"
          required
        />
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
