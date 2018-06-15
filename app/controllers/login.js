import Controller from '@ember/controller';

export default Controller.extend({
	user: null,
	password: null,
	actions: {
		enter(){
			var user = this.get('user');
			var password = this.get('password');
			if (user === 'Eguzki' && password === 'cool'){
				this.transitionToRoute('list')
			}
			else {
				alert('Access Denied');
			}
		}
	}
});
