import Account from "@/models/account";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const accounts = await Account.find({});

    return new Response(JSON.stringify(accounts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all accounts", { status: 500 });
  }
};
