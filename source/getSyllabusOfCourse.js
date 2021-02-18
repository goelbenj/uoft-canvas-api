import getOptions from './internal/getOptions'
import fetch from './internal/fetch'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves syllabus of course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a custom object: { courseCode, courseID, syllabus }
 */

export default function getSyllabusOfCourse (courseId) {
  return fetch(canvasDomain + `/courses/${courseId}?` + buildOptions([getOptions.courses.include.syllabus_body, getOptions.courses.include.term]))
    .then(course => ({
      courseCode: course.course_code,
      courseId,
      syllabus: course.syllabus_body,
      name: course.name,
      term: course.term
    }))
}
