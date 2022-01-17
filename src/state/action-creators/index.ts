import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

//Now that the dispatch is of type Action the payload at success needs to be of the right type

export const SearchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCHREPOSITORIES,
		});

		try {
			const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
				params: {
					text: term,
				},
			});

			const names = data.objects.map((result: any) => {
				return result.package.name;
			});

			dispatch({
				type: ActionType.SEARCHREPOSITORIESSUCCESS,
				payload: names,
			});
		} catch (error) {
			dispatch({
				type: ActionType.SEARCHREPOSITORIESERROR,
				payload: error.message,
			});
		}
	};
};
