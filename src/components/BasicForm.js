import useFormInput from "../hooks/use-forminput";
const BasicForm = (props) => {
  const {
    value: firstname,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    reset: nameReset,
  } = useFormInput((value) => value.trim() !== "");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(firstname);
    nameReset();
  };
  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }
  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={firstname}
          />
          {nameInputHasError && (
            <p className="error-text">Enter a valid name</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
