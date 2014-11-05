module.exports = function(app) {
  app.get('*', function(req,res) {
    res.sendfile('./index.html');  // load single view file
  });
};
