import fetch from "node-fetch";

async function getWithFetch() {
  const res = await fetch(
    "https://622108eeafd560ea69a58cbf.mockapi.io/Users/1"
  );
  const finalRes = await res.json();
  console.log(finalRes);
}

async function postWithFetch() {
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const finalRes = await res.json();
  console.log(finalRes);
}

async function putWithFetch() {}

async function deleteWithFetch() {}

// getWithFetch();
postWithFetch();
