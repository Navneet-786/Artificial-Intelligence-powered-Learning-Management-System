import { userTable } from "../../configs/schema";
import { db } from "../../configs/db";
import { inngest } from "./client";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

//create  user
export const createUser = inngest.createFunction(
  { id: "user.create" },
  { event: "user.create" },
  async ({ event, step }) => {
    //get the user from event
    const { user } = event?.data;

    //inngest step
    const result = await step.run(
      "Check User and create new if Not in db",
      async () => {
        const res = await db
          .select()
          .from(userTable)
          .where(eq(userTable.email, user?.primaryEmailAddress?.emailAddress));

        //if not , save to db
        if (res?.length == 0) {
          const userResponse = await db
            .insert(userTable)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: userTable.id });
          return userResponse;
        }
        return res;
      },
    );
    return { success: true, data: result };
  },
  //send welcome email from Notification

  //send welcome email after 3 days
);
