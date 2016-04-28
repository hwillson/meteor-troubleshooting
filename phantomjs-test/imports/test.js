import phantomjsWrapper from 'phantomjs-wrapper';

phantomjsWrapper({timeout: 60000}, function(err, phantomjs) {
  phantomjs.createPage(function(err, page) {
    page.open('http://www.google.com', function(err) {
      page.on('alert', function(msg) {
        console.log('Alert:', msg);
      }); 
      page.once('loadFinished', function() {
        page.render('google-reloaded.png', function() {
          page.close(function() {
            phantomjs.close(function() {
              console.log('done!');
            }); 
         });
        });
      });
      page.evaluateJavaScript('(function() { alert("hello!"); })');
      page.includeJs('http://code.jquery.com/jquery-2.0.3.min.js', function() {
        page.evaluateJavaScript('(function() { $("a").remove(); })');
        page.render('google-no-anchors.png', function() {
          page.reload();
        });
      });
    });
  });
});
