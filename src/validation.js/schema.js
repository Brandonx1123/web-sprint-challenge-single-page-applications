import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("pizza name is required")
    .min(2, "username must be 2 chars long"),
    //dropbox under
  psize: yup
    .string()
    .oneOf(["12 inches","16 inches","20 inches",], "Size of pizza is required"),
  // Checkboxs under
 pepperoni: yup.boolean(),
  meatball: yup.boolean(),
  onion: yup.boolean(),
  chicken:yup.boolean(),
  //special request not required
  
  specialReq: yup.string(),
});

