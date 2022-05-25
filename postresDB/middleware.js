const queries = require("./queries")


async function getallusers(req, res) {
    try {
      const data = await queries.getAll();
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400);
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
async function getUserbyID(req, res) {
    const id = req.params.id;
    try {
      const user = await queries.getUserbyId(id);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send('Id not Found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
async function getASU(req, res) {
    const loginSubstring = req.query.login;
    const limit = req.query.limit;
    try {
      const suggetion_list = await queries.getAutoSuggestionList(
        loginSubstring,
        limit
      );
      if (suggetion_list.length === 0) {
        res.send("No User Found");
      } else {
        res.send(suggetion_list);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
async function create(req, res) {
    const newUser = req.body;
    try {
      const data = await queries.create(newUser);
      if (data) {
        res.status(201).send(data);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
async function update(req, res) {
    const id = req.params.id;
    const updatedUser = req.body;
    try {
      const user = await queries.update(id, updatedUser);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(400).send("Some Error occured");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
async function deleteid(req,res){
  const id = req.params.id;
  try {
    const status =await queries.softDelete(id)
    if (status[0] === 0) {
      res.status(404);
    } else {
      res.send(' Softdelete Completed');;
    }
  } catch (error) {
    console.log("inerror")
    res.status(400).send(error.message);
  }
  
}




module.exports ={getallusers,create,getUserbyID,deleteid,getASU,update}

