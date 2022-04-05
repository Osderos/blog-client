const getAuthors = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/authors");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};


export {getAuthors}