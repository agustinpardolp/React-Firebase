import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import FileForm from "./FileForm";
import { saveNewImage } from "../../store/actions/galleryActions";
const validationSchema = yup.object().shape({
  filename: yup.string().trim().required(" "),
});

const ModalForm = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  validateOnBlur: true,
  mapPropsToValues: ({ filename }) => ({
    filename: filename || "",
  }),
  handleSubmit: (values, { props, setErrors }) => {
    debugger;
    props.saveNewImage(values);
  },
})(FileForm);

const mapDispatchToProps = {
  saveNewImage,
};

export default connect(null, mapDispatchToProps)(withRouter(ModalForm));
