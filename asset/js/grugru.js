const dialog = {

	modal: null,
	btnApri: null,
	btnChiudi: null,
	attiva: false,

	avvia: function (dialog) {
		this.modal = document.querySelector(dialog);
		let apri = `${dialog}-btn-apri`;
		let chiudi = `${dialog}-btn-chiudi`;
		this.btnApri = document.querySelector(apri);
		this.btnChiudi = document.querySelector(chiudi);
		this.btnApri.addEventListener('click', () => {
			if (!this.attiva) {
				this.apri();
			}
		});
		this.btnChiudi.addEventListener('click', (evento) => {
			evento.preventDefault();
			this.chiudi();
		});
	},

	apri: function () {
		this.modal.showModal();
		this.attiva = true;
	},

	chiudi: function () {
		this.attiva = false;
		this.modal.close();
	}
}