export default function findBy(prop, value) {
  return (item) => {
    if (prop && item[prop] === value) {
      return true;
    }
    return false;
  };
}
