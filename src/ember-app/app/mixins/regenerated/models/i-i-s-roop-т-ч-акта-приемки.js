import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяСклада: DS.attr('string'),
  колво: DS.attr('number'),
  материал: DS.attr('string'),
  номерПозиции: DS.attr('number')
});

export let ValidationRules = {
  имяСклада: {
    descriptionKey: 'models.i-i-s-roop-т-ч-акта-приемки.validations.имяСклада.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-roop-т-ч-акта-приемки.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-roop-т-ч-акта-приемки.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПозиции: {
    descriptionKey: 'models.i-i-s-roop-т-ч-акта-приемки.validations.номерПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧАктаПриемкиE', 'i-i-s-roop-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    колво: attr('Колво', { index: 2 }),
    имяСклада: attr('Имя склада', { index: 3 })
  });

  modelClass.defineProjection('ТЧАктаПриемкиL', 'i-i-s-roop-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    колво: attr('Колво', { index: 2 }),
    имяСклада: attr('Имя склада', { index: 3 })
  });
};
