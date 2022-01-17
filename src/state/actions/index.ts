import { ActionType } from '../action-types'

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

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;