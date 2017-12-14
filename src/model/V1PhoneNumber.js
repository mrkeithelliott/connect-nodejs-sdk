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




/**
 * The V1PhoneNumber model module.
 * @module model/V1PhoneNumber
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1PhoneNumber</code>.
 * Represents a phone number.
 * @alias module:model/V1PhoneNumber
 * @class
 * @param callingCode {String} The phone number's international calling code. For US phone numbers, this value is +1.
 * @param _number {String} The phone number.
 */
var exports = function(callingCode, _number) {
  var _this = this;

  _this['calling_code'] = callingCode;
  _this['number'] = _number;
};

/**
 * Constructs a <code>V1PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PhoneNumber} obj Optional instance to populate.
 * @return {module:model/V1PhoneNumber} The populated <code>V1PhoneNumber</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('calling_code')) {
      obj['calling_code'] = ApiClient.convertToType(data['calling_code'], 'String');
    }
      if (data.hasOwnProperty('number')) {
      obj['number'] = ApiClient.convertToType(data['number'], 'String');
    }
    }
  return obj;
}

/**
 * The phone number's international calling code. For US phone numbers, this value is +1.
 * @member {String} calling_code
 */
exports.prototype['calling_code'] = undefined;
/**
 * The phone number.
 * @member {String} number
 */
exports.prototype['number'] = undefined;



module.exports = exports;


