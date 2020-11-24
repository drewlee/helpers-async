import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, getSettledState, render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | basic-search', function(hooks) {
  setupRenderingTest(hooks);

  test('Search input is focused after click', async function(assert) {
    await render(hbs`<BasicSearch/>`);
    console.log('afterRender settledState:', getSettledState());

    await click('[data-test-search-trigger]');
    console.log('afterClick settledState:', getSettledState());

    assert.dom('[data-test-search-input]').isFocused();
  });

  test('Search input is focused after click using settled', async function(assert) {
    await render(hbs`<BasicSearch/>`);
    await settled();
    console.log('afterRender settledState:', getSettledState());

    await click('[data-test-search-trigger]');
    console.log('afterClick settledState:', getSettledState());

    assert.dom('[data-test-search-input]').isFocused();
  });
});
