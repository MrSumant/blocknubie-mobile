const initialState = {
  currentUser: null,
  error: "",
  caseConfirmDetailsAccessed: false,
};

const combinedReducer = (
  state = initialState,
  action: {
    type: any;
    payload: { email: any; user: { username: any }; eventValue: any };
    error: { id: any };
  }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combinedReducer;
