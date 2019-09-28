import loadComponent from './loadable';

const Home = loadComponent({ loader: () => import('../pages/Home') });
const Login = loadComponent({ loader: () => import('../pages/Login') });
const Register = loadComponent({ loader: () => import('../pages/Register') });
const About = loadComponent({ loader: () => import('../pages/About') });
const Contact = loadComponent({ loader: () => import('../pages/Contact') });
const Me =  loadComponent({ loader: () => import('../pages/Contact/Me') });
const Another =  loadComponent({ loader: () => import('../pages/Contact/Another') });

export const config = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/login',
		component: Login,
		exact: true,
	},
	{
		path: '/register',
		component: Register,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		name: 'About',	
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