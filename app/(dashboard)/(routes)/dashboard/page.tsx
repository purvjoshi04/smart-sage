import { UserButton } from "@clerk/nextjs";


const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard page</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default DashboardPage;