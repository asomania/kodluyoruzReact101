import axios from "axios";

const AsyncFonk = async ({ userID }) => {
  return await new Promise((resolve, reject) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default AsyncFonk;
