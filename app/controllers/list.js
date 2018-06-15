import Controller from '@ember/controller';

export default Controller.extend({
	tasks: [{
		name: 'Terminar code cademy'
	},{
		name: 'Lavar el carro'
	},{
		name: 'Bañar al perro'
	}],
	actions:{
		addTask() {
			var task = this.get('tas');
			var tasks = this.get('tasks');
			tasks.pushObject({
				name: task
			});
			this.set('tas', '');

		}
	}
});
