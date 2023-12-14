import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('string'),
  должность: DS.attr('string'),
  колво: DS.attr('number'),
  материал: DS.attr('string'),
  номерАкта: DS.attr('number'),
  номерПозиции: DS.attr('number'),
  номерТН: DS.attr('number'),
  поставщик: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПозиции: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.номерПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТН: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.номерТН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-roop-акт-приемки.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-roop-акт-приемки', {
    датаПриемки: attr('Дата приемки', { index: 0 }),
    номерАкта: attr('Номер акта', { index: 1 }),
    фИО: attr('ФИО', { index: 2 }),
    должность: attr('Должность', { index: 3 }),
    номерТН: attr('Номер ТН', { index: 4 }),
    поставщик: attr('Поставщик', { index: 5 }),
    номерПозиции: attr('Номер позиции', { index: 6 }),
    материал: attr('Материал', { index: 7 }),
    колво: attr('Колво', { index: 8 })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-roop-акт-приемки', {
    датаПриемки: attr('Дата приемки', { index: 0 }),
    номерАкта: attr('Номер акта', { index: 1 }),
    фИО: attr('ФИО', { index: 2 }),
    должность: attr('Должность', { index: 3 }),
    номерТН: attr('Номер ТН', { index: 4 }),
    поставщик: attr('Поставщик', { index: 5 }),
    номерПозиции: attr('Номер позиции', { index: 6 }),
    материал: attr('Материал', { index: 7 }),
    колво: attr('Колво', { index: 8 })
  });
};
