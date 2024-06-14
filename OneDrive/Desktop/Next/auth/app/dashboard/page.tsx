import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function DashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return(
        <div className="flex justify-center items-center min-h-screen text-center">
            <h1 className="text-4xl font-bold align-top"> Dashboard </h1>
            <div className="mt-5 ">
                <h3 className="">Hello {user?.given_name} </h3>
                <h3 className="">email id  {user?.email} </h3>
            </div>
            <LogoutLink className="bg-blue-700 p-3 rounded-lg m-4">Log out</LogoutLink>
        </div>
    );
}