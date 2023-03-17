import axios from "axios";

const postFonk = async (props) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${props.userID}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default postFonk;
