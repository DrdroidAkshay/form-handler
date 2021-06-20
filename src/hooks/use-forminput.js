import { useState } from "react";
const useFormInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const onBlurHandler = () => {
    setIsTouched(true);
  };
  const valueIsValid = validate(enteredValue);
  const hasError = isTouched && !valueIsValid;
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    onChangeHandler,
    onBlurHandler,
    valueIsValid,
    hasError,
    reset,
  };
};
export default useFormInput;
