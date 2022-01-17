import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const SearchRepositories = (term: string) => {
	return async (dispatch: any) => {
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
