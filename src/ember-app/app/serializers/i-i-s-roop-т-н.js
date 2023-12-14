import { Serializer as ТНSerializer } from
  '../mixins/regenerated/serializers/i-i-s-roop-т-н';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТНSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
