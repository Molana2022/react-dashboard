import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Is loading ... </p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  const firstFour = data.slice(0, 4);

  return (
    <div className="dashboard-grid">
      {firstFour.map((item) => (
        <Card key={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  );
};

export default Dashboard;
