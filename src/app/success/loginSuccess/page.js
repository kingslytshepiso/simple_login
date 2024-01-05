import { sleep } from "@/app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default async function LoginSuccess() {
  await sleep(8000);
  return (
    <>
      <div className="success-block">
        <div className="text-light">
          <h5>
            <FontAwesomeIcon icon={faCircleCheck} />
            Successful login
          </h5>
        </div>
      </div>
    </>
  );
}
