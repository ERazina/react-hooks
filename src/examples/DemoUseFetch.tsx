import useFetch from "../useFetch";

const DemoUseFetch = () => {
  const url = "https://www.yandex.ru/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Elina" }),
  };

  const { data, error, loading } = useFetch(url, options);

  return (
    <>
      {data && <div>{data}</div> }
      {error && <div>{error?.message}</div> }
      {loading && <div>loading</div>}
    </>
  );
};

export default DemoUseFetch;
