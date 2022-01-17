interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
	switch (action.type) {
		case "search_repositories":
			//Since reducer's return value is of type RepositoriesState,
			//data has to be an array. Entering a number will not work anymore
			return { loading: true, error: null, data: [] };
		case "search_repositories_success":
			return { loading: false, error: null, data: action.payload };
		case "search_repositories_error":
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
