import loadComponent from './loadable';

const Home = loadComponent({ loader: () => import('../pages/Home') });
const Login = loadComponent({ loader: () => import('../pages/Login') });
const Register = loadComponent({ loader: () => import('../pages/Register') });
const UserEdit = loadComponent({ loader: () => import('../pages/UserEdit') });
const Article = loadComponent({ loader: () => import('../pages/Article') });
const Contact = loadComponent({ loader: () => import('../pages/Contact') });

const PathEnums = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	USER_EDIT: '/user-edit',
	ARTICLE: '/article/:id',
	CREATE_ARTICLE: '/create/article',
};

const {
	HOME,
	LOGIN,
	REGISTER,
	USER_EDIT,
	ARTICLE,
	CREATE_ARTICLE,
} = PathEnums;

export const config = [
	{
		path: HOME,
		component: Home,
		exact: true,
	},
	{
		path: LOGIN,
		component: Login,
		exact: true,
	},
	{
		path: REGISTER,
		component: Register,
		exact: true,
	},
	{
		path: USER_EDIT,
		component: UserEdit,
	},
	{
		path:ARTICLE,
		component: Article,
	},
	{
		path: CREATE_ARTICLE,
		component: Contact,
	},
];

export {
	PathEnums
};