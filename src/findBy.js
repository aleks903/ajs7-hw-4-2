export default function findBy(prop, value) {
  return function (item) {
    return (prop && item[prop] === value) ? item : false;
  };
}
