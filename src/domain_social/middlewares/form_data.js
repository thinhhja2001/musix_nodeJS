import multer from "multer";
export default class FormDataMiddleWare {
  static formDataFile() {
    return multer({ dest: "files/" });
  }
}
