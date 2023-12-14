import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('number'),
  материал: DS.attr('string'),
  номерТН: DS.attr('number'),
  номерТС: DS.attr('string'),
  поставщик: DS.attr('string')
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-roop-т-н.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-roop-т-н.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТН: {
    descriptionKey: 'models.i-i-s-roop-т-н.validations.номерТН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТС: {
    descriptionKey: 'models.i-i-s-roop-т-н.validations.номерТС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-roop-т-н.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТНE', 'i-i-s-roop-т-н', {
    номерТН: attr('Номер ТН', { index: 0 }),
    поставщик: attr('Поставщик', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    материал: attr('Материал', { index: 3 }),
    колво: attr('Колво', { index: 4 })
  });

  modelClass.defineProjection('ТНL', 'i-i-s-roop-т-н', {
    номерТН: attr('Номер ТН', { index: 0 }),
    поставщик: attr('Поставщик', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    материал: attr('Материал', { index: 3 }),
    колво: attr('Колво', { index: 4 })
  });
};
