import axios from "axios";

const postFonk = async ({ userID }) => {
  return await axios // await is not necessary here
    .post(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default postFonk;
