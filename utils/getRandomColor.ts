const colors = ["#e7e718", "#e78018", "#33e52a", "#2a90e5", "white"];
const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export default getRandomColor;
