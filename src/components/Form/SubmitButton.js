import { useFormikContext } from "formik";
import React from "react";

export default function SubmitButton() {
  const { isSubmitting } = useFormikContext();
  return (
    <button
      type="submit"
      className={"btn" + (isSubmitting ? " submitting" : "")}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting" : "Submit"}
      <span />
    </button>
  );
}
