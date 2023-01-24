const GET = async () => {
  const res = await fetch("https://dummyjson.com/users");
  return await res.json();
};

export { GET };
