import Application from 'helpers-async/app';
import config from 'helpers-async/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setApplication(Application.create(config.APP));
setup(QUnit.assert);
start();
