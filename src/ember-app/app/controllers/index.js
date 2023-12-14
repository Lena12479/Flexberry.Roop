import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.roop.caption'),
          title: i18n.t('forms.application.sitemap.roop.title'),
          children: [{
            link: 'i-i-s-roop-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-сотрудники-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-roop-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-акт-приемки-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-roop-склад-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-склад-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-roop-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-отпуск-материала-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-roop-т-н-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-т-н-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-roop-заказ-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-заказ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-roop-т-ч-акта-приемки-l',
            caption: i18n.t('forms.application.sitemap.roop.i-i-s-roop-т-ч-акта-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.roop.i-i-s-roop-т-ч-акта-приемки-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})