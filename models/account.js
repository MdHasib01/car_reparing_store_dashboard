import { Schema, model, models } from "mongoose";

const AccountSchema = new Schema({
  account_no: {
    type: String,
    required: [true, "Account no is required."],
  },
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  blance: {
    type: String,
    required: [true, "Blance is required."],
  },
});

const Account = models.Account || model("Account", AccountSchema);

export default Account;
