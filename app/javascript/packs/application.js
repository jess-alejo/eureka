// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// boootstrap
require("material-dashboard-dark-edition/assets/js/core/bootstrap-material-design.min.js")
require("material-dashboard-dark-edition/assets/js/plugins/perfect-scrollbar.jquery.min.js")
require("material-dashboard-dark-edition/assets/js/plugins/chartist.min.js")
require("material-dashboard-dark-edition/assets/js/plugins/bootstrap-notify.js")
require("material-dashboard-dark-edition/assets/js/material-dashboard.js?v=2.1.0")

require("../stylesheets/application")

document.addEventListener("turbolinks:load", function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  })
})
