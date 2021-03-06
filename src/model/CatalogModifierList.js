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
var CatalogObject = require('./CatalogObject');




/**
 * The CatalogModifierList model module.
 * @module model/CatalogModifierList
 */

/**
 * Constructs a new <code>CatalogModifierList</code>.
 * A list of modifiers applicable to items at the time of sale.  For example, a \&quot;Condiments\&quot; modifier list applicable to a \&quot;Hot Dog\&quot; item may contain \&quot;Ketchup\&quot;, \&quot;Mustard\&quot;, and \&quot;Relish\&quot; modifiers. Use the &#x60;selection_type&#x60; field to specify whether or not multiple selections from the modifier list are allowed.
 * @alias module:model/CatalogModifierList
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>CatalogModifierList</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogModifierList} obj Optional instance to populate.
 * @return {module:model/CatalogModifierList} The populated <code>CatalogModifierList</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('ordinal')) {
      obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
    }
      if (data.hasOwnProperty('selection_type')) {
      obj['selection_type'] = ApiClient.convertToType(data['selection_type'], 'String');
    }
      if (data.hasOwnProperty('modifiers')) {
      obj['modifiers'] = ApiClient.convertToType(data['modifiers'], [CatalogObject]);
    }
    }
  return obj;
}

/**
 * The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Determines where this modifier list appears in a list of `CatalogModifierList` values.
 * @member {Number} ordinal
 */
exports.prototype['ordinal'] = undefined;
/**
 * Indicates whether multiple options from the modifier list can be applied to a single `CatalogItem`. See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values
 * @member {String} selection_type
 */
exports.prototype['selection_type'] = undefined;
/**
 * The options included in the `CatalogModifierList`. You must include at least one `CatalogModifier`. Each CatalogObject must have type `MODIFIER` and contain `CatalogModifier` data.
 * @member {Array.<module:model/CatalogObject>} modifiers
 */
exports.prototype['modifiers'] = undefined;



module.exports = exports;



