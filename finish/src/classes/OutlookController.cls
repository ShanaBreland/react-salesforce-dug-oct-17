public class OutlookController
{
	public class StateBundle
  {
    List<Account> accounts;
    Map<Id, List<Contact>> contacts;
  }

  @RemoteAction
  public static StateBundle getState()
  {
    StateBundle state = new StateBundle();
    state.accounts = new List<Account>();
    state.contacts = new Map<Id, List<Contact>>();
    
    for(Account a : [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account LIMIT 10])
    {
      state.accounts.add(a);
      state.contacts.put(a.Id, a.Contacts);
    }
    
    return state;
  }
}