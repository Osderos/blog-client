const getAuthors = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/authors");
    const data = await response.json();
    console.log("Fetched Authors", data);
  } catch (err) {
    console.log(err);
  }
};

const getPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getAuthors, getPosts };
