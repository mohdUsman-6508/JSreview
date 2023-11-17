// "strict mode";

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/mohdUsman-6508");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
