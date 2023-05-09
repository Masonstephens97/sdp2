import React from "react";

const TextInput = ({ onChange, value }) => {
  return (
    <input
      class="govuk-input"
      onChange={onChange}
      value={value}
      id="event-name"
      name="event-name"
      type="text"
    />
  );
};

export default TextInput;
