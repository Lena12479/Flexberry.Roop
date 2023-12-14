import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISRoopАктПриемкиLForm from './forms/i-i-s-roop-акт-приемки-l';
import IISRoopЗаказLForm from './forms/i-i-s-roop-заказ-l';
import IISRoopОтпускМатериалаLForm from './forms/i-i-s-roop-отпуск-материала-l';
import IISRoopСкладLForm from './forms/i-i-s-roop-склад-l';
import IISRoopСотрудникиLForm from './forms/i-i-s-roop-сотрудники-l';
import IISRoopТНLForm from './forms/i-i-s-roop-т-н-l';
import IISRoopТЧАктаПриемкиLForm from './forms/i-i-s-roop-т-ч-акта-приемки-l';
import IISRoopАктПриемкиEForm from './forms/i-i-s-roop-акт-приемки-e';
import IISRoopЗаказEForm from './forms/i-i-s-roop-заказ-e';
import IISRoopОтпускМатериалаEForm from './forms/i-i-s-roop-отпуск-материала-e';
import IISRoopСкладEForm from './forms/i-i-s-roop-склад-e';
import IISRoopСотрудникиEForm from './forms/i-i-s-roop-сотрудники-e';
import IISRoopТНEForm from './forms/i-i-s-roop-т-н-e';
import IISRoopТЧАктаПриемкиEForm from './forms/i-i-s-roop-т-ч-акта-приемки-e';
import IISRoopАктПриемкиModel from './models/i-i-s-roop-акт-приемки';
import IISRoopЗаказModel from './models/i-i-s-roop-заказ';
import IISRoopОтпускМатериалаModel from './models/i-i-s-roop-отпуск-материала';
import IISRoopСкладModel from './models/i-i-s-roop-склад';
import IISRoopСотрудникиModel from './models/i-i-s-roop-сотрудники';
import IISRoopТНModel from './models/i-i-s-roop-т-н';
import IISRoopТЧАктаПриемкиModel from './models/i-i-s-roop-т-ч-акта-приемки';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-roop-акт-приемки': IISRoopАктПриемкиModel,
    'i-i-s-roop-заказ': IISRoopЗаказModel,
    'i-i-s-roop-отпуск-материала': IISRoopОтпускМатериалаModel,
    'i-i-s-roop-склад': IISRoopСкладModel,
    'i-i-s-roop-сотрудники': IISRoopСотрудникиModel,
    'i-i-s-roop-т-н': IISRoopТНModel,
    'i-i-s-roop-т-ч-акта-приемки': IISRoopТЧАктаПриемкиModel
  },

  'application-name': 'Roop',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Roop',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Roop',
          title: 'Roop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        roop: {
          caption: 'Roop',
          title: 'Roop',
          'i-i-s-roop-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-roop-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          },
          'i-i-s-roop-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-roop-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-roop-т-н-l': {
            caption: 'ТН',
            title: ''
          },
          'i-i-s-roop-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-roop-т-ч-акта-приемки-l': {
            caption: 'Т ч акта приемки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-roop-акт-приемки-l': IISRoopАктПриемкиLForm,
    'i-i-s-roop-заказ-l': IISRoopЗаказLForm,
    'i-i-s-roop-отпуск-материала-l': IISRoopОтпускМатериалаLForm,
    'i-i-s-roop-склад-l': IISRoopСкладLForm,
    'i-i-s-roop-сотрудники-l': IISRoopСотрудникиLForm,
    'i-i-s-roop-т-н-l': IISRoopТНLForm,
    'i-i-s-roop-т-ч-акта-приемки-l': IISRoopТЧАктаПриемкиLForm,
    'i-i-s-roop-акт-приемки-e': IISRoopАктПриемкиEForm,
    'i-i-s-roop-заказ-e': IISRoopЗаказEForm,
    'i-i-s-roop-отпуск-материала-e': IISRoopОтпускМатериалаEForm,
    'i-i-s-roop-склад-e': IISRoopСкладEForm,
    'i-i-s-roop-сотрудники-e': IISRoopСотрудникиEForm,
    'i-i-s-roop-т-н-e': IISRoopТНEForm,
    'i-i-s-roop-т-ч-акта-приемки-e': IISRoopТЧАктаПриемкиEForm
  },

});

export default translations;
