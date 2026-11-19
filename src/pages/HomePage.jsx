import { useStore } from "../context/StoreContext";

export default function HomePage() {
  const { store, error } = useStore();

  if (error) return <p className="error">{error}</p>;
  if (!store) return <p>Loading...</p>;

  return (
    <section className="home-hero">
      <h1>{store.name}</h1>
      <p>{store.description}</p>
      <p>Call us: {store.phone_number}</p>
    </section>
  );
}
