const User = require("../Models/userModel");

module.exports = {

    async store(request, response) {

      const { email } = request.body;
      const UserCheck = await User.findOne({ email });

      try {

          if(UserCheck) {

            return response.staatus(403).send({ error: "User Already Registered" });
          }

          const users = await User.create(request.body);
          return response.json({ users });

      } catch (err) {

        return response.status(500).send({ error: "Registration Failed" });
      };
        
    },

    async index(requeest, response) {

      const users = await User.find();

      return response.json({ users });
    },
};