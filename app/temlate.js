import Dashboard from "./Dashboard/page";

export default function Template({ children }) {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
