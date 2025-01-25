import { Input, Select } from "@chakra-ui/react";

function CustomInput(props) {
  let inputElement;

  if (props.inputType !== "select") {
    inputElement = (
      <Input
        data-testid={props.dataTestId}
        type={props.inputType}
        id={props.inputId}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue || ""}
        required={props.isRequired}
        className={`${props.inputClass}`}
      />
    );
  } else {
    inputElement = (
      <Select
        data-testid={props.dataTestId}
        id={props.inputId}
        className={props.inputClass}
        placeholder={props.defaultValue}
        onChange={props.onChangeFunction}
        required={props.defaultValue === "" ? props.isRequired : false}
        w={"100%"}
      >
        {props.options
          .filter((option) => option !== props.defaultValue)
          .map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </Select>
      // <select
      //   data-testid={props.dataTestId}
      //   id={props.inputId}
      //   className={`border rounded block p-2 w-full h-11 ${props.inputClass}`}
      //   defaultValue={props.studentData || ""}
      //   onChange={props.onChangeFunction}
      //   required={props.isRequired}
      // >
      //   {props.options.map((option, index) => {
      //     return (
      //       <option
      //         key={index}
      //         value={option !== "Select an option" ? option : ""}
      //         disabled={option === "Select an option"}
      //       >
      //         {option}
      //       </option>
      //     );
      //   })}
      // </select>
    );
  }

  return (
    <div id={props.wrapperId} className={props.wrapperClass}>
      {props.label && (
        <label htmlFor={props.inputId} className="block mb-2">
          {props.label}
          <span className="text-red-700"> * </span>
        </label>
      )}
      {inputElement}
    </div>
  );
}

export default CustomInput;
