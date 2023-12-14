import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  колво: DS.attr('number'),
  материал: DS.attr('string'),
  номерЗаказа: DS.attr('number'),
  способДоставки: DS.attr('string'),
  фИОЗаказчика: DS.attr('string')
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способДоставки: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.способДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗаказчика: {
    descriptionKey: 'models.i-i-s-roop-заказ.validations.фИОЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-roop-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    материал: attr('Материал', { index: 4 }),
    колво: attr('Колво', { index: 5 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-roop-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    материал: attr('Материал', { index: 4 }),
    колво: attr('Колво', { index: 5 })
  });
};
