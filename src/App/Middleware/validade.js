const schema = require("../../Utils/schemaJoi");

const SignUp = async (request, response, next) => {

    const { nome, email, password } = request.body;

    try {
      const { error } = await schema.signUp.validateAsync({
        nome, email, password,
      });

      if(!error) { return next(); }

        return response.status(400).json({ error }).send();

    } catch (error) {

      return response.status(400).json({ error }).send();
    }
};

const Update = async (request, response, next) => {

  const { nome, email, senha } = request.body;
  
  try {
    const { error } = await schema.Update.validateAsync({
      nome, email, password,
    })

    if(!error) { return next(); }

      return response.status(400).json({ error }).send();

  } catch(error) {

    return response.status(400).json({ error }).send();
  }

}

module.exports = {
  SignUp,
  Update,
};