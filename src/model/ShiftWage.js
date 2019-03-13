/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Money = require('./Money');




/**
 * The ShiftWage model module.
 * @module model/ShiftWage
 */

/**
 * Constructs a new <code>ShiftWage</code>.
 * The hourly wage rate used to compensate an employee for this shift.
 * @alias module:model/ShiftWage
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ShiftWage</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ShiftWage} obj Optional instance to populate.
 * @return {module:model/ShiftWage} The populated <code>ShiftWage</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
      obj['title'] = ApiClient.convertToType(data['title'], 'String');
    }
      if (data.hasOwnProperty('hourly_rate')) {
      obj['hourly_rate'] = Money.constructFromObject(data['hourly_rate']);
    }
    }
  return obj;
}

/**
 * The name of the job performed during this shift. Square labor-reporting UIs may group shifts together by title.
 * @member {String} title
 */
exports.prototype['title'] = undefined;
/**
 * Can be a custom-set hourly wage or the calculated effective hourly wage based on annual wage and hours worked per week.
 * @member {module:model/Money} hourly_rate
 */
exports.prototype['hourly_rate'] = undefined;



module.exports = exports;


