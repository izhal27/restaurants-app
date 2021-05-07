const DrawerInitiator = {
  init({
    button, hamburgerIcon, drawer, content,
  }) {
    this._hamburgerIcon = hamburgerIcon;

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    this._hamburgerIcon.classList.toggle('fa-bars');
    this._hamburgerIcon.classList.toggle('fa-times');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    this._hamburgerIcon.classList.add('fa-bars');
    this._hamburgerIcon.classList.remove('fa-times');
  },

};

export default DrawerInitiator;
