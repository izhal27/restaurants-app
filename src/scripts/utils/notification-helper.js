const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification does not supported in this browser');
      return;
    }

    if (!this._checkPermision()) {
      console.log('User did not yet granted permision');
      this._checkPermision();
      return;
    }

    this._showNotification({ title, options });
  },
  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermision() {
    return Notification.permission === 'granted';
  },

  async _requestPermision() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Notification closed');
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
