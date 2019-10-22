import loadComponent from './loadable';

const Home = loadComponent({ loader: () => import('../pages/Home') });
const Login = loadComponent({ loader: () => import('../pages/Login') });
const Register = loadComponent({ loader: () => import('../pages/Register') });
const UserEdit = loadComponent({ loader: () => import('../pages/UserEdit') });
const Article = loadComponent({ loader: () => import('../pages/Article') });
const Contact = loadComponent({ loader: () => import('../pages/Contact') });
const Me =  loadComponent({ loader: () => import('../pages/Contact/Me') });
const Another =  loadComponent({ loader: () => import('../pages/Contact/Another') });

const PathEnums = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	USER_EDIT: '/user-edit',
	ARTICLE: '/article/:id',
};

const {
	HOME,
	LOGIN,
	REGISTER,
	USER_EDIT,
	ARTICLE,
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
		name: 'UserEdit',	
	},
	{
		path:ARTICLE,
		component: Article,
	},
	{
		path: '/contact',
		component: Contact,
		name: 'Contact',
		routes: [
			{
				path: '/contact/me',
				component: Me,
				exact: true,
				name: 'Me'
			},
			{
				path: '/contact/:another',
				component: Another,
				name: 'Another'
			}
		]
	},
];

export {
	PathEnums
};