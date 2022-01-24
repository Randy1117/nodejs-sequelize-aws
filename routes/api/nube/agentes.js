const router = require("express").Router();
const AgentesController = require ("../../../localCRqsts/agent/agentes")


router.route("/")
  .get(AgentesController.AllAgentesController);

module.exports = router;
 