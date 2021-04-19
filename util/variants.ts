const defaultVariant = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const introListVariant = {
	hidden: { opacity: 0, rotateX: "90deg", skewY: "-5deg" },
	show: { opacity: 1, rotateX: "0deg", skewY: "0deg" },
};

const overlayListVariant = {
	hidden: { opacity: 0, y: "60%" },
	show: { opacity: 1, y: "0%" },
};

const whatIdoVariant = {
	hidden: { opacity: 0, rotateX: "90deg", skewY: "-5deg" },
	show: { opacity: 1, rotateX: "0deg", skewY: "0deg" },
};

export {
	defaultVariant,
	container,
	introListVariant,
	overlayListVariant,
	whatIdoVariant,
};
