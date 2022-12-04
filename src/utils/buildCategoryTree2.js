export function buildTree2(paths) {
	let urls = paths.map((p) => p.url.split("/").slice(1));
	const tree = [];
	for (let urlParts of urls) {
		let currentBranch = tree;
		for (let i = 0; i < urlParts.length; i++) {
			let part = urlParts[i];
			if (i === urlParts.length - 1) {
				currentBranch.push({ name: part, path: `/${urlParts.join("/")}` });
			} else {
				let nextBranch = currentBranch.find((branch) => branch.name === part);
				if (!nextBranch) {
					nextBranch = {
						name: part,
						path: `/${urlParts.slice(0, i + 1).join("/")}`,
						files: [],
					};
					currentBranch.push(nextBranch);
				}
				currentBranch = nextBranch.files;
			}
		}
	}
	return tree;
}
