var index = require('./routes/index');
var users = require('./routes/users');



module.exports = {
	/**
	 * 路由模块配置
	 * @param {Object} app
	 */
	router : function(app){
		app.use('/', index);
		app.use('/users', users);
	}
}