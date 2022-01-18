import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state/reducers";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();
	const state = useSelector((state: RootState) => state.repositories)
	console.log(state);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		searchRepositories(term);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(event) => setTerm(event.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoriesList;
