import Link from "next/link";
import ProductCard from "./components/Product card/ProductCard";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <main>
      <h1>Sabra Princess Ast</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <UsersPage />
    </main>
  );
}
