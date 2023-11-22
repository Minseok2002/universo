const getRandomElement = (Element) => {
// la logica necesaria para devolver un elemento aleatorio de ese arreglo
// suponiendo elemento con 10 elementos

  const indexRandom = Math.floor(Math.random() * Element.length);
  return Element[indexRandom];
}

  export { getRandomElement };