import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-roop-сотрудники', 'Unit | Serializer | i-i-s-roop-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-roop-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-roop-акт-приемки',
    'model:i-i-s-roop-заказ',
    'model:i-i-s-roop-отпуск-материала',
    'model:i-i-s-roop-склад',
    'model:i-i-s-roop-сотрудники',
    'model:i-i-s-roop-т-н',
    'model:i-i-s-roop-т-ч-акта-приемки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
