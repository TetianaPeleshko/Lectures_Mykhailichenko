export default function FetchComponent() {
  function fetchDataWithPromoces() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchWhithAsyncAwait() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/'
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={fetchDataWithPromoces}>Fetch data with promices</button>
      <button onClick={fetchWhithAsyncAwait}>Fetch data with Async</button>
    </div>
  );
}
