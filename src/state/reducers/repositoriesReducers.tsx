interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface SearchRepositoriesAction {
	type: ActionType.SEARCHREPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCHREPOSITORIESSUCCESS;
	payload: string[];
}

interface SearchRepositoriesErrorAction {
	type: ActionType.SEARCHREPOSITORIESERROR;
	payload: string;
}

type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;

enum ActionType {
	SEARCHREPOSITORIES = "search_repositories",
	SEARCHREPOSITORIESSUCCESS = "search_repositories_success",
	SEARCHREPOSITORIESERROR = "search_repositories_error",
}

const reducer = (
	state: RepositoriesState,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCHREPOSITORIES:
			//Since reducer's return value is of type RepositoriesState,
			//data has to be an array. Entering a number will not work anymore
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCHREPOSITORIESSUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCHREPOSITORIESERROR:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
