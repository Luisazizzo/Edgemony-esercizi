const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const GET = async (item) => {
  const res = await fetch(item);
  return await res.json();
};

export { cE, qS, GET };
