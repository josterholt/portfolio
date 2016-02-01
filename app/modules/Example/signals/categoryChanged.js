import copy from 'cerebral-addons/copy';

export default [
	() => console.debug("foo"),
	copy('input:/category', 'state://./selectedCategory')
];
