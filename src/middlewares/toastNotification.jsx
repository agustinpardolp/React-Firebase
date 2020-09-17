import { successMessages } from "./messages";
import { showNotification } from "../store/actions/notificationActions/index";

const toastMiddleware = (state) => (next) => (action) => {
  const { type } = action;
  if (type.match("SUCCESS")) {
    if (successMessages[type]) {
      state.dispatch(showNotification(successMessages[type], "success"));
    }
  }

  return next(action);
};

export default toastMiddleware;
