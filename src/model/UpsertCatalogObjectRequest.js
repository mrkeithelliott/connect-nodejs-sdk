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
 * The UpsertCatalogObjectRequest model module.
 * @module model/UpsertCatalogObjectRequest
 * @version 2.5.2
 */

/**
 * Constructs a new <code>UpsertCatalogObjectRequest</code>.
 * 
 * @alias module:model/UpsertCatalogObjectRequest
 * @class
 * @param idempotencyKey {String} A value you specify that uniquely identifies this request among all your requests. A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).  If you're unsure whether a particular request was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.  See [Idempotency keys](#idempotencykeys) for more information.
 * @param _object {module:model/CatalogObject} A [CatalogObject](#type-catalogobject) to be created or updated. The object's `is_deleted` field must not be set to `true`. When creating a new object, the object's ID must either start with a `#` character or be left blank. In either case it will be replaced with a server-generated ID.
 */
var exports = function(idempotencyKey, _object) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['object'] = _object;
};

/**
 * Constructs a <code>UpsertCatalogObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpsertCatalogObjectRequest} obj Optional instance to populate.
 * @return {module:model/UpsertCatalogObjectRequest} The populated <code>UpsertCatalogObjectRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('object')) {
      obj['object'] = CatalogObject.constructFromObject(data['object']);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this request among all your requests. A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).  If you're unsure whether a particular request was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.  See [Idempotency keys](#idempotencykeys) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * A [CatalogObject](#type-catalogobject) to be created or updated. The object's `is_deleted` field must not be set to `true`. When creating a new object, the object's ID must either start with a `#` character or be left blank. In either case it will be replaced with a server-generated ID.
 * @member {module:model/CatalogObject} object
 */
exports.prototype['object'] = undefined;



module.exports = exports;


