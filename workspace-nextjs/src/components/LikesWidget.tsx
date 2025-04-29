import {LikeIcon, LikeIndicator} from "@/components/LoadingIndicator";

type LikesWidgetProps = {
	cardId: string;
	currentLikes: number;
};

export function LikesWidget({cardId, currentLikes}: LikesWidgetProps) {

	const {pending} = {pending: false};

	return (
		<form className={"inline-block"}>
			<button
				type={"button"}
				className={
					"flex items-center justify-center space-x-2 rounded border border-slate-200 bg-slate-50 px-3 py-1 text-[15px] text-teal-700 hover:cursor-pointer hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
				}
			>
				<span>{currentLikes}</span>
				{pending ? <LikeIndicator/> : <LikeIcon/>}
			</button>
		</form>
	);
}
