import { EmptyState } from "../components/common";

export default function NotFound() {
  return (
    <main className="container-page py-16">
      <EmptyState title="Page not found" message="The page you are looking for does not exist." action="Back to Home" to="/" />
    </main>
  );
}
