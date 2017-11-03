class OrderHistoryController {
	constructor(History) {
		this.Hisotry = History;
		
		console.log(History);
	}
}

OrderHistoryController.$inject = ['History'];

export default OrderHistoryController;
