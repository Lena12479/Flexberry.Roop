import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-roop-склад', 'Unit | Model | i-i-s-roop-склад', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
