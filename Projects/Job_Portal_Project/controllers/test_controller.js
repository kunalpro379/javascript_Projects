// const testPostController = (req, res) => {
//     const { name } = req.body;
//     res.status(200).send(`Hello ${name}`);
// };

// export default testPostController;
export const testPostController = (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Your Name Is ${name}`);
  };