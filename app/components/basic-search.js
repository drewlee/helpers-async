import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { scheduleOnce } from '@ember/runloop';

export default class BasicSearchComponent extends Component {
  @tracked isVisible = false;

  applyFocus() {
    document.querySelector('#search-input').focus();
  }

  @action showSearch() {
    this.isVisible = true;
    scheduleOnce('afterRender', this.applyFocus);
  }
}
