// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery 
//= require bootstrap-sprockets
//= require_tree .

function debugLog(){
        console.log("success!");
      }

function callApi(type){
  $.ajax({
    type: 'GET',
    url: 'http://www.dnd5eapi.co/api/ability-scores/' + type,
    dataType: 'json',

    success: function(data){
      console.log(data);
      $('#ability').html('<em>'+ data.full_name + '</em><br>' + data.desc );
    }
  })
}

function callKlass(klass, id){
  $.ajax({
    type: 'GET',
    url: 'http://www.dnd5eapi.co/api/classes/' + klass,
    dataType: 'json',

    success: function(data){
      console.log(data);
      $('#character_' + id).append(data.name);
    }
  })
}

