import axios from "axios";

axios.get("https://httpbin.org/get")
  .then((response) => {
    console.log("yay-yay-yay");
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log("----error");
    console.log(error);
  });
