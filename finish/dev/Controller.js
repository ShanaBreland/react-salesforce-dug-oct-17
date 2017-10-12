export default function getState(context) {
	Visualforce.remoting.Manager.invokeAction(
		'OutlookController.getState',
		(result, event) => {
			if(event.statusCode === 200) {
				context.setState({
					Accounts: result.accounts,
					Contacts: result.contacts
				});
			} else {
				console.error('Errors galore!');
				console.error(result);
				console.error(event);
			}
		}
	);
}