define('templates/helpers/ifProject', ['hbs/handlebars'], function ( Handlebars ) {
  function ifProject ( context, options ) {
  	if(context === 'Project') {
  		return options.fn(this);
  	}
  }
  Handlebars.registerHelper( 'ifProject', ifProject );
  return ifProject;
});