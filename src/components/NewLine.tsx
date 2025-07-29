interface Props {
	text: string;
}
export default function NewlineText({ text }: Props) {
	const newText = text.split("\n").map((str) => <p>{str}</p>);

	return newText;
}
