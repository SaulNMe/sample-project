import Controller from '@ember/controller';

export default Controller.extend({
	user: null,
	password: null,
	actions: {
		enter(){
			var user = this.get('user');
			var password = this.get('password');
			if (user === "Eguzki" && pass === "es_cool"){
				alert('Access Granted');
			}
			else {
				alert('Access Denied');
			}
		}
		
	}
});
