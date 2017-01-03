/**
 * Created by matt on 1/3/2017.
 */
jQuery(document).ready(function($) {
    $.ajax({
        url : "http://api.wunderground.com/api/5a9742688ee5491c/geolookup/conditions/q/IA/Cedar_Rapids.json",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            alert("Current temperature in " + location + " is: " + temp_f);
        }
    });
});