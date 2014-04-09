$(function(){
  /*
  * Gauge
  */
  // var opts = {
  //   lines: 20, // The number of lines to draw
  //   angle: 0, // The length of each line
  //   lineWidth: 0.15, // The line thickness
  //   pointer: {
  //     length: 0.9, // The radius of the inner circle
  //     strokeWidth: 0.045, // The rotation offset
  //     color: '#000000' // Fill color
  //   },
  //   limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
  //   colorStart: '#6FADCF',   // Colors
  //   colorStop: '#8FC0DA',    // just experiment with them
  //   strokeColor: '#EBEDEF',   // to see which ones work best for you
  //   generateGradient: true
  // };
  // var target = document.getElementById('gauge'); // your canvas element
  // var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  // gauge.maxValue = 3000; // set max gauge value
  // gauge.animationSpeed = 32; // set animation speed (32 is default value)
  // gauge.set(1650); // set actual value



  $('#gaugeContainer').jqxGauge({
    min: 0,
    max: 100,
    value:50,
    startAngle: 0,
    endAngle: 180,
    width: '280px', height: '140px', radius: '50%',
    ranges: [{ startValue: 0, endValue: 50, style: { fill: '#E74C3C', stroke: '#E74C3C' }, endWidth: 50, startWidth: 50 },
                { startValue: 50, endValue: 100, style: { fill: '#2ECC71', stroke: '#2ECC71' }, endWidth: 50, startWidth: 50 }],
    ticksMinor: { interval: 12.5, size: '5%' },
    ticksMajor: { interval: 50, size: '9%' },
    ticksDistance: '40%',
    value: 0,
    colorScheme: 'scheme03',
    animationDuration: 1200,
    border: { size: '0%', style: { stroke: '#ffEDEF'}, visible: false, showGradient: false },
    cap: { size: '20%', style: { fill: '#34495E', stroke: '#34495E' } , visible: true },
    pointer: { pointerType: 'default', style: { fill: '#34495E', stroke: '#34495E' }, length: '70%', width: '10%', visible: true },
    labels: { distance: '20%', position: 'none', interval: 12.5, offset: [0, -10], visible: true,
      style: { fill: '#34495E', stroke: '#34495E' },
      formatValue: function (value) {
        //return value;
        //console.log(value);
        var out = ( value / 100 ) * 8 - 4;
        console.log(out);
        if ( +out === 4 || +out === -4) {
         return "";
        }
        //if ( out === 1 or out === )
        return out+":00"
      }}
  });

  $('#gaugeContainer').jqxGauge('value', 50);
  updateEarned( {years:5,days:4,hours:3});
  updateLife( { years:49, days:38, hours: 12});
  updateAir( 0.7 );
  updateSteps( 0.3 );
  updateTimeToday( -2 * 60 * 60);
});

function updateEarned( obj ) {
  $('#years-earn').html(obj.years);
  $('#days-earn').html(obj.days);
  $('#hours-earn').html(obj.hours);

  if( obj.positive ) {
    $('.earn-block').removeClass('earn-negative').addClass('earn-positive');
  }else {
    $('.earn-block').addClass('earn-negative').removeClass('earn-positive');
  }
}
function updateLife( obj ) {
  $('#years').html(obj.years);
  $('#days').html(obj.days);
  $('#hours').html(obj.hours);
}
function updateAir( perc ) {
  var perc = Math.round( perc * 100 );
  $('.progress-bar.air').css('width', perc +'%').attr('aria-valuenow', perc);
  if ( perc > 50 ) {
    $('.progress-bar.air').removeClass('progress-bar-danger').addClass('progress-bar-success');
  } else {
    $('.progress-bar.air').addClass('progress-bar-danger').removeClass('progress-bar-success');
  }
}
function updateSteps( perc ) {
  var perc = Math.round( perc * 100 );
  $('.progress-bar.steps').css('width', perc +'%').attr('aria-valuenow', perc);
  if ( perc > 50 ) {
    $('.progress-bar.steps').removeClass('progress-bar-danger').addClass('progress-bar-success');
  } else {
    $('.progress-bar.steps').addClass('progress-bar-danger').removeClass('progress-bar-success');
  }
}
function updateTimeToday( sec ) {
  //var out = ( value / 100 ) * 8 - 4;
  var minutes = sec / 60;
  var offset = 4 * 60;
  var max = 8 * 60;
  var posMinutes = Math.max ( minutes + offset, 0 );
  posMinutes = Math.min( posMinutes, max );
  var val = Math.round( posMinutes / max * 100);

  $('#gaugeContainer').jqxGauge('value', val);
}
