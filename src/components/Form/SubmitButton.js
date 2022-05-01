import { useFormikContext } from "formik";
import React from "react";

export default function SubmitButton() {
  const formik = useFormikContext();
  return (
    <button
      type="submit"
      className={"btn" + (formik.isSubmitting ? " submitting" : "")}
      disabled={formik.isSubmitting}
    >
      {formik.isSubmitting ? "Submitting" : "Submit"}
      <span />
    </button>
  );
}
