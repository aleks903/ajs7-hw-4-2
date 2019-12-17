export default function findBy(prop, value) {
  return (item) => {
    return (prop && item[prop] === value) ? item : false;
  };
}
