import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('contacts/add-contact-form', 'Integration | Component | contacts/add contact form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contacts/add-contact-form}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#contacts/add-contact-form}}
      template block text
    {{/contacts/add-contact-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
