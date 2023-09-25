import Account from "@/models/account";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { account_no, name, blance } = await request.json();

  try {
    await connectToDB();
    const newAccount = new Account({ account_no, name, blance });

    await newAccount.save();
    return new Response(JSON.stringify(newAccount), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new account", { status: 500 });
  }
};
