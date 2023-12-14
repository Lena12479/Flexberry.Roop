import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  датаПроводки: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  способДоставки: DS.attr('string'),
  фИОЗаказчика: DS.attr('string')
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-roop-отпуск-материала.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроводки: {
    descriptionKey: 'models.i-i-s-roop-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-roop-отпуск-материала.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способДоставки: {
    descriptionKey: 'models.i-i-s-roop-отпуск-материала.validations.способДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗаказчика: {
    descriptionKey: 'models.i-i-s-roop-отпуск-материала.validations.фИОЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-roop-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 2 }),
    адресЗаказа: attr('Адрес заказа', { index: 3 }),
    способДоставки: attr('Способ доставки', { index: 4 })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-roop-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 2 }),
    адресЗаказа: attr('Адрес заказа', { index: 3 }),
    способДоставки: attr('Способ доставки', { index: 4 })
  });
};
