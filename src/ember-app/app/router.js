import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-roop-акт-приемки-l');
  this.route('i-i-s-roop-акт-приемки-e',
  { path: 'i-i-s-roop-акт-приемки-e/:id' });
  this.route('i-i-s-roop-акт-приемки-e.new',
  { path: 'i-i-s-roop-акт-приемки-e/new' });
  this.route('i-i-s-roop-заказ-l');
  this.route('i-i-s-roop-заказ-e',
  { path: 'i-i-s-roop-заказ-e/:id' });
  this.route('i-i-s-roop-заказ-e.new',
  { path: 'i-i-s-roop-заказ-e/new' });
  this.route('i-i-s-roop-отпуск-материала-l');
  this.route('i-i-s-roop-отпуск-материала-e',
  { path: 'i-i-s-roop-отпуск-материала-e/:id' });
  this.route('i-i-s-roop-отпуск-материала-e.new',
  { path: 'i-i-s-roop-отпуск-материала-e/new' });
  this.route('i-i-s-roop-склад-l');
  this.route('i-i-s-roop-склад-e',
  { path: 'i-i-s-roop-склад-e/:id' });
  this.route('i-i-s-roop-склад-e.new',
  { path: 'i-i-s-roop-склад-e/new' });
  this.route('i-i-s-roop-сотрудники-l');
  this.route('i-i-s-roop-сотрудники-e',
  { path: 'i-i-s-roop-сотрудники-e/:id' });
  this.route('i-i-s-roop-сотрудники-e.new',
  { path: 'i-i-s-roop-сотрудники-e/new' });
  this.route('i-i-s-roop-т-н-l');
  this.route('i-i-s-roop-т-н-e',
  { path: 'i-i-s-roop-т-н-e/:id' });
  this.route('i-i-s-roop-т-н-e.new',
  { path: 'i-i-s-roop-т-н-e/new' });
  this.route('i-i-s-roop-т-ч-акта-приемки-l');
  this.route('i-i-s-roop-т-ч-акта-приемки-e',
  { path: 'i-i-s-roop-т-ч-акта-приемки-e/:id' });
  this.route('i-i-s-roop-т-ч-акта-приемки-e.new',
  { path: 'i-i-s-roop-т-ч-акта-приемки-e/new' });
});

export default Router;
