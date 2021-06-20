import useFormInput from "../hooks/use-forminput";
const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: firstname,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    reset: nameReset,
  } = useFormInput(isNotEmpty);
  const {
    value: lastname,
    onChangeHandler: lastnameChangeHandler,
    onBlurHandler: lastnameBlurHandler,
    valueIsValid: lastnameIsValid,
    hasError: lastnameInputHasError,
    reset: lastnameReset,
  } = useFormInput(isNotEmpty);

  const {
    value: email,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    hasError: emailInputHasError,
    reset: emailReset,
  } = useFormInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(firstname, lastname, email);
    nameReset();
    lastnameReset();
    emailReset();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClass = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
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
        <div className={lastnameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={lastname}
          />
          {lastnameInputHasError && (
            <p className="error-text">Enter a valid name</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
