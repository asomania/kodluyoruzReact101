import axios from "axios";

const AsyncFonk = async (props) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${props.userID}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
AsyncFonk.default = {
  userID: 1,
};
export default AsyncFonk;
