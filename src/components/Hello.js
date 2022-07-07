import { useState } from "react";
import styles from "./Hello.module.css";
import UserName from "./UserName";

export default function Hello({ age }) {
  const [name, setName] = useState("Gun"); //state -> props
  const msg = age > 19 ? "성인입니다." : "미성년자";

  return (
    <>
      <h1 className={styles.Hello}>State</h1>
      <h2>
        {name}({age}):{msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Gun" ? "Jane" : "Gun");
        }}
      >
        Change
      </button>
    </>
  );
}
