import { createForm } from "@createform/react";

export const useLoginForm = createForm({
  initialValues: {
    email: "",
    password: "",
  },
});