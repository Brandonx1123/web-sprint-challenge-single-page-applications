import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("pizza name is required")
    .min(2, "username must be 2 chars long"),
    //dropbox under
  slice: yup
    .string()
    .oneOf(["triangle","square","pie",], "type of pizza is required"),
  // Checkboxs under
 pepperoni: yup.boolean(),
  meatball: yup.boolean(),
  onion: yup.boolean(),
  chicken:yup.boolean(),
  //special request not required
  
});

