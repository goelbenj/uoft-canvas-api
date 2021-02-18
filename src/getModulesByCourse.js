var fetch = require('./internal/fetch');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Get a paginated list of modules in a course by courseId
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a list of Module objects: https://canvas.instructure.com/doc/api/modules.html#method.context_modules_api.index
 */

function getModulesByCourse(courseId) {
  return fetch(canvasDomain + `/courses/${courseId}/modules`);
}module.exports = getModulesByCourse;
;