"use strict";

const Controller = require("egg").Controller;

class ProjectController extends Controller {
  getTemplate() {
    const { ctx } = this;
    ctx.body = "get template";
  }
}

module.exports = ProjectController;
