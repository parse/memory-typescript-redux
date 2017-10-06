import { expect } from 'chai';
import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../../constants/notification';
import {
  showNotification,
  ShowNotification,
  hideNotification,
  HideNotification,
} from '../../actions/notification';
import { Severity } from '../../types';

describe('Actions', () => {
  describe('showNotification()', () => {
    let action: ShowNotification;
    beforeEach(() => {
      action = showNotification('Hello', Severity.Error, 1);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(SHOW_NOTIFICATION);
    });

    it('has the correct payload', () => {
      expect(action.message).to.eq('Hello');
      expect(action.severity).to.eq(Severity.Error);
      expect(action.uid).to.eq(1);
    });
  });
  describe('hideNotification()', () => {
    let action: HideNotification;
    beforeEach(() => {
      action = hideNotification(1);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(HIDE_NOTIFICATION);
    });

    it('has the correct payload', () => {
      expect(action.uid).to.eq(1);
    });
  });
});
