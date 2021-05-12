import React, { useState } from "react";
import ReactDOM from "react-dom";
import CpfCnpj from "./Logic";
import styles from '../../../styles/Components/Contact.module.css';

const isEmpty = (value) => {
  return value === "";
};


const BasicCpfCnpj = () => {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");

  return (

      <CpfCnpj
      placeholder="99 999 999 9999 99"
      className={styles.input_form}
        value={cpfCnpj}
        onChange={(ev, type) => {
          setCpfCnpj(ev.target.value);
          setMask(type === "CPF");
        }}
      />

  );
};

const Mask = () => {
  return (
    <>
      <BasicCpfCnpj  />
    </>
  );
};

export default Mask;